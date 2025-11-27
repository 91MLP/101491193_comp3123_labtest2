import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { getWeatherByCity } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather for default city (Toronto) on component mount
  useEffect(() => {
    handleSearch('Toronto');
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.response?.data?.message || 'City not found. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Weather App</h1>
          <p className="app-subtitle">Get real-time weather information for any city</p>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <WeatherDisplay weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
