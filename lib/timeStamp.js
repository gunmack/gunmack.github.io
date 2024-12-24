import fs from "fs";
import path from "path";

function getLastUpdated(dir) {
  let latestTimestamp = 0;

  function scanDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const fullPath = path.join(directory, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        scanDirectory(fullPath);
      } else {
        if (stats.mtimeMs > latestTimestamp) {
          latestTimestamp = stats.mtimeMs;
        }
      }
    });
  }

  scanDirectory(dir);
  return new Date(latestTimestamp)
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "/");
}

// Run the function and generate the last updated timestamp
const lastUpdated = getLastUpdated("../");
fs.writeFileSync(
  "./public/last-updated.json",
  JSON.stringify({ lastUpdated }, null, 2),
);
