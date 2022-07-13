import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from "./Pages/Home";

import About from "./Pages/About";
import Request from "./Pages/Request";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import SearchTeacherScreen from "./Pages/SearchTeacher";
import EditProfileScreen from "./Pages/EditProfile";
import PostsScreen from "./Pages/Posts";
import RatingScreen from "./Pages/RatingPage";
import Dashboard from "./Pages/Dashboard"

import {SessionContextProvider} from "./context/SessionContextProvider";
import {PrivateRouter} from "./context/PrivateRouter";
import {LessonRequestContextProvider} from "./components/Shared/Dash/ContextProvider/LessonRequestContextProvider";

export default function EasyClassRoutes() {
    return (
        <SessionContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/rating" element={<RatingScreen/>}/>
                    <Route path="/editprofile" element={<PrivateRouter/>}>
                        <Route path="/editprofile" element={<EditProfileScreen/>}/>
                    </Route>
                    <Route path="/about" element={<PrivateRouter/>}>
                        <Route path="/about" element={<About/>}/>
                    </Route>
                    <Route path="/request" element={<PrivateRouter/>}>
                        <Route path="/request" element={<Request/>}/>
                    </Route>
                    <Route path="/SearchTeacher" element={<PrivateRouter/>}>
                        <Route path="/SearchTeacher" element={<SearchTeacherScreen/>}/>
                    </Route>
                    <Route path="/posts" element={<PrivateRouter/>}>
                        <Route path="/posts" element={<PostsScreen/>}/>
                    </Route>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </SessionContextProvider>
    );
}
