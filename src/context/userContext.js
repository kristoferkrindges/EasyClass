import { createContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth, getAuth } from "../firebase";
import { useContext } from "react";
import axios from "axios";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState();
	const [error, setError] = useState("");

	

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (res) => {
			res ? setUser(res) : setUser(null);
			setError("");
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	useEffect(() => {
		if(user) {
		console.log("post uid");
		console.log("user",user);
		let userInfo = JSON.stringify({
			userRemoteId : user.uid,
			email: user.email
		})
		axios.post("https://us6povhbg6.execute-api.sa-east-1.amazonaws.com/Prod/login",
		userInfo, {
		  })
			.then((res) => {
				res.user.uid(res);
				console.log(res);
			})
			.catch((error) => {
				console.error("error", error);
			});
		}
	}, [user]);

	const registerUser = (email, name, password) => {
		///
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				updateProfile(auth.currentUser, {
					displayName: name,
				});
			})
			.then((res) => {
				console.log("registerUser",res.user.uid);
				setUser(res.user);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	const getCurrentUser = () =>{
		let user = auth.currentUser;
		return user;
	}

	const signInUser = (email, password) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				console.log("signInUser",res.user.uid);
				setUser(res.user);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	const logoutUser = () => {
		//
		signOut(auth);
	};

	const forgotPassword = (email) => {
		//
		return sendPasswordResetEmail(auth, email);
	};

	const contextValue = {
		user,
		loading,
		error,
		getCurrentUser,
		registerUser,
		signInUser,
		logoutUser,
		forgotPassword,
	};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};
