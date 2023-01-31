import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import 'unitegallery/dist/css/unite-gallery.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default App
