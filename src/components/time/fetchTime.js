import React, { useState, useEffect } from "react";
import getUserLocation from "./getTimezone";

// Utility function to fetch the current time for a given location
const getCurrentTime = async (location) => {
  if (!location) {
    console.error("Location parameter is required");
    return { error: "Location parameter is required" };
  }
  const url = `https://worldtimeapi.org/api/timezone/${location}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTPS error! Status: ${response.status}`);
    }

    const data = await response.json();
    const currentTime = data.datetime;

    // Extract HH:MM and determine AM/PM
    const hour = parseInt(currentTime.slice(11, 13), 10); // Extract hour as an integer
    const minute = currentTime.slice(14, 16); // Extract minutes

    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = (hour % 12 === 0 ? 12 : hour % 12).toString(); // Convert to 12-hour format
    const formattedMinute = minute.padStart(2, "0"); // Ensure two-digit minutes

    const city = location.split("/")[1].replace("_", " "); // Extract city name

    const formattedTime = `${formattedHour}:${formattedMinute} ${period}`;
    return { city, time: formattedTime };
  } catch (error) {
    console.error(`Error fetching world time: ${error}`);
    return { error: `Error fetching world time: ${error}` };
  }
};

// React Component Example
function TimeUpdater() {
  const [timeData, setTimeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch time and update state
    const fetchTime = async () => {
      const location = "America/Vancouver";

      var locArray = await getUserLocation();
      var loc2;
      if (locArray && typeof locArray === "string") {
        var loc = locArray.replace("[", "").replace("]", "");
        loc2 = loc.replace("[", "").replace("]", "");
      } else {
        loc2 = location;
      }
      const result = await getCurrentTime(loc2);
      if (result.error) {
        setError("Could not fetch time");
      } else {
        setTimeData(result);
      }
    };

    // Fetch time on initial render
    fetchTime();

    // Set interval to fetch time every 60 seconds
    const interval = setInterval(fetchTime, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : timeData ? (
        <p>
          {timeData.time.split(":")[0]}
          <span className="blink">:</span>
          {timeData.time.split(":")[1]}
          {"        "}
          in {"        "}
          {timeData.city}
        </p>
      ) : (
        <p>Fetching time...</p>
      )}
    </div>
  );
}

export default TimeUpdater;
