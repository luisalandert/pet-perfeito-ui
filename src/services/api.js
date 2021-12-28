import axios from "axios";

const config = {
    baseURL: "http://localhost:8080",
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Methods', 'Access-Control-Request-Headers', 'Access-Control-Allow-Origin'],
}

const api = axios.create(config);

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default api;