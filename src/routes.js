import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Request from "./Pages/Request";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import SearchTeacherScreen from "./Pages/SearchTeacher";

export default function Routess() {
	return (
		<Router>
			<Routes>
				{/* <Route exact path="/" element={<HomeScreen/>}/> */}
				<Route path="/" element={<HomeScreen />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/request" element={<Request />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/searchTeacher" element={<SearchTeacherScreen />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}
