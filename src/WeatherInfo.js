import React from "react";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="current-temp">
            <span>
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </span>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">
              <a href="/">°C</a>
            </span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
