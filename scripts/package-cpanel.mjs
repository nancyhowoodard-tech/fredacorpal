import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const deployDir = path.join(rootDir, "deploy-cpanel");
const zipPath = path.join(rootDir, "spaceship-cpanel-upload.zip");

console.log("🎨 Ensuring latest logos, icons, and embedded SVGs are generated...");
execSync("node scripts/generate-assets.mjs", { stdio: "inherit", cwd: rootDir });

console.log("🔨 Building Fredacorpal™ for Node.js server (Spaceship / cPanel)...");
execSync("npm run build:node", { stdio: "inherit", cwd: rootDir });

console.log("📦 Preparing deploy-cpanel directory structure...");
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir, { recursive: true });

// Copy server and public
fs.cpSync(path.join(rootDir, ".output", "server"), path.join(deployDir, "server"), { recursive: true });
fs.cpSync(path.join(rootDir, ".output", "public"), path.join(deployDir, "public"), { recursive: true });

// Copy app.js
fs.copyFileSync(path.join(rootDir, "app.js"), path.join(deployDir, "app.js"));

// Write production package.json
const prodPkg = {
  name: "fredacorpal-production",
  version: "1.0.0",
  private: true,
  type: "module",
  main: "app.js",
  scripts: {
    start: "node app.js",
  },
};
fs.writeFileSync(path.join(deployDir, "package.json"), JSON.stringify(prodPkg, null, 2), "utf8");

// Write .env
const envContent = `# Fredacorpal™ Production Environment Variables
NODE_ENV=production
PORT=3000
CONTACT_EMAIL="admin@fredacorpal.world"
RECRUITMENT_EMAIL="admin@fredacorpal.world"
INTERNAL_NOTIFICATION_EMAIL="nancyhowoodard@gmail.com"
SUPABASE_PROJECT_ID="pmzjkqsesiysrqegocuh"
SUPABASE_PUBLISHABLE_KEY="sb_publishable_Du68a9AtcGGEkeKGY4_e_w_1paIVxdb"
SUPABASE_URL="https://pmzjkqsesiysrqegocuh.supabase.co"
VITE_SUPABASE_PROJECT_ID="pmzjkqsesiysrqegocuh"
VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_Du68a9AtcGGEkeKGY4_e_w_1paIVxdb"
VITE_SUPABASE_URL="https://pmzjkqsesiysrqegocuh.supabase.co"
APPLICATIONS_WEBHOOK_URL="https://script.google.com/macros/s/AKfycbzwf_8bP6-T19lbhr8darpKO7oVAm9vosse0QY7j1odwx_yVsdZEHikXWoF3dIUrjJ5kg/exec"
VITE_APPLICATIONS_WEBHOOK_URL="https://script.google.com/macros/s/AKfycbzwf_8bP6-T19lbhr8darpKO7oVAm9vosse0QY7j1odwx_yVsdZEHikXWoF3dIUrjJ5kg/exec"
`;
fs.writeFileSync(path.join(deployDir, ".env"), envContent, "utf8");
fs.writeFileSync(path.join(deployDir, ".env.production"), envContent, "utf8");

// Write .htaccess for robust HTTPS redirection and security
const htaccessContent = `# Force HTTPS Redirection (Proxy & CloudLinux aware)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Security & SSL Headers
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;
fs.writeFileSync(path.join(deployDir, ".htaccess"), htaccessContent, "utf8");

// Create tmp/restart.txt for CloudLinux Passenger automatic reload
const tmpDir = path.join(deployDir, "tmp");
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}
fs.writeFileSync(path.join(tmpDir, "restart.txt"), `${Date.now()}\n`, "utf8");

// Create ZIP
console.log("🗜️ Creating spaceship-cpanel-upload.zip archive...");
if (fs.existsSync(zipPath)) {
  fs.rmSync(zipPath, { force: true });
}

// Use native zip command on mac/unix
execSync(`cd "${deployDir}" && zip -r -q "${zipPath}" . -x "*.DS_Store"`, { cwd: deployDir });

const stats = fs.statSync(zipPath);
console.log(`✅ Packaging complete! Archive created at:`);
console.log(`   ${zipPath} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
console.log(`\nReady to upload directly into your cPanel File Manager!`);
