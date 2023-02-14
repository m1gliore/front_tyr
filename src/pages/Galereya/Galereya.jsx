import './styles.css';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus, faTrashCan, faUpload} from "@fortawesome/free-solid-svg-icons";
import defaultImg from '../../images/default-store-350x350.jpg'
import {useNavigate} from "react-router-dom";


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
    const [imageUrl, setImageUrl] = useState(defaultImg)
    const [imageUrlDelete, setImageUrlDelete] = useState(defaultImg)
    const admin = true
    const [encodedImage, setEncodedImage] = useState("")
    const navigate = useNavigate()

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
    }, [file])

    images.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmitAdd = async (event) => {
        event.preventDefault()
        try {
            const title = event.target.title.value
            const myJson = {
                url: file.name,
                file: encodedImage,
                title
            }
            console.log(myJson)
            await axios.post('http://localhost:8040/api/homePage/saveNewImageInGallery/galereya', myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImg = images[id].idImage
            const myJson = {
                idImg
            }
            console.log(myJson)
            await axios.delete('http://localhost:8040/api/homePage/deleteImage/' + idImg, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImg = images[id].idImage
            const title = event.target.title.value
            const myJson = {
                idImage: idImg,
                url: file.name,
                file: encodedImage,
                title
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }
    const handleSelectDelete = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = images[event.target.value]
        console.log(selectedImage)
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        console.log(selectedImageUrl)
        setImageUrlDelete(selectedImageUrl)
    }
    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = images[event.target.value]
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        setImageUrl(selectedImageUrl)
    }

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faTrashCan} onClick={() => {
                    setModalDeleteActive(true)
                    setImageUrl(defaultImg)
                }}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => {
                    setModalRedactActive(true)
                    setImageUrl(defaultImg)
                }}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPlus} onClick={() => {
                    setModalAddActive(true)
                    setImageUrl(defaultImg)
                }}/>
            </>}
            <main role="main">
                <div className="galleryContainer">
                    {images.map((image) =>
                        <a key={image.idImage} href={"data:image/" + image.url.split('.')[1] + ";base64," + image.file}
                           data-lightbox="images" data-title={image.title}>
                            <img src={"data:image/" + image.url.split('.')[1] + ";base64," + image.file}
                                 alt={image.idImage}/>
                        </a>
                    )}
                </div>
            </main>
            <Footer/>
            {admin && <>
                <Modal active={modalDeleteActive} setActive={setModalDeleteActive}>
                    <h1>Удалить изображение из галереи</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDelete}>
                        <div className="leftContainer">
                            <img className="imgAdd"
                                 src={imageUrlDelete}
                                 alt="foto"/>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectDelete}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {images.map((item) =>
                                    <option key={item.idImage}
                                            value={images.indexOf(item)}>{images.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd">Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActive} setActive={setModalAddActive}>
                    <h1>Добавить изображение в галерею</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAdd}>
                        <div className="leftContainer">
                            <img className="imgAdd" src={imageUrl} alt="foto"/>
                            <label className="labelAdd" style={{cursor: "pointer"}} htmlFor="file">
                                <FontAwesomeIcon icon={faUpload}/>
                            </label>
                            <input required className="inputAdd" style={{display: "none"}} type="file" id="file"
                                   onChange={handleFile}/>
                        </div>
                        <div className="rightContainer">
                            <input required className="inputAdd" type="text" name="title"
                                   placeholder="Введите подпись изображению"/>
                            <button className="buttonAdd" onClick={() => {
                                if (imageUrl === defaultImg) alert("Вставьте картинку!")
                            }
                            }>Добавить
                            </button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить изображение в галерее</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="leftContainer">
                            <img className="imgAdd" src={imageUrl} alt="foto"/>
                            <label className="labelAdd" style={{cursor: "pointer"}} htmlFor="file">
                                <FontAwesomeIcon icon={faUpload}/>
                            </label>
                            <input className="inputAdd" style={{display: "none"}} type="file" id="file"
                                   onChange={handleFile}/>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {images.map((item) =>
                                    <option key={item.idImage}
                                            value={images.indexOf(item)}>{images.indexOf(item) + 1}</option>)}
                            </select>
                            <input className="inputAdd" type="text" name="title"
                                   placeholder="Введите новую подпись изображению"/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Galereya