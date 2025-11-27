import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true';

// Sample data provided by professor for development/testing
const MOCK_WEATHER_DATA = {
  'toronto': {
    coord: { lon: -79.42, lat: 43.7 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
    base: 'stations',
    main: { temp: 6, feels_like: 2.5, temp_min: 5, temp_max: 7, pressure: 1021, humidity: 65, sea_level: 1021, grnd_level: 1001 },
    visibility: 10000,
    wind: { speed: 2.1, deg: 163 },
    clouds: { all: 5 },
    dt: 1605226867,
    sys: { type: 1, id: 718, country: 'CA', sunrise: 1605182924, sunset: 1605218115 },
    timezone: -18000,
    id: 6167865,
    name: 'Toronto',
    cod: 200
  },
  'new york': {
    coord: { lon: -74.01, lat: 40.71 },
    weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    base: 'stations',
    main: { temp: 8, feels_like: 5, temp_min: 6, temp_max: 10, pressure: 1015, humidity: 72, sea_level: 1015, grnd_level: 1012 },
    visibility: 10000,
    wind: { speed: 3.5, deg: 180 },
    clouds: { all: 40 },
    dt: 1605226867,
    sys: { type: 1, id: 719, country: 'US', sunrise: 1605182924, sunset: 1605218115 },
    timezone: -18000,
    id: 5128581,
    name: 'New York',
    cod: 200
  },
  'london': {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
    base: 'stations',
    main: { temp: 10, feels_like: 8, temp_min: 9, temp_max: 12, pressure: 1010, humidity: 85, sea_level: 1010, grnd_level: 1007 },
    visibility: 8000,
    wind: { speed: 4.2, deg: 220 },
    clouds: { all: 75 },
    dt: 1605226867,
    sys: { type: 1, id: 720, country: 'GB', sunrise: 1605182924, sunset: 1605218115 },
    timezone: 0,
    id: 2643743,
    name: 'London',
    cod: 200
  },
  'paris': {
    coord: { lon: 2.35, lat: 48.85 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    base: 'stations',
    main: { temp: 12, feels_like: 10, temp_min: 11, temp_max: 14, pressure: 1013, humidity: 68, sea_level: 1013, grnd_level: 1010 },
    visibility: 10000,
    wind: { speed: 2.8, deg: 150 },
    clouds: { all: 20 },
    dt: 1605226867,
    sys: { type: 1, id: 721, country: 'FR', sunrise: 1605182924, sunset: 1605218115 },
    timezone: 3600,
    id: 2988507,
    name: 'Paris',
    cod: 200
  },
  'tokyo': {
    coord: { lon: 139.69, lat: 35.69 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
    base: 'stations',
    main: { temp: 15, feels_like: 13, temp_min: 14, temp_max: 17, pressure: 1018, humidity: 55, sea_level: 1018, grnd_level: 1015 },
    visibility: 10000,
    wind: { speed: 1.5, deg: 90 },
    clouds: { all: 0 },
    dt: 1605226867,
    sys: { type: 1, id: 722, country: 'JP', sunrise: 1605182924, sunset: 1605218115 },
    timezone: 32400,
    id: 1850144,
    name: 'Tokyo',
    cod: 200
  }
};

export const getWeatherByCity = async (city) => {
  // Use mock data if flag is enabled (for development/testing)
  if (USE_MOCK_DATA) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cityKey = city.toLowerCase().trim();
        const weatherData = MOCK_WEATHER_DATA[cityKey];

        if (weatherData) {
          resolve(weatherData);
        } else {
          reject({
            response: {
              data: {
                message: 'city not found'
              }
            }
          });
        }
      }, 500); // Simulate network delay
    });
  }

  // Real API call
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWeatherIcon = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
