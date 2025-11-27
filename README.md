# Weather App - COMP3123 Lab Test 2

A modern, responsive weather application built with React that displays real-time weather information for any city using the OpenWeatherMap API.

**Student ID:** 101491193
**Course:** COMP 3123 - Full Stack Development I
**Assignment:** Lab Test 2 (Week 13)

## Features

- Real-time weather data from OpenWeatherMap API
- Search functionality to find weather for any city
- Beautiful, modern UI with gradient backgrounds and animations
- Responsive design for mobile and desktop
- Displays comprehensive weather information:
  - Current temperature
  - Weather condition with icon
  - "Feels like" temperature
  - Min/Max temperatures
  - Humidity and pressure
  - Wind speed and direction
  - Visibility and cloud coverage

## Technologies Used

- **React** - Frontend framework
- **Axios** - HTTP client for API calls
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling with animations and gradients
- **React Hooks** - useState, useEffect for state management

## API Used

This project uses the **OpenWeatherMap API** to fetch real-time weather data.

API Endpoint: `https://api.openweathermap.org/data/2.5/weather`

## Project Structure

```
101491193_comp3123_labtest2/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js          # Search input component
│   │   ├── SearchBar.css         # Search bar styling
│   │   ├── WeatherDisplay.js     # Weather data display component
│   │   └── WeatherDisplay.css    # Weather display styling
│   ├── services/
│   │   └── weatherService.js     # API service layer
│   ├── App.js                    # Main application component
│   ├── App.css                   # Main application styling
│   └── index.js                  # Application entry point
├── .env.example                  # Environment variable template
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/101491193_comp3123_labtest2.git
   cd 101491193_comp3123_labtest2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and add your OpenWeatherMap API key:
     ```
     REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
     ```

4. **Get your API key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/)
   - Navigate to API keys section
   - Generate a new API key
   - Copy and paste it into your `.env` file

5. **Run the application:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## Usage

1. The app loads with default weather data for Toronto
2. Enter any city name in the search bar
3. Click "Search" or press Enter
4. View detailed weather information including temperature, conditions, humidity, wind, and more
5. Search for different cities to compare weather conditions

## React Concepts Demonstrated

### State Management (useState)
- `weatherData` - Stores the fetched weather information
- `loading` - Manages loading state during API calls
- `error` - Handles error messages
- `city` - Manages search input value

### Effects (useEffect)
- Fetches default weather data on component mount
- Demonstrates lifecycle methods in function components

### Props
- Passing data between components (SearchBar, WeatherDisplay)
- Props drilling for callback functions and state

### Component Structure
- Functional components with hooks
- Separation of concerns (presentation vs. logic)
- Reusable component design

## Screenshots

### Main Interface
![Weather App Main Interface](screenshots/main-interface.png)
*Default view showing Toronto weather*

### Search Functionality
![Search Feature](screenshots/search-feature.png)
*Searching for a different city*

### Weather Details
![Weather Details](screenshots/weather-details.png)
*Comprehensive weather information display*

### Mobile Responsive Design
![Mobile View](screenshots/mobile-view.png)
*Responsive design on mobile devices*

### Error Handling
![Error State](screenshots/error-handling.png)
*Error message when city is not found*

## Deployment

This application is deployed on [Vercel/Railway/Render] at:
**Live URL:** [Your deployment URL will go here]

### Deployment Steps (Vercel)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `REACT_APP_WEATHER_API_KEY` with your API key

## Testing with Postman

To test the API endpoint directly:

1. Open Postman
2. Create a new GET request
3. Use URL: `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=YOUR_API_KEY&units=metric`
4. Send the request
5. View the JSON response

See `screenshots/postman-response.png` for example output.

## Challenges and Solutions

### Challenge 1: API Key Security
- **Solution:** Used environment variables to keep API key secure and not commit it to GitHub

### Challenge 2: Error Handling
- **Solution:** Implemented comprehensive try-catch blocks and user-friendly error messages

### Challenge 3: Responsive Design
- **Solution:** Used CSS Grid and Flexbox with media queries for mobile optimization

## Future Enhancements

- 5-day weather forecast
- Geolocation to detect user's current location
- Temperature unit toggle (Celsius/Fahrenheit)
- Weather history and favorites
- Dark/Light theme toggle
- Weather alerts and notifications

## Notes and Assumptions

- Default city is set to Toronto on initial load
- Temperature is displayed in Celsius
- API calls are made client-side (suitable for educational purposes)
- Free tier of OpenWeatherMap API is used (limited to 60 calls/minute)

## Academic Integrity Statement

This project was completed independently following the course requirements for COMP3123 Lab Test 2. All code was written by the student (ID: 101491193) without the use of AI code generation tools, in compliance with George Brown College's academic integrity policy.

## License

This project is created for educational purposes as part of COMP3123 coursework at George Brown College.

## Contact

For questions or feedback:
- **Student ID:** 101491193
- **Course:** COMP3123 - Full Stack Development I
- **Instructor:** Pritesh Patel (pritesh.patel2@georgebrown.ca)

## References

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [React Documentation](https://reactjs.org/)
- [Axios Documentation](https://axios-http.com/)
- [CSS Gradients](https://cssgradient.io/)
