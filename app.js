/**
 * Entry point for cPanel / CloudLinux Passenger (e.g. Spaceship Hosting)
 *
 * This allows Spaceship's "Setup Node.js App" manager to launch the Nitro
 * server whether you upload the full repo or just the compiled .output folder.
 */
import fs from "node:fs";
import path from "node:path";

const serverPath = fs.existsSync(path.resolve("./server/index.mjs"))
  ? "./server/index.mjs"
  : "./.output/server/index.mjs";

import(serverPath).catch((err) => {
  console.error("Failed to start Fredacorpal production server:", err);
  process.exit(1);
});
