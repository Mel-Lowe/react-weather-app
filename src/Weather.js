import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>London, UK</h1>
      <ul>
        <li>Wednesday 17:00</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row mt-4">
        <div className="col-6">
          <div className="current-temp">
            <span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
              />
            </span>
            <span className="temperature">11</span>
            <span className="units">
              <a href="/">°C</a>
            </span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 51%</li>
            <li>Wind: 6mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
