import { FaCloud, FaSun } from "react-icons/fa6";
import { Icon } from "./Icon";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";

export const WeatherData = ({ data }) => {
  //   console.log(data);

  const { place } = useContext(WeatherContext);

  return (
    <section id="weather-data">
      <div className="weather-data-container text-center">
        <div className="weather-data-left">
          <div className="weather-icon">
            <Icon source={`${data?.icon_num}.png`} />
          </div>
        </div>

        <div className="weather-data-right">
          <div className="weather-unit">
            <div className="weather-number">
              {Math.floor(data?.temperature)}
              <span>&deg;</span>
            </div>

            <div className="weather-system">C</div>
          </div>

          <div className="flex weather-feels-container">
            <div className="weather-feels-like">
              Feels Like {Math.ceil(data?.feels_like)}
              <sup>&deg;</sup> C
            </div>

            <div className="weather-condition">{data?.summary}</div>
          </div>

          <div className="city-location bold">
            {place.name}
            {/* <span>AE</span> */}
          </div>

          <div className="weather-extra-data flex">
            <WiHumidity className="icon" />
            <div className="humidity flex">
              <span>{data?.humidity}%</span>
              Humidity
            </div>
            <WiWindy className="icon" />
            <div className="wind-speed flex">
              <span>{data?.wind.speed} Km/h</span>
              Wind Speed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
