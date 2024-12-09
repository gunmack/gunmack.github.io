import process from "process";
export default async function handler(req, res) {
  // Ensure the request method is POST
  if (req.method === "POST") {
    const { latitude, longitude } = req.body;
    console.log("Latitude:", latitude, "Longitude:", longitude);

    if (!latitude || !longitude) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Call the GeoNames API to fetch the timezone using the coordinates
    const username = process.env.GEONAMES_USERNAME;
    const geoNamesUrl = `http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=${username}`;

    try {
      const response = await fetch(geoNamesUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (data.status) {
        return res.status(400).json({ error: data.status.message });
      }

      const timezone = data.timezoneId; // Extract the timezone ID
      const timeZoneParts = timezone.split("/"); // Split like "America/Vancouver"
      const formattedTimeZone = `[${timeZoneParts[0]}]/[${timeZoneParts[1]}]`;
      return res.status(200).json({ timezone: formattedTimeZone });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error fetching timezone", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
