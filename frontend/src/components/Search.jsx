import React, { useContext, useState } from "react";
import { searchWeather } from "../api/api";
import WeatherContext from "../context/weather.context";

export const Search = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setPlace } = useContext(WeatherContext);

  const onSearch = async (e) => {
    setText(e.target.value);
    const data = await searchWeather(e.target.value);
    if (data) {
      setSearchResults(data);
    }
  };

  const changePlace = (place) => {
    setPlace(place);
    setText("");
  };

  return (
    <div className="search-container text-center">
      <input
        type="text"
        placeholder="Search city ..."
        value={text}
        onChange={onSearch}
      />

      <div className="search-results">
        <div className="results-container">
          {searchResults.map((result) => (
            <div
              className="result"
              key={result.place_id}
              onClick={() => changePlace(result)}
            >
              {result.name}, {result.adm_area1}, {result.country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
