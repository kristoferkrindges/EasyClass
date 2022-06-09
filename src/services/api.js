import axios from "axios";
// import { UserContextProvider } from "../context/userContext";

const api = axios.create({
	baseURL: "https://us6povhbg6.execute-api.sa-east-1.amazonaws.com/Prod/",
	withCredentials: false,
});

// async function uidRequest() {
// 	const idToken = await firebase.auth().currentUser.getIdToken();
// 	const response = await Axios({
// 		url: "https://us6povhbg6.execute-api.sa-east-1.amazonaws.com/Prod/",
// 		method: "POST",
// 		headers: {authorizaton: `Bearer $(idToken)`},
// 		data: {UserContextProvider.user.uid}
// 	})
// 	console.log(response.data)
// }

export default api;
