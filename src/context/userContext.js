import { createContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth, bd } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import axios from "axios";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);
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
		if (user) {
			console.log("post uid");
			console.log("user", user);
			let userInfo = JSON.stringify({
				userRemoteId: user.uid,
			});
			axios
				.post(
					"https://us6povhbg6.execute-api.sa-east-1.amazonaws.com/Prod/login",
					userInfo,
					{}
				)
				.then((res) => {
					//res.user.uid(res);
					console.log(res);
				})
				.catch((error) => {
					console.error("error", error);
				});
		}
	}, [user]);

	useEffect(() => {
		if (user && user.photoURL) {
			setImageUrl(ref(user.photoURL).toString());
		}
	}, [user]);

	useEffect(() => {
		if (image) {
			console.log("post image");
			console.log("image", image);
			const imageRef = ref(bd, "images/" + image.name);
			uploadBytes(imageRef, image)
				.then((snapshot) => {
					console.log("registrando url " + snapshot.metadata.fullPath);
					updateProfile(auth.currentUser, {
						photoURL: snapshot.metadata.fullPath,
					});
					console.log(snapshot);
				})
				.catch((error) => {
					console.error("Upload failed", error);
				});
		}
	}, [image]);

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
				console.log("registerUser", res.user.uid);
				setUser(res.user);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	const uploadImage = (file) => {
		if (file) setImage(file);
	};

	const signInUser = (email, password) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				console.log("signInUser", res.user.uid);
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
		imageUrl,
		loading,
		error,
		registerUser,
		signInUser,
		logoutUser,
		forgotPassword,
		uploadImage,
	};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};
