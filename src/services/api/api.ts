import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
});

api.interceptors.response.use(response => response.data);

export { api };