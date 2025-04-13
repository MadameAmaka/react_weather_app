import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a href="https://github.com/MadameAmaka" target="_blank" rel="nonreferrer">
          {" "}
          Amaka Onwuli{" "}
        </a>{" "}
        , it is open-sourced on{" "}
        <a href="https://github.com/MadameAmaka/react_weather_app" target="_blank" rel="nonreferrer">
          {" "}
          Github
        </a>{" "}
        and hosted on{" "}
        <a href="https://amakasweatherapp.netlify.app/" target="_blank" rel="nonreferrer">
          {" "}
          Netlify{" "}
        </a>
      </p>
    </div>
  );
}
