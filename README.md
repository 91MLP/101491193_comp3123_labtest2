# Weather App - COMP3123 Lab Test 2

**Student ID:** 101491193
**Course:** COMP 3123 - Full Stack Development I
**Live Demo:** [https://101491193-comp3123-labtest2.vercel.app](https://101491193-comp3123-labtest2.vercel.app)

## Overview

A responsive React weather application that fetches and displays real-time weather data from OpenWeatherMap API.

## Features

- Real-time weather data with search functionality
- Modern UI with gradient backgrounds and animations
- Responsive design (mobile & desktop)
- Displays temperature, humidity, wind speed, pressure, and more
- Weather icons and dynamic conditions

## Technologies

- React (Hooks: useState, useEffect)
- Axios for API calls
- OpenWeatherMap API
- CSS3 with animations

## Screenshots

### Main Interface
![Main Interface](screenshots/Screenshot%202025-11-27%20at%2018.34.53.png)

### Search Functionality
![Search Feature](screenshots/Screenshot%202025-11-27%20at%2018.35.13.png)

### Weather Details
![Weather Details](screenshots/Screenshot%202025-11-27%20at%2018.35.48.png)

### Postman API Test
![Postman Test](screenshots/Screenshot%202025-11-27%20at%2018.54.25.png)

## Installation

```bash
# Clone repository
git clone https://github.com/91MLP/101491193_comp3123_labtest2.git
cd 101491193_comp3123_labtest2

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your API key: REACT_APP_WEATHER_API_KEY=your_key_here

# Run application
npm start
```

## React Concepts Demonstrated

- **State Management:** useState for weather data, loading, and error states
- **Side Effects:** useEffect for API calls on component mount
- **Props:** Data passing between SearchBar and WeatherDisplay components
- **Component Architecture:** Reusable functional components
- **Event Handling:** Search form submission and user input

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js         # Search input component
│   ├── WeatherDisplay.js    # Weather data display
│   └── *.css               # Component styles
├── services/
│   └── weatherService.js    # API integration
└── App.js                   # Main component
```

## Deployment

Deployed on Vercel: [https://101491193-comp3123-labtest2.vercel.app](https://101491193-comp3123-labtest2.vercel.app)

## API Reference

OpenWeatherMap API: `https://api.openweathermap.org/data/2.5/weather`

Parameters:
- `q`: City name
- `appid`: API key
- `units`: metric (Celsius)

## Author

**Student ID:** 101491193
**GitHub:** [https://github.com/91MLP/101491193_comp3123_labtest2](https://github.com/91MLP/101491193_comp3123_labtest2)
