import fs from "fs";
import path from "path";

const ignoreDirs = new Set([".venv", ".next", "node_modules", ".git"]);

function getLastUpdated(dir) {
  let latestTimestamp = 0;

  function scanDirectory(directory, depth = 0) {
    if (depth > 10) return;
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      if (ignoreDirs.has(file)) return;
      const fullPath = path.join(directory, file);
      
      let stats;
      try {
        stats = fs.lstatSync(fullPath);
      } catch (err) {
        if (err.code === "EACCES") return;
        throw err;
      }

      if (stats.isSymbolicLink()) return;

      if (stats.isDirectory()) {
        scanDirectory(fullPath, depth + 1);
      } else {
        if (stats.mtimeMs > latestTimestamp) {
          latestTimestamp = stats.mtimeMs;
        }
      }
    });
  }
  const location = "America/Vancouver";
  scanDirectory(dir);
  return new Date(latestTimestamp).toLocaleString('en-US',{timeZone: location, year: 'numeric', month: '2-digit', day: '2-digit'})
    .split("T")[0]
    .replace(/-/g, "/");
}

// Run the function and generate the last updated timestamp
const lastUpdated = getLastUpdated("../");
fs.writeFileSync(
  "./public/last-updated.json",
  JSON.stringify({ lastUpdated }, null, 2),
);
