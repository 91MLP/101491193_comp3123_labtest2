import React from 'react';
import { getWeatherIcon } from '../services/weatherService';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, weather, wind, sys, name, visibility, clouds } = weatherData;
  const weatherCondition = weather[0];

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="weather-display">
      <div className="weather-main">
        <div className="location-date">
          <h2 className="location">{name}, {sys.country}</h2>
          <p className="date">{formatDate()}</p>
        </div>

        <div className="current-weather">
          <img
            src={getWeatherIcon(weatherCondition.icon)}
            alt={weatherCondition.description}
            className="weather-icon-large"
          />
          <div className="temperature-section">
            <h1 className="temperature">{Math.round(main.temp)}°C</h1>
            <p className="weather-description">{weatherCondition.main}</p>
            <p className="weather-detail">{weatherCondition.description}</p>
          </div>
        </div>

        <div className="feels-like">
          Feels like {Math.round(main.feels_like)}°C
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Min Temp</span>
            <span className="detail-value">{Math.round(main.temp_min)}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Max Temp</span>
            <span className="detail-value">{Math.round(main.temp_max)}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{main.pressure} hPa</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{wind.speed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind Direction</span>
            <span className="detail-value">{wind.deg}°</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{(visibility / 1000).toFixed(1)} km</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Cloud Cover</span>
            <span className="detail-value">{clouds.all}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
