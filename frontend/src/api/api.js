import currentWeather from '../api/currentWeather.json'
import axios from 'axios'
// export async function getCurrentWeather(){
//     return currentWeather
// }

export async function getCurrentWeather(endpoint, place_id, measurementSystem ) {
const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id,
    timezone: 'auto',
    language: 'en',
    units: measurementSystem
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

	try {
		const response = await axios.request(options);        
		return response.data;
	} catch (error) {
		console.error(error.message);
	}
}

// Search weather by places
export async function searchWeather(text) {
const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
  params: {
    text,
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': 'bff2b3c8b7msha30dfa64a6e0509p1682d5jsnb93370ddcde5',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

	try {
		const response = await axios.request(options);
return response.data
	} catch (error) {
		console.error(error);
	}


}