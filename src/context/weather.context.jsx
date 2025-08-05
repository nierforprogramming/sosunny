// src/context/WeatherContext.js
import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../utils/utils";
import { getCurrentWeather } from "../api/api";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loader, setLoader] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function _getCurrentWeather() {
      try {
        setLoader(true);
        const cw = await getCurrentWeather("current", place.place_id, "auto");

        if (cw) {
          setCurrentWeather(cw);
          console.log(currentWeather);
        } else {
          setError("Failed to fetch weather data.");
        }
      } catch (err) {
        setError("Something went wrong.");
        console.error(err);
      } finally {
        setLoader(false);
      }
    }

    _getCurrentWeather();
  }, []);

  return (
    <WeatherContext.Provider
      value={{ place, setPlace, loader, currentWeather, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
