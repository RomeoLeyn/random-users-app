import axios from "axios"

const defaultConfig = {
    baseURL: process.env.REACT_APP_API_URL || 'https://random-users-app.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
}

const api = axios.create(defaultConfig);

export default api;
