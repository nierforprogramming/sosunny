import axios from "axios";
import fs from "fs";

const places = JSON.parse(
  fs.readFileSync(new URL("../data2.json", import.meta.url)),
);

const weather = JSON.parse(
  fs.readFileSync(new URL("../data.json", import.meta.url)),
);

export async function getCurrentWeather(req, res) {
  const { place_id, timezone, language, units } = req.query;
  console.log(req.appData);

  const endpoint = "current";

  const options = {
    method: "GET",
    // url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    url: `${process.env.LOCAL_API_URL}/${endpoint}`,

    params: {
      place_id,
      timezone,
      language,
      units,
    },
    headers: {
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);

    if (!place_id) {
      return res.status(400).json({ error: "place_id is required" });
    }

    const place = places.find_places.find((p) => p.place_id === place_id);

    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    res.json(weather);
  } catch (error) {
    console.error(error.message);
  }
}

export async function searchWeather(req, res) {
  const { text } = req.query;
  try {
    const response = await axios.get(
      `${process.env.LOCAL_API_URL_PLACE}/find_places`,
      {
        params: {
          text,
          language: "en",
        },
      },
    );

    const foundPlace = places.find_places.filter((place) =>
      place.name.toLowerCase().startsWith(text.toLowerCase()),
    );
    res.json(foundPlace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch places" });
  }
}
