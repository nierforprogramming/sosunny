// Function to get Time
export function getHours(timezone = "America/New_York") {
  const now = new Date();
  const options = {
    hour: "numeric",
    hour12: false,
    timeZone: timezone,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return parseInt(formatter.format(now));
}

// get time in 12 hours

export function getHoursInTwelve(timezone = "America/New_York") {
  const date = new Date();

  const formattedHour = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // ensures 12-hour format (AM/PM)
    timeZone: timezone,
  });

  return formattedHour;
}

// Function to greet
export function greet(currentTime) {
  if (currentTime <= 23 && currentTime >= 20)
    return { title: "Good Night", color: "night" };

  if (currentTime <= 19 && currentTime >= 17)
    return { title: "Good Evening", color: "evening" };

  if (currentTime <= 16 && currentTime >= 12)
    return { title: "Good Afternoon", color: "afternoon" };

  return { title: "Good Morning", color: "morning" };
}

// Default Place
export const DEFAULT_PLACE = {
  name: "North Bethesda",
  place_id: "north-bethesda",
  adm_area1: "Maryland",
  adm_area2: "Montgomery",
  country: "United States of America",
  lat: "39.04455N",
  lon: "77.11887W",
  timezone: "America/New_York",
  type: "settlement",
};
