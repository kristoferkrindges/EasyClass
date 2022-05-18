import axios from "axios";
//https://q4eorgmov1.execute-api.sa-east-1.amazonaws.com/Prod
const api = axios.create({
    baseURL: "https://jba2gauxbk.execute-api.sa-east-1.amazonaws.com/Prod",
    withCredentials: false,
})

export default api;