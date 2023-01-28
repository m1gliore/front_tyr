import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import 'unitegallery/dist/css/unite-gallery.css';
import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from "../../components/Carousel/Carousel";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home