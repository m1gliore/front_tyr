import './styles.css';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Galereya = () => {
    lightbox.option({
        "albumLabel": "Изображение %1 из %2",
        "wrapAround": true
    })

    return (
        <>
            <Navbar/>
            <main role="main">
                <div className="galleryContainer">
                    <a href="https://tir-centr.by/assets/images/gallery/015.jpg" data-lightbox="images"
                       data-title="Первая">
                        <img src="https://tir-centr.by/assets/images/gallery/015.jpg" alt="one"/>
                    </a>
                    <a href="https://tir-centr.by/assets/images/gallery/023.jpg" data-lightbox="images"
                       data-title="Вторая">
                        <img src="https://tir-centr.by/assets/images/gallery/023.jpg" alt="two"/>
                    </a>
                    <a href="https://tir-centr.by/assets/images/gallery/024.jpg" data-lightbox="images"
                       data-title="Третья">
                        <img src="https://tir-centr.by/assets/images/gallery/024.jpg" alt="three"/>
                    </a>
                    <a href="https://tir-centr.by/assets/images/gallery/033.jpg" data-lightbox="images"
                       data-title="Четвёртая">
                        <img src="https://tir-centr.by/assets/images/gallery/033.jpg" alt="four"/>
                    </a>
                    <a href="https://tir-centr.by/assets/images/gallery/034.jpg" data-lightbox="images"
                       data-title="Пятая">
                        <img src="https://tir-centr.by/assets/images/gallery/034.jpg" alt="five"/>
                    </a>
                    <a href="https://tir-centr.by/assets/images/gallery/035.jpg" data-lightbox="images"
                       data-title="Шестая">
                        <img src="https://tir-centr.by/assets/images/gallery/035.jpg" alt="six"/>
                    </a>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Galereya