import './styles.css';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
// import axios from "axios";

const Galereya = () => {
    lightbox.option({
        "albumLabel": "Изображение %1 из %2",
        "wrapAround": true
    })

    const [images, setImages] = useState([])

    useEffect(() => {
        // (async () => {
        //     try {
        //         const response = await axios.get('')
        //         setImages(response.data)
        //     } catch (e) {
        //
        //     }
        // })()
        setImages(
            [{
                "id": 1,
                "title": "Первая",
                "url": "https://tir-centr.by/assets/images/gallery/015.jpg"
            },
                {
                    "id": 2,
                    "title": "Вторая",
                    "url": "https://tir-centr.by/assets/images/gallery/023.jpg"
                },
                {
                    "id": 3,
                    "title": "Третья",
                    "url": "https://tir-centr.by/assets/images/gallery/024.jpg"
                },
                {
                    "id": 4,
                    "title": "Четверая",
                    "url": "https://tir-centr.by/assets/images/gallery/033.jpg"
                },
                {
                    "id": 5,
                    "title": "Пятая",
                    "url": "https://tir-centr.by/assets/images/gallery/034.jpg"
                },
                {
                    "id": 6,
                    "title": "Шестая",
                    "url": "https://tir-centr.by/assets/images/gallery/035.jpg"
                }])
    }, [])



    return (
        <>
            <Navbar/>
            <main role="main">
                <div className="galleryContainer">
                    {images.map((image) =>
                        <a key={image.id} href={image.url} data-lightbox="images" data-title={image.title}>
                            <img src={image.url} alt={image.id}/>
                        </a>
                    )}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Galereya