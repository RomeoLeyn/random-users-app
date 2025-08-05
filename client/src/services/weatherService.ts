import axios from "axios";
import { ResponseWeather, Weather } from "../types";

export const findByLocation = async(
    latitude: string,
    longitude: string,
  ): Promise<Weather> =>  {
    const response = await axios.get<ResponseWeather>(
      `${process.env.REACT_APP_WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`,
    );

    return {
      latitude: response.data.latitude,
      longitude: response.data.longitude,
      current_weather_units: {
        temperature: response.data.current_weather_units.temperature,
      },
      current_weather: {
        temperature: response.data.current_weather.temperature,
      },
      max_temperature: Math.max(...response.data.hourly.temperature_2m),
      min_temperature: Math.min(...response.data.hourly.temperature_2m),
    };
  }