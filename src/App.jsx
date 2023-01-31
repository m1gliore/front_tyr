import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import 'unitegallery/dist/css/unite-gallery.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OruzhieVTire from "./pages/OruzhieVTire/OruzhieVTire";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/oruzhie-v-tire" element={<OruzhieVTire/>}/>
            </Routes>
        </Router>
    )
}

export default App
