import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import About from './Pages/About';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return(
    <Router>
        <GlobalStyles></GlobalStyles>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer></Footer>
    </Router>
    );
}

export default App;