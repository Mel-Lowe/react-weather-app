import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "426fafba639a05te4c8923273b31o101";
  let city = props.cityForecast;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-img">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png"
              alt="cloudy day"
            />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">14°</span>
            <span className="WeatherForecast-temp-min">9°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
