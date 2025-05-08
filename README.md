Weather App
This is a simple weather app that fetches weather data from the OpenWeatherMap API and displays the current temperature, humidity, and wind speed of a city. You can search for any city by name and get the latest weather information.

Features
Search for weather information by entering a city name.

Displays the current temperature in Celsius.

Shows humidity and wind speed.

Uses the OpenWeatherMap API to fetch weather data.

Technologies Used
HTML5

CSS

JavaScript (Vanilla)

FontAwesome (for icons)

OpenWeatherMap API

Live Demo
You can try the app live at: Weather App Demo

How to Use
Enter the name of a city in the search input field.

Click the search button (magnifying glass icon).

The weather information for that city will be displayed, including:

Temperature (°C)

Location (city name)

Humidity (%)

Wind speed (km/h)

How It Works
The user enters the name of a city into the input field and clicks the search button.

The app sends a request to the OpenWeatherMap API using the entered city name.

The app receives the weather data in JSON format.

The weather information is extracted from the response and displayed in the UI.

API Used
The app uses the OpenWeatherMap API to fetch weather data. You will need an API key to use the service, which you can obtain by creating an account on the OpenWeatherMap website.

API URL
bash
Copy
Edit
https://api.openweathermap.org/data/2.5/weather?units=metric&appid=YOUR_API_KEY&q=
Replace YOUR_API_KEY with your actual API key.

How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/weather-app.git
Navigate to the project directory:

bash
Copy
Edit
cd weather-app
Open index.html in your browser to start the app locally.

License
This project is open-source and available under the MIT License.
