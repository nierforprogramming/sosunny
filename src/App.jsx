import { useContext } from "react";
import "./App.css";
import Greetings from "./components/Greetings";
import { Loader } from "./components/Loader";
import { Search } from "./components/Search";
import { WeatherData } from "./components/WeatherData";
import WeatherContext from "./context/weather.context";
import { getCurrentWeather } from "./api/api";

function App() {
  const {loader} = useContext(WeatherContext)
  const data = getCurrentWeather()

  return (
    <>
     <section id="weather">
    {
      loader ? (<Loader />) : (
        <div className="weather-container">
        <Greetings />
        <Search />
        <WeatherData data = {data}/>
      </div>
      )


    }
     
       
      </section>

    </>
  );
}

export default App;
