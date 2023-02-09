import './styles.css';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus, faTrashCan, faUpload} from "@fortawesome/free-solid-svg-icons";


const Galereya = () => {
    lightbox.option({
        "albumLabel": "Изображение %1 из %2",
        "wrapAround": true
    })

    const [images, setImages] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState("https://members.hpd-collaborative.org/global_graphics/default-store-350x350.jpg")
    const admin = true
    const [encodedImage, setEncodedImage] = useState("")

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/gallery')
                setImages(response.data.imageResponseSet)
            } catch (e) {
                console.log(e)
            }
        })()

        if (file) {
            setImageUrl(URL.createObjectURL(file))
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setEncodedImage(reader.result)
            }
            reader.onerror = (error) => {
                console.log('Error: ', error)
            }
        }
    }, [file, encodedImage])

    images.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const formData = new FormData(event.target)
            const myJson = {
                url: file.name,
                file: encodedImage,
                //title: formData
            }
            console.log(formData)
            await axios.post('http://localhost:8040/api/homePage/saveNewImageInGallery', myJson)
        } catch (e) {
            console.log(e)
        }
    }
    const refresh = () => window.location.reload()
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
                <h1>Добавить изображение в галерею</h1>
                <form className="modalAdd" onSubmit={handleSubmit}>
                    <div className="leftContainer">
                        <img className="imgAdd" src={imageUrl} alt="foto"/>
                        <label className="labelAdd" style={{cursor: "pointer"}} htmlFor="file">
                            <FontAwesomeIcon icon={faUpload}/>
                        </label>
                        <input className="inputAdd" style={{display: "none"}} type="file" id="file"
                               onChange={handleFile}/>
                    </div>
                    <div className="rightContainer">
                        <input required className="inputAdd" type="text" name="title"
                               placeholder="Введите подпись изображению"/>
                        <button className="buttonAdd" onClick={refresh}>Добавить</button>
                    </div>
                </form>
            </Modal>
            <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                <p>Изменить</p>
            </Modal>
        </>
    )
}

export default Galereya