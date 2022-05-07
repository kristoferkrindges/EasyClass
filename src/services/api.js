import axios from "axios";

const api = axios.create({
    baseURL: "/aws",
    headers: {'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': '*'},
    withCredentials: false,
})

export default api;