import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'unitegallery/dist/css/unite-gallery.css';
import 'unitegallery/dist/themes/default/ug-theme-default.css'
import 'jquery/dist/jquery.min.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OruzhieVTire from "./pages/OruzhieVTire/OruzhieVTire";
import Lazernoe from "./pages/Lazernoe/Lazernoe";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/oruzhie-v-tire" element={<OruzhieVTire/>}/>
                <Route exact path="/oruzhie-v-tire/lazernoe" element={<Lazernoe/>}/>
            </Routes>
        </Router>
    )
}

export default App
