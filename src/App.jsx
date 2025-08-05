import { useContext } from "react";
import "./App.css";
import Greetings from "./components/Greetings";
import { Loader } from "./components/Loader";
import { Search } from "./components/Search";
import { WeatherData } from "./components/WeatherData";
import WeatherContext from "./context/weather.context";

function App() {
  const { loader, currentWeather } = useContext(WeatherContext);
  console.log(currentWeather);

  return (
    <>
      <section id="weather">
        {loader ? (
          <Loader />
        ) : (
          <div className="weather-container">
            <Greetings timezone={currentWeather?.timezone} />
            <Search />
            <WeatherData data={currentWeather?.current} />
          </div>
        )}
      </section>
    </>
  );
}

export default App;
