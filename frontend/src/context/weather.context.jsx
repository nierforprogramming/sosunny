// src/context/WeatherContext.js
import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../utils/utils";
import { getCurrentWeather } from "../api/api";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loader, setLoader] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function _getCurrentWeather() {
      try {
        setLoader(true);
        setError("");

        const cw = await getCurrentWeather("current", place.place_id, "metric");

        if (cw) {
          setCurrentWeather(cw);
        }
        setError(cw);
      } catch (err) {
        console.log(err);

        const message =
          err.response?.data?.message ||
          "Something went wrong. Please try again later.";

        setError(message);
      } finally {
        setLoader(false);
      }
    }

    _getCurrentWeather();
  }, [place]);

  return (
    <WeatherContext.Provider
      value={{ place, setPlace, loader, currentWeather, error, setError }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
