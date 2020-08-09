import React from "react";
import logo from "../src/mylogo.png";
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import WeatherReport from "./WeatherReport";
function App() {
  const [result, setResult] = useState({
    weather: {},
    main: {},
    wind: {},
    coordinates: {},
  });
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");
  const [search, toSearch] = useState("chennai");
  const API = "9fa33f1bf9905fb1d72095beabac626f";
  const getWeather = async () => {
    const { data } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API}`
    );

    setResult({
      weather: data.weather[0],
      main: data.main,
      wind: data.wind,
      coordinates: data.coord,
      location: data.name,
      sunrise: data.sys?.sunrise,
      sunset: data.sys?.sunset,
    });
    setIcon(data.weather[0].icon);
  };

  useEffect(() => {
    getWeather();
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    toSearch(city);
    setCity("");
  };
  const { weather, main, wind, coordinates, sunset, sunrise } = result;
  return (
    <div className="back">
      <img src={logo} className="mylogo" alt="" />
      <div className="box">
        <div className="back-face">
          <input
            type="text"
            aria-describedby="my-helper-text"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
        <div className="front-face"></div>
      </div>

      <div className="weatherreport">
        <WeatherReport
          weather={weather}
          main={main}
          wind={wind}
          coordinates={coordinates}
          location={result.location}
          sunrise={sunrise}
          sunset={sunset}
          img={icon}
        />
      </div>
    </div>
  );
}

export default App;
