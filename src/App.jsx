import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'unitegallery/dist/css/unite-gallery.css';
import 'unitegallery/dist/themes/default/ug-theme-default.css'
import 'jquery/dist/jquery.min.js'
import 'lightbox2/dist/js/lightbox-plus-jquery.js'
import 'lightbox2/dist/css/lightbox.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OruzhieVTire from "./pages/OruzhieVTire/OruzhieVTire";
import Tyr from "./pages/Tyr/Tyr";
import Czenyi from "./pages/Czenyi/Czenyi";
import Uslugi from "./pages/Uslugi/Uslugi";
import Kontaktyi from "./pages/Kontaktyi/Kontaktyi";
import VidyiUslug from "./pages/VidyiUslug/VidyiUslug";
import UserProfile from "./pages/UserProfile/UserProfile";
import LuchshieStrelki from "./pages/LuchshieStrelki/LuchshieStrelki";
import Galereya from "./pages/Galereya/Galereya";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/oruzhie-v-tire" element={<OruzhieVTire/>}/>
                <Route exact path="/oruzhie-v-tire/type" element={<Tyr/>}/>
                <Route exact path="/galereya" element={<Galereya/>}/>
                <Route exact path="/czenyi" element={<Czenyi/>}/>
                <Route exact path="/uslugi" element={<Uslugi/>}/>
                <Route exact path="/uslugi/osnovnyie-uslugi-tira" element={<VidyiUslug/>}/>
                <Route exact path="/uslugi/obuchenie-i-kursyi-strelbyi" element={<VidyiUslug/>}/>
                <Route exact path="/uslugi/yuridicheskim-liczam" element={<VidyiUslug/>}/>
                <Route exact path="/uslugi/podarochnyie-sertifikatyi" element={<VidyiUslug/>}/>
                <Route exact path="/uslugi/razvlecheniya-dlya-vsej-semi" element={<VidyiUslug/>}/>
                <Route exact path="/uslugi/poznanie-i-razvitie" element={<VidyiUslug/>}/>
                <Route exact path="/strelki/type" element={<LuchshieStrelki/>}/>
                <Route exact path="/kontaktyi" element={<Kontaktyi/>}/>
                <Route exact path="/user-profile" element={<UserProfile/>}/>
            </Routes>
        </Router>
    )
}

export default App
