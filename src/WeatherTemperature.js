import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
