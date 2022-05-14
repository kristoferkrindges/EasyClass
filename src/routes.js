import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPageScreen from "./pages/LandingPage";
import RegisterScreen from "./pages/Register"

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPageScreen/>}/>
                <Route exact path="/register" element={<RegisterScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}