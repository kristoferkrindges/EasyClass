import axios from "axios";

const api = axios.create({
    baseURL: "https://wp66cisqye.execute-api.sa-east-1.amazonaws.com/Stage/teacher"
})

export default api;