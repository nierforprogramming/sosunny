import axios from "axios";
// export async function getCurrentWeather(){
//     return currentWeather
// }

export async function getCurrentWeather(endpoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    headers: {
      "x-api-key": "69882e8f80aab4fbdabb5938",
    },
    url: `https://apisosunnyv2.vercel.app/api/weather/${endpoint}`,
    // url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    // url: `http://localhost:3001/weather/current`,
    params: {
      place_id,
      timezone: "auto",
      language: "en",
      units: measurementSystem,
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

// Search weather by places
export async function searchWeather(text) {
  const options = {
    method: "GET",
    headers: {
      "x-api-key": "69882e8f80aab4fbdabb5938",
    },
    url: "https://apisosunnyv2.vercel.app/api/weather/find_place",
    // url: `http://localhost:3001/weather/find_places`,

    // url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return (
      error.response?.data?.message ||
      "Something went wrong. Please try again later."
    );
  }
}
