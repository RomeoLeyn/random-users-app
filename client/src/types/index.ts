export type ResponseUsers = {
    results: User[];
    info: {
        results: number;
        page: number;
    };
}

export type User = {
    login: {
        uuid: string;
    };
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        };
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    weather?: Weather;
};

export type Weather = {
    latitude: number;
    longitude: number;
    current_weather_units: {
        temperature: string;
    }
    current_weather: {
        temperature: number;
    };
    max_temperature: number;
    min_temperature: number;
}

export type ResponseWeather = {
    latitude: number;
  longitude: number;
  current_weather_units: {
    temperature: string;
  };
  current_weather: {
    temperature: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
}