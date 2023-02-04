import './styles.css';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const Galereya = () => {
    lightbox.option({
        "albumLabel": "Изображение %1 из %2",
        "wrapAround": true
    })

    const [images, setImages] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const admin = true

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/gallery')
                setImages(response.data.imageResponseSet)
            } catch (e) {

            }
        })()
    }, [])

    images.sort((a, b) => {
        return a.idImage - b.idImage
    })

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faTrashCan} onClick={() => setModalDeleteActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => setModalRedactActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPlus} onClick={() => setModalAddActive(true)}/>
            </>}
            <main role="main">
                <div className="galleryContainer">
                    {images.map((image) =>
                        <a key={image.idImage} href={"data:image/" + image.url.split('.')[1] + ";base64," + image.file}
                           data-lightbox="images" data-title={image.url}>
                            <img src={"data:image/" + image.url.split('.')[1] + ";base64," + image.file}
                                 alt={image.idImage}/>
                        </a>
                    )}
                </div>
            </main>
            <Footer/>
            <Modal active={modalDeleteActive} setActive={setModalDeleteActive}>
                <p>Удалить</p>
            </Modal>
            <Modal active={modalAddActive} setActive={setModalAddActive}>
                <p>Добавить</p>
            </Modal>
            <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                <p>Изменить</p>
            </Modal>
        </>
    )
}

export default Galereya