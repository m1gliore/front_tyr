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
import Tyr from "./pages/Tyr/Tyr";
import Czenyi from "./pages/Czenyi/Czenyi";
import Kontaktyi from "./pages/Kontaktyi/Kontaktyi";
import VidyiUslug from "./pages/VidyiUslug/VidyiUslug";
import UserProfile from "./pages/UserProfile/UserProfile";
import LuchshieStrelki from "./pages/LuchshieStrelki/LuchshieStrelki";
import Galereya from "./pages/Galereya/Galereya";
import Sertifikatyi from "./pages/Sertifikatyi/Sertifikatyi";
import Otzyivyi from "./pages/Otzyivyi/Otzyivyi";
import Usluga from "./pages/Usluga/Usluga";
import Oruzhie from "./pages/Oruzhie/Oruzhie";
import {useState} from "react";



const App = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/oruzhie-v-tire/type" element={<Tyr/>}/>
                <Route exact path="/oruzhie-v-tire/:idOruzhie" element={<Oruzhie/>}/>
                <Route exact path="/images/type" element={<Galereya/>}/>
                <Route exact path="/czenyi" element={<Czenyi/>}/>
                <Route exact path="/uslugi/type" element={<VidyiUslug/>}/>
                <Route exact path="/uslugi/:idUsluga" element={<Usluga/>}/>
                <Route exact path="/strelki/type" element={<LuchshieStrelki/>}/>
                <Route exact path="/kontaktyi" element={<Kontaktyi/>}/>
                <Route exact path="/sertifikatyi" element={<Sertifikatyi/>}/>
                <Route exact path="/otzyivyi" element={<Otzyivyi/>}/>
                <Route exact path="/user-profile/:idUser" element={<UserProfile/>}/>
            </Routes>
        </Router>
    )
}
export default App

