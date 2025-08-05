import axios from "axios";
import api from "../config/api.config"
import { LIMIT_USER_LOAD } from "../constants/constants";
import { ResponseUsers, User } from "../types";
import { findByLocation } from "./weatherService";

export const enrichUsersWithWeather = async (users: User[]) => {
    const resultsWithWeather = await Promise.all(
        users.map(async (user) => {
            const { latitude, longitude } = user.location.coordinates;
            let weather;
            try {
                weather = await findByLocation(
                    latitude,
                    longitude,
                );
            } catch (err) {
            }

            return {
                ...user,
                weather,
            };
        }));

    return resultsWithWeather;
}

export const getRandomUsers = async (page: number) => {
    const response = await axios.get<ResponseUsers>(`${process.env.REACT_APP_RANDOM_USERS_API_URL}/?results=${LIMIT_USER_LOAD}&page=${page}`);
    console.log(process.env.REACT_APP_RANDOM_USERS_API_URL);
    const enrichUsers = await enrichUsersWithWeather(response.data.results);
    return {
        results: enrichUsers,
        info: {
            results: response.data.info.results,
            page: response.data.info.page,
        }
    }
}

export const getSavedUsers = async (page: number) => {
    const response = await api.get<ResponseUsers>(`/users/${page}`);
    const enrichUsers = await enrichUsersWithWeather(response.data.results);
    return {
        results: enrichUsers,
        info: {
            results: response.data.info.results,
            page: response.data.info.page,
        }
    }
}

export const saveUser = async (user: User) => {
    const response = await api.post('/users', user);
    return response;
}

export const deleteUser = async (userId: string) => {
    const response = await api.delete(`/users/remove/${userId}`);
    return response;
}