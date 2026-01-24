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
