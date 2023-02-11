import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrashCan, faUpload} from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../images/default-store-350x350.jpg";

const LuchshieStrelki = () => {
    const [shooters, setShooters] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(defaultImg)
    const [imageUrlDelete, setImageUrlDelete] = useState(defaultImg)
    const admin = true
    const [encodedImage, setEncodedImage] = useState("")

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=luchshie-strelki')
                setShooters(response.data.imageResponseSet)
                console.log(response.data)
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

    shooters.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmitAdd = async (event) => {
        try {
            event.preventDefault()
            const name = event.target.name.value
            const surname = event.target.surname.value
            const patronymic = event.target.patronymic.value
            const result = event.target.result.value
            const successfulHits = event.target.successfulHits.value
            const myJson = {
                url: file.name,
                file: encodedImage,
                shooterRequest: {
                    name,
                    surname,
                    patronymic,
                    result,
                    successfulHits
                }
            }
            console.log(myJson)
            await axios.post('http://localhost:8040/api/homePage/saveNewImageInGallery', myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idShooter = shooters[id].idImage
            const myJson = {
                idShooter
            }
            console.log(myJson)
            await axios.delete('http://localhost:8040/api/homePage/deleteImage/' + idImg, myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idImg = shooters[id].idImage
            const title = event.target.title.value
            const myJson = {
                idImage: idImg,
                url: file.name,
                file: encodedImage,
                title
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson)
        } catch (e) {
            console.log(e)
        }
    }
    const handleSelectDelete = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = shooters[event.target.value]
        console.log(selectedImage)
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        console.log(selectedImageUrl)
        setImageUrlDelete(selectedImageUrl)
    }
    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = shooters[event.target.value]
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        setImageUrl(selectedImageUrl)
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
            <section className="shooters-list bg-white">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item active">Лучшие стрелки</li>
                        </ol>
                    </nav>
                    <h2>Лучшие стрелки</h2>
                    <div className="row">
                        {shooters.map((shooter) =>
                            <div className="col-lg-4 col-md-6" key={shooter.shooterResponse.idShooter}>
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src={"data:image/" + shooter.url.split('.')[1] + ";base64," + shooter.file}
                                         alt={shooter.title}/>
                                    <div className="card-body">
                                        <p className="card-title card-desc">{shooter.shooterResponse.name + " "
                                            + shooter.shooterResponse.patronymic}</p>
                                        <p className="card-desc">Количество
                                            выстрелов: {shooter.shooterResponse.result}</p>
                                        <p className="card-desc">Процент
                                            попаданий: {shooter.shooterResponse.successfulHits}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
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
                                <option selected disabled>Выберите один из вариантов</option>
                                {shooters.map((item) =>
                                    <option key={item.idImage}
                                            value={shooters.indexOf(item)}>{shooters.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd" onClick={refresh}>Удалить</button>
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
                                <option selected disabled>Выберите один из вариантов</option>
                                {shooters.map((item) =>
                                    <option key={item.idImage}
                                            value={shooters.indexOf(item)}>{shooters.indexOf(item) + 1}</option>)}
                            </select>
                            <input className="inputAdd" type="text" name="title"
                                   placeholder="Введите новую подпись изображению"/>
                            <button className="buttonAdd" onClick={refresh}>Добавить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default LuchshieStrelki