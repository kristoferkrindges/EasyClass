import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebase } from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyCfcz9mk4wT7cfbgPf3hdkPymizjbgSRDo",
	authDomain: "easyclassauthentication.firebaseapp.com",
	projectId: "easyclassauthentication",
	storageBucket: "easyclassauthentication.appspot.com",
	messagingSenderId: "658681893185",
	appId: "1:658681893185:web:bc3bffee5114fb234291c0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
