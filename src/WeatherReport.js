import React from "react";
import "./Weather.css";
function WeatherReport({
  weather,
  main,
  wind,
  coordinates,
  location,
  sunrise,
  sunset,
  img,
}) {
  return (
    <div className="weather">
      <p>{location}</p>
      <p>{weather.description}</p>
      <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} />
      <p>{Math.round(main.temp - 273.15)} C </p>
      <p>FEELS LIKE {Math.round(main.feels_like - 273.15)} C</p>
      <p>WIND SPEED : {wind.speed} Km/h</p>
      <span>
        {" "}
        <p>SUNSET TIME : {new Date(sunset * 1000).toLocaleTimeString()}</p>
        <p>SUNRISE TIME : {new Date(sunrise * 1000).toLocaleTimeString()}</p>
      </span>
    </div>
  );
}

export default WeatherReport;
