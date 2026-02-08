import axios from "axios";
// export async function getCurrentWeather(){
//     return currentWeather
// }

export async function getCurrentWeather(endpoint, place_id, measurementSystem) {
  console.log(place_id, endpoint);

  const options = {
    method: "GET",
    headers: {
      "x-api-key": "69882e8f80aab4fbdabb5938",
    },
    url: `https://ratelimitapi.vercel.app/weather/${endpoint}`,
    // url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      timezone: "auto",
      language: "en",
      units: measurementSystem,
    },
  };

  try {
    const response = await axios.request(options);
    const warning = response.headers["x-ratelimit-warning"] || null;
    console.log(response);
    return {
      data: response.data,
      warning,
    };
  } catch (error) {
    console.log(error);

    return (
      error.response?.data?.message ||
      "Something went wrong. Please try again later."
    );
  }
}

// Search weather by places
export async function searchWeather(text) {
  const options = {
    method: "GET",
    headers: {
      "x-api-key": "69882e8f80aab4fbdabb5938",
    },
    url: "https://ratelimitapi.vercel.app/weather/find_place",

    // url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);

    return (
      error.response?.data?.message ||
      "Something went wrong. Please try again later."
    );
  }
}
