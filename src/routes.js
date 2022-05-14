import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPageScreen from "./pages/LandingPage";

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPageScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}