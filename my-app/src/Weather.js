import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {

  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [loading, setLoading] = useState(false);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    fetchTemperature();
  }

  function fetchTemperature() {
    setLoading(true);
    let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setTemperature(response.data.temperature.current);
      setHumidity(response.data.temperature.humidity);
      setWind(response.data.wind.speed);
      setDescription(response.data.condition.description);
      setIcon(response.data.condition.icon_url);
    });
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input type="Search" placeholder="Type a City" onChange={updateCity} />
      <input type="Submit" value="Search" />
    </form>
  );

  if (loading) {
    return (
      <div>
        {form}
        <ul className="form">
          <li>
            {" "}
            <strong>{city}</strong>{" "}
          </li>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}% </li>
          <li>Wind: {Math.round(wind)} mph</li>
          <li>
            {" "}
            <img src={icon} alt={description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  } 
 
}

