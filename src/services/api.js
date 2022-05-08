import axios from "axios";

const api = axios.create({
    baseURL: "/aws",
    headers: {'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': '*',
    'Host': 'q4eorgmov1.execute-api.sa-east-1.amazonaws.com'},
    withCredentials: false,
})

export default api;