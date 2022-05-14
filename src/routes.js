import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from "./Pages/Home";
import About from './Pages/About';
import Profile from './Pages/Profile';
import RegisterScreen from "./Pages/Register";
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';

export default function Routess(){
    return(
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<HomeScreen/>}/> */}
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterScreen/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}