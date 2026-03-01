// src/components/Search.jsx
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
      setError("");
      return;
    }

    const res = await searchWeather(trimmed);

    if (res.success) {
      setSearchResults(res.data);
      setError("");
    } else {
      setSearchResults([]);
      setError(res.message);
    }
  };

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setSearchResults([]);
    setError("");
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
                key={result.place_id}
                className="result"
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
