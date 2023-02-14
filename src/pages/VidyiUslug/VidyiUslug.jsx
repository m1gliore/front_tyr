import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus, faTrashCan, faUpload} from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../images/default-store-350x350.jpg";

const VidyiUslug = () => {
    const currentService = useLocation().search.split('=')[1]
    const currentPath = useLocation().pathname
    const [services, setServices] = useState([])
    const [serviceNames, setServiceNames] = useState([])
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
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=' + currentService)
                setServices(response.data)
                setServiceNames(response.data.imageResponseSet)
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
    }, [currentService, file])

    serviceNames.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmitAdd = async (event) => {
        try {
            event.preventDefault()
            const name = event.target.name.value
            const description = event.target.desc.value
            const myJson = {
                url: file.name,
                file: encodedImage,
                serviceRequest:
                    {
                        name,
                        description
                    }
            }
            console.log(myJson)
            await axios.post(`http://localhost:8040/api/homePage/saveNewImageInGallery/${currentService}`, myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idImg = serviceNames[id].idImage
            const myJson = {
                idImg
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
            const idImg = serviceNames[id].idImage
            const name = event.target.name.value
            const description = event.target.desc.value
            const idService = serviceNames[id].serviceResponse.idService
            const myJson = {
                idImage: idImg,
                url: file?.name,
                file: encodedImage,
                serviceRequest:
                    {
                        idService,
                        name,
                        description
                    }
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
        const selectedImage = serviceNames[event.target.value]
        console.log(selectedImage)
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        console.log(selectedImageUrl)
        setImageUrlDelete(selectedImageUrl)
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = serviceNames[event.target.value]
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
            <main role="main">
                <section className="service-part">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/uslugi">Услуги</a></li>
                                <li className="breadcrumb-item active">{services.nameCatalog}</li>
                            </ol>
                        </nav>
                        <h1>{services.nameCatalog}</h1>
                        <div className="row">
                            <div className="col-12 text-justify">
                            </div>
                            {serviceNames.map((serviceName) =>
                                <div key={serviceName.serviceResponse.idService} className="col-lg-6 service-card">
                                    <div className="row inner">
                                        <div className="col-4">
                                            <img
                                                src={"data:image/" + serviceName.url.split('.')[1] + ";base64," + serviceName.file}
                                                className="img-fluid"
                                                alt={serviceName.serviceResponse.name}/>
                                        </div>
                                        <div className="col">
                                            <h2>{serviceName.serviceResponse.name}</h2>
                                            <p>{serviceName.serviceResponse.description}</p>
                                            <a className="btn btn-blue"
                                               href={currentPath + "/" + serviceName.serviceResponse.name}
                                               role="button">Подробнее</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
            {admin && <>
                <Modal active={modalDeleteActive} setActive={setModalDeleteActive}>
                    <h1>Удалить услугу</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDelete}>
                        <div className="leftContainer">
                            <img className="imgAdd"
                                 src={imageUrlDelete}
                                 alt="foto"/>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectDelete}>
                                <option selected disabled>Выберите один из вариантов</option>
                                {serviceNames.map((item) =>
                                    <option key={item.idImage}
                                            value={serviceNames.indexOf(item)}>{serviceNames.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd" onClick={refresh}>Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActive} setActive={setModalAddActive}>
                    <h1>Добавить услугу</h1>
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
                            <input required className="inputAdd" type="text" name="name"
                                   placeholder="Введите наименование услуги"/>
                            <input required className="inputAdd" type="text" name="desc"
                                   placeholder="Введите описание услуги"/>
                            <button className="buttonAdd" onClick={refresh}>Добавить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить услугу</h1>
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
                                {serviceNames.map((item) =>
                                    <option key={item.idImage}
                                            value={serviceNames.indexOf(item)}>{serviceNames.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="text" name="name"
                                   placeholder="Введите наименование услуги"/>
                            <input required className="inputAdd" type="text" name="desc"
                                   placeholder="Введите описание услуги"/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default VidyiUslug