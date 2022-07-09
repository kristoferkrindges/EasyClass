import axios from "axios";
// import { UserContextProvider } from "../context/userContext";

const api = axios.create({
	baseURL: "https://us6povhbg6.execute-api.sa-east-1.amazonaws.com/Prod/",
	withCredentials: false,
});

//https://m70ooitfj2.execute-api.sa-east-1.amazonaws.com/Prod
//https://csr666.notion.site/csr666/Easy-Class-1f3fcc00289a4a218d976aa44c6a716f

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
