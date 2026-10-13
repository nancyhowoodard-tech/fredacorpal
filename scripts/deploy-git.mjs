#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const deployDir = path.join(rootDir, "deploy-cpanel");

console.log("══════════════════════════════════════════════════════════════════");
console.log("🚀 Fredacorpal™ Git-Powered Direct cPanel Deployment");
console.log("══════════════════════════════════════════════════════════════════");

// Step 1: Package project for cPanel
console.log("\n📦 Step 1: Building production bundle...");
execSync("node scripts/package-cpanel.mjs", { stdio: "inherit", cwd: rootDir });

// Add .cpanel.yml to deploy directory for cPanel automated deployment hook
const cpanelYml = `---
deployment:
  tasks:
    - export DEPLOYPATH=/home/beylpbplht/fredacorpal
    - /bin/cp -R * $DEPLOYPATH/
    - /bin/cp -a .htaccess $DEPLOYPATH/ 2>/dev/null || true
    - /bin/cp -a .env $DEPLOYPATH/ 2>/dev/null || true
    - /bin/cp -a .env.production $DEPLOYPATH/ 2>/dev/null || true
    - /bin/mkdir -p $DEPLOYPATH/tmp
    - /bin/touch $DEPLOYPATH/tmp/restart.txt
`;
fs.writeFileSync(path.join(deployDir, ".cpanel.yml"), cpanelYml, "utf8");

// Step 2: Initialize temporary git inside deploy-cpanel and push to 'production' branch
console.log("\n🌿 Step 2: Pushing production release directly to GitHub (branch: production)...");

const remoteUrl = execSync("git remote get-url origin", { cwd: rootDir, encoding: "utf8" }).trim();

try {
  // Clean any previous .git inside deploy-cpanel
  const deployGit = path.join(deployDir, ".git");
  if (fs.existsSync(deployGit)) {
    fs.rmSync(deployGit, { recursive: true, force: true });
  }

  // Initialize fresh repo in deploy-cpanel
  execSync("git init -b production", { cwd: deployDir, stdio: "pipe" });
  execSync(`git remote add origin "${remoteUrl}"`, { cwd: deployDir, stdio: "pipe" });
  execSync("git add -A", { cwd: deployDir, stdio: "pipe" });

  const commitMsg = `Release ${new Date().toISOString()}`;
  execSync(`git commit -m "${commitMsg}"`, { cwd: deployDir, stdio: "pipe" });

  console.log(`Pushing to ${remoteUrl} (branch: production)...`);
  execSync("git push origin production --force", { cwd: deployDir, stdio: "inherit" });

  // Clean up temporary .git in deployDir so it doesn't affect git status
  fs.rmSync(deployGit, { recursive: true, force: true });

  console.log("\n✅ Production branch updated on GitHub!");
  console.log("══════════════════════════════════════════════════════════════════");
  console.log("🎉 DEPLOYMENT READY IN CPANEL");
  console.log("In your Spaceship cPanel > Git Version Control:");
  console.log("Simply click 'Update from Remote' -> 'Deploy HEAD Commit'!");
  console.log("Your live site at https://fredacorpal.world will update instantly.");
  console.log("══════════════════════════════════════════════════════════════════\n");
} catch (err) {
  console.error("❌ Failed to push production branch:", err.message);
  process.exit(1);
}
