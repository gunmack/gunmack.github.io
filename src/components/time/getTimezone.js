export default function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          try {
            const timezone = await getTimezone(latitude, longitude);
            resolve(timezone); // Resolve with the fetched timezone
          } catch (error) {
            reject("Error fetching timezone: " + error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          reject("Error getting location: " + error);
        },
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

const getTimezone = async (latitude, longitude) => {
  try {
    // Call the API endpoint to get the timezone
    const response = await fetch("/api/timezone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ latitude, longitude }),
    });
    const data = await response.json();
    return data.timezone;
  } catch (error) {
    console.error(`Error fetching timezone: ${error}`);
  }
};
