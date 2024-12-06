// src/api/weather.js

import axios from 'axios';

const weatherAPI = import.meta.env.VITE_WEATHER_API_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (cityName) => {
  if (!cityName) return null;

  try {
    const response = await axios.get(`${weatherAPI}${cityName}&appid=${apiKey}`);
    return response.data.weather[0].description;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};
