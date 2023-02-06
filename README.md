# 06 Server-Side APIs: Weather Dashboard

## Description

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. I am challenged with building a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

I used the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. I created an account with OpenWeather API to get my own API Key and input it into the url to get the data. I also got the latitude and longitude of the city location for the query parameters in the url.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Link and Mock-up

[Click me](https://val-gee.github.io/weather-channel/) to navigate to the deployed application and check the weather in the city of your choice.

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/Screenshot%202023-02-06%20at%201.11.25%20PM.png)

