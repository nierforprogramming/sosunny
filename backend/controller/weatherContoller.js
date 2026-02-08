import axios from "axios";
// import fs from "fs";

// const places = JSON.parse(
//   fs.readFileSync(new URL("../data2.json", import.meta.url)),
// );

// const weather = JSON.parse(
//   fs.readFileSync(new URL("../data.json", import.meta.url)),
// );

export async function getCurrentWeather(req, res) {
  const { place_id, timezone, language, units } = req.query;
  // console.log(req.appData);
  console.log(place_id, timezone, language, units);

  const endpoint = "current";

  const options = {
    method: "GET",
    url: `${process.env.X_RAPIDAPI_HOST}/${endpoint}`,
    // url: `${process.env.LOCAL_API_URL}/${endpoint}`,

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

    res.json({ success: true }, response.data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function searchWeather(req, res) {
  const endpoint = "find_places";
  const { text } = req.query;
  console.log(text);

  const options = {
    method: "GET",
    url: `${process.env.X_RAPIDAPI_HOST}/${endpoint}`,
    // url: `${process.env.LOCAL_API_URL}/${endpoint}`,

    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);

    // const foundPlace = places.find_places.filter((place) =>
    //   place.name.toLowerCase().startsWith(text.toLowerCase()),
    // );

    res.json({ success: true }, response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}
