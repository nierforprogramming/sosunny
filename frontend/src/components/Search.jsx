import React, { useContext, useState } from "react";
import { searchWeather } from "../api/api";
import WeatherContext from "../context/weather.context";

export const Search = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setPlace, setError } = useContext(WeatherContext);

  const onSearch = async (e) => {
    const value = e.target.value;
    const trimmed = value.trim();

    setText(value);

    if (!trimmed) {
      setSearchResults([]);
      return;
    }

    const data = await searchWeather(trimmed);

    if (Array.isArray(data)) {
      setSearchResults(data);
      setError("");
    }

    setError(data);
  };

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setSearchResults([]);
  };

  return (
    <div className="search-container text-center">
      <input
        type="text"
        placeholder="Search city ..."
        value={text}
        onChange={onSearch}
      />

      {searchResults.length > 0 && (
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
      )}
    </div>
  );
};
