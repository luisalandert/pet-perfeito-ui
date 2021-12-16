import axios from "axios";

const config = {
    baseURL: "http://localhost:8081",
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Methods', 'Access-Control-Request-Headers', 'Access-Control-Allow-Origin'],
}

const api = axios.create(config);

export default api;