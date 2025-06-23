import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Temperature:</strong> {main.temp} °C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Forecast:</strong> {weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
