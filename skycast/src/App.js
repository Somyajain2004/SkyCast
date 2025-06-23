import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/weatherCard';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Replace with your key

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(res.data);
      setError('');
    } catch (err) {
      setError('City not found!');
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
