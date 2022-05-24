import axios from "axios";

const api = axios.create({
	baseURL: "https://m70ooitfj2.execute-api.sa-east-1.amazonaws.com/Prod",
	withCredentials: false,
});

export default api;
