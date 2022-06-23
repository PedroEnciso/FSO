import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryWeather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  // const devurl = "http://localhost:3001/weather";
  const fetchWeather = () => {
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  };
  useEffect(fetchWeather, []);
  useEffect(() => {
    return () => {
      setWeather(null);
    };
  }, []);
  return (
    <div>
      <h2>weather in {capital}</h2>
      {weather && (
        <div>
          <p>tempurature: {weather.main.temp}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>{weather.weather[0].description}</p>
          <p>wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeather;
