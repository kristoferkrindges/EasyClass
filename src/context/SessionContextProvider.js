import { createContext, useState } from "react";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import api from "../services/api";

const SessionContext = createContext({});

export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [awsUser, setAwsUser] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [photoURL, setPhotoURL] = useState(
		"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
	);

	async function upload(file, user, setLoading) {
		if (photo == null) return;
		const fileRef = ref(storage, "images/users/" + user.uid);

		setLoading(true);

		const snapshot = await uploadBytes(fileRef, file);

		const photoURL = await getDownloadURL(fileRef);

		updateProfile(user, {
			photoURL,
		});

		setLoading(false);
		window.location.reload();
	}

	function handleChange(e) {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	}

	function handleClick() {
		upload(photo, user, setLoading);
	}

	const logoutUser = () => {
		signOut(auth);
	};

	const contextValue = {
		user,
		awsUser,
		photoURL,
		setPhoto,
		// fetchUser,
		loading,
		error,
		logoutUser,
		setAwsUser,
		setUser,
		// forgotPassword,
		handleChange,
		handleClick,
	};
	return (
		<SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>
	);
};
