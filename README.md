# Weather App

This is a simple weather app that fetches weather data from the OpenWeatherMap API and displays the current temperature, humidity, and wind speed of a city. You can search for any city by name and get the latest weather information.

## Features

- Search for weather information by entering a city name.
- Displays the current temperature in Celsius.
- Shows humidity and wind speed.
- Uses the OpenWeatherMap API to fetch weather data.

## Technologies Used

- HTML5
- CSS
- JavaScript (Vanilla)
- FontAwesome (for icons)
- OpenWeatherMap API

## Live Demo

You can try the app live at: [Weather App Demo](https://weather-app-r39d.onrender.com/)

## How to Use

1. Enter the name of a city in the search input field.
2. Click the search button (magnifying glass icon).
3. The weather information for that city will be displayed, including:
   - Temperature (°C)
   - Location (city name)
   - Humidity (%)
   - Wind speed (km/h)

## How It Works

1. The user enters the name of a city into the input field and clicks the search button.
2. The app sends a request to the OpenWeatherMap API using the entered city name.
3. The app receives the weather data in JSON format.
4. The weather information is extracted from the response and displayed in the UI.

## API Used

The app uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch weather data. You will need an API key to use the service, which you can obtain by creating an account on the OpenWeatherMap website.

### API URL

```bash
https://api.openweathermap.org/data/2.5/weather?units=metric&appid=YOUR_API_KEY&q=
