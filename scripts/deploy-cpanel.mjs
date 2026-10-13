#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const deployEnvPath = path.join(rootDir, ".env.deploy");

// Lightweight zero-dependency .env reader
function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, "utf8");
  const env = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      const key = trimmed.slice(0, idx).trim();
      let val = trimmed.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  }
  return env;
}

const fileEnv = parseEnv(deployEnvPath);
const CPANEL_HOST = process.env.CPANEL_HOST || fileEnv.CPANEL_HOST || "fredacorpal.world";
const CPANEL_USER = process.env.CPANEL_USER || fileEnv.CPANEL_USER;
const CPANEL_PORT = process.env.CPANEL_PORT || fileEnv.CPANEL_PORT || "21098"; // Spaceship default is 21098 (fallback 22)
const CPANEL_PATH = process.env.CPANEL_PATH || fileEnv.CPANEL_PATH || (CPANEL_USER ? `/home/${CPANEL_USER}/fredacorpal` : "~/fredacorpal");
const defaultKeyPath = path.join(process.env.HOME || "", ".ssh", "fredacorpal_deploy");
const SSH_KEY = process.env.SSH_KEY || fileEnv.SSH_KEY || defaultKeyPath;

console.log("══════════════════════════════════════════════════════════════════");
console.log("🚀 Fredacorpal™ 1-Click Direct cPanel Deployment");
console.log("══════════════════════════════════════════════════════════════════");

if (!CPANEL_USER || CPANEL_USER === "your_cpanel_username") {
  console.error(`
❌ cPanel Username not configured!

To enable 1-click deployment, create or update '.env.deploy' with your Spaceship credentials:

File: .env.deploy
------------------------------------------------------------------
CPANEL_HOST=fredacorpal.world
CPANEL_USER=your_cpanel_username      # Found in Spaceship cPanel dashboard
CPANEL_PORT=21098                     # Spaceship default SSH port is 21098
CPANEL_PATH=/home/your_cpanel_username/fredacorpal
SSH_KEY=${SSH_KEY}
------------------------------------------------------------------

Also make sure your public SSH key has been authorized in cPanel:
Run: cat ${defaultKeyPath}.pub
Paste it into: cPanel > SSH Access > Manage SSH Keys > Import & Authorize
`);
  process.exit(1);
}

// 1. Build and package the project
console.log("\n📦 Step 1: Packaging latest production bundle...");
execSync("node scripts/package-cpanel.mjs", { stdio: "inherit", cwd: rootDir });

const deployDir = path.join(rootDir, "deploy-cpanel");
if (!fs.existsSync(deployDir)) {
  console.error("❌ deploy-cpanel staging folder was not found.");
  process.exit(1);
}

// Ensure tmp/restart.txt is primed
const tmpDir = path.join(deployDir, "tmp");
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
fs.writeFileSync(path.join(tmpDir, "restart.txt"), `${Date.now()}\n`, "utf8");

// 2. Test SSH Connection
console.log(`\n🔑 Step 2: Testing SSH connection to ${CPANEL_USER}@${CPANEL_HOST}:${CPANEL_PORT}...`);
const sshOpts = `-p ${CPANEL_PORT} -i "${SSH_KEY}" -o StrictHostKeyChecking=accept-new -o ConnectTimeout=10`;

try {
  execSync(`ssh ${sshOpts} ${CPANEL_USER}@${CPANEL_HOST} "echo 'SSH handshake verified!'"`, {
    stdio: "inherit",
  });
} catch (err) {
  console.error(`
❌ SSH Connection failed!
Please check:
1. Is your cPanel username (${CPANEL_USER}) correct?
2. Did you import and Authorize the public key in cPanel > SSH Access?
   Key: ${defaultKeyPath}.pub
3. Is port ${CPANEL_PORT} accessible? (Try port 22 or 21098)
`);
  process.exit(1);
}

// 3. Rsync deploy-cpanel directory directly to server
console.log(`\n🚀 Step 3: Syncing files to remote path ${CPANEL_PATH}...`);
const rsyncCmd = `rsync -avz --delete --exclude="*.DS_Store" -e "ssh ${sshOpts}" "${deployDir}/" ${CPANEL_USER}@${CPANEL_HOST}:"${CPANEL_PATH}/"`;

try {
  execSync(rsyncCmd, { stdio: "inherit" });
  console.log("✅ File synchronization complete!");
} catch (err) {
  console.error("❌ rsync failed:", err.message);
  process.exit(1);
}

// 4. Trigger Passenger Application Restart
console.log("\n🔄 Step 4: Triggering CloudLinux Passenger restart...");
try {
  execSync(
    `ssh ${sshOpts} ${CPANEL_USER}@${CPANEL_HOST} "mkdir -p '${CPANEL_PATH}/tmp' && touch '${CPANEL_PATH}/tmp/restart.txt'"`,
    { stdio: "inherit" },
  );
  console.log("✅ Passenger application reload signal sent!");
} catch (err) {
  console.warn("⚠️ Warning: Could not touch restart.txt over SSH. Passenger may reload on next file change.");
}

// 5. Health Check
console.log("\n🌐 Step 5: Verifying live site...");
try {
  const checkUrl = `https://${CPANEL_HOST}`;
  console.log(`Pinging ${checkUrl}...`);
  execSync(`curl -s -o /dev/null -w "%{http_code}" --max-time 15 "${checkUrl}"`, { stdio: "inherit" });
  console.log(`\n\n🎉 SUCCESS! Fredacorpal™ has been deployed directly to cPanel!`);
  console.log(`Visit: ${checkUrl}\n`);
} catch {
  console.log(`Deployment uploaded. Please check: https://${CPANEL_HOST}`);
}
