// import currentWeather from '../api/currentWeather.json'
import axios from 'axios'
// export function getCurrentWeather(){
//     return currentWeather.current
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
    'x-rapidapi-key': 'bff2b3c8b7msha30dfa64a6e0509p1682d5jsnb93370ddcde5',
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