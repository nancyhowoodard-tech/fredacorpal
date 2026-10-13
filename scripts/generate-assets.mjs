import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const scratchDir = path.join(rootDir, "scratch");

if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir, { recursive: true });
}

console.log("🎨 Optimizing and embedding assets into self-contained SVGs...");

// 1. Optimize favicon image & embed into favicon.svg
const rawFaviconSvg = fs.readFileSync(path.join(rootDir, "public", "favicon.svg"), "utf8");
const favImgPath = path.join(rootDir, "favicon_Images", "favicon_ImgID1.png");
if (fs.existsSync(favImgPath)) {
  const optFavPath = path.join(scratchDir, "fav_opt.png");
  execSync(`sips -Z 384 "${favImgPath}" --out "${optFavPath}"`);
  const favBase64 = fs.readFileSync(optFavPath).toString("base64");
  const embeddedFaviconSvg = rawFaviconSvg.replace(
    /xlink:href="[^"]*"/,
    `xlink:href="data:image/png;base64,${favBase64}"`
  );
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), embeddedFaviconSvg, "utf8");
  console.log("  ✓ public/favicon.svg created (self-contained, optimized)");
}

// 2. Optimize fredlogo images & embed into fredlogo.svg
const rawLogoSvg = fs.readFileSync(path.join(rootDir, "public", "fredlogo.svg"), "utf8");
const logoImg1Path = path.join(rootDir, "fredlogo_Images", "fredlogo_ImgID1.png");
const logoImg2Path = path.join(rootDir, "fredlogo_Images", "fredlogo_ImgID2.png");
if (fs.existsSync(logoImg1Path) && fs.existsSync(logoImg2Path)) {
  const optLogo1Path = path.join(scratchDir, "logo_opt1.png");
  const optLogo2Path = path.join(scratchDir, "logo_opt2.png");
  execSync(`sips -Z 900 "${logoImg1Path}" --out "${optLogo1Path}"`);
  execSync(`sips -Z 600 "${logoImg2Path}" --out "${optLogo2Path}"`);

  const logo1Base64 = fs.readFileSync(optLogo1Path).toString("base64");
  const logo2Base64 = fs.readFileSync(optLogo2Path).toString("base64");

  let embeddedLogoSvg = rawLogoSvg.replace(
    'xlink:href="fredlogo_Images/fredlogo_ImgID1.png"',
    `xlink:href="data:image/png;base64,${logo1Base64}"`
  );
  embeddedLogoSvg = embeddedLogoSvg.replace(
    'xlink:href="fredlogo_Images/fredlogo_ImgID2.png"',
    `xlink:href="data:image/png;base64,${logo2Base64}"`
  );
  // Also handle case where it was already embedded
  if (embeddedLogoSvg === rawLogoSvg) {
    embeddedLogoSvg = rawLogoSvg.replace(
      /xlink:href="data:image\/png;base64,[^"]*"/,
      `xlink:href="data:image/png;base64,${logo1Base64}"`
    );
  }

  fs.writeFileSync(path.join(publicDir, "fredlogo.svg"), embeddedLogoSvg, "utf8");
  console.log("  ✓ public/fredlogo.svg created (self-contained, optimized)");
}

// 3. Render raster PNGs using macOS sips
console.log("🖼️ Generating high-res raster favicons and app icons...");
execSync(`sips -s format png "${path.join(publicDir, "favicon.svg")}" --out "${path.join(scratchDir, "fav_large.png")}"`);
execSync(`sips -Z 64 "${path.join(scratchDir, "fav_large.png")}" --out "${path.join(publicDir, "favicon.png")}"`);
execSync(`sips -Z 180 "${path.join(scratchDir, "fav_large.png")}" --out "${path.join(publicDir, "apple-touch-icon.png")}"`);

execSync(`sips -s format png "${path.join(publicDir, "fredlogo.svg")}" --out "${path.join(scratchDir, "logo_large.png")}"`);
execSync(`sips -Z 512 "${path.join(scratchDir, "logo_large.png")}" --out "${path.join(publicDir, "fredlogo.png")}"`);

console.log("  ✓ public/favicon.png created (64x64)");
console.log("  ✓ public/apple-touch-icon.png created (180x180)");
console.log("  ✓ public/fredlogo.png created (512x512)");
console.log("✨ All logo and favicon assets successfully generated!");
