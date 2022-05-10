import axios from "axios";

const api = axios.create({
    baseURL: "/aws",
    headers: {'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': '*',
    'Vary': 'Origin'},
    withCredentials: false,
})

export default api;