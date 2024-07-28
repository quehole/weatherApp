# Weather App

A simple weather app that provides current weather and forecast information for any city using the OpenWeatherMap API.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demo

You can see a live demo of the app [here](#).

## Features

- Search for current weather and 5-day forecast by city name
- Displays temperature, weather description, humidity, and wind speed
- Clean and responsive UI

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/quehole/weatherApp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weatherApp
    ```
3. Get your API key from OpenWeatherMap:
    - Go to [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and sign up for a free account.
    - After signing in, go to the [API keys](https://home.openweathermap.org/api_keys) section of your account.
    - Generate a new API key.

4. Replace the placeholder API key in `app.js` with your actual API key:
    ```javascript
    const apiKey = 'your api key';
    ```

## Usage

1. Open `index.html` in your web browser:
    ```sh
    open index.html
    ```
2. Enter a city name and click the "Search" button to get the current weather and forecast.

## License

This project is licensed under the MIT License.
