import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus, faTrashCan, faUpload} from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../images/default-store-350x350.jpg";
import {publicRequest, userRequest} from "../../requestMethods";
import {isAdmin} from "../../myLibrary";

const VidyiUslug = () => {
    const currentService = useLocation().search.split('=')[1]
    const currentPath = useLocation().pathname.split('/')[1]
    const [currentUsluga, setCurrentUsluga] = useState({})
    const [services, setServices] = useState([])
    const [serviceNames, setServiceNames] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(defaultImg)
    const [imageUrlDelete, setImageUrlDelete] = useState(defaultImg)
    const admin = isAdmin()
    const [encodedImage, setEncodedImage] = useState("")
    const navigate = useNavigate()

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await publicRequest.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=' + currentService)
                setServices(response.data)
                setServiceNames(response.data.imageResponseSet)
            } catch (e) {
                alert(e)
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
                alert('Error: ', error)
            }
        }
    }, [currentService, file])

    serviceNames.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmitAdd = async (event) => {
        event.preventDefault()
        try {
            const name = event.target.name.value
            const description = event.target.desc.value
            const price = event.target.price.value
            const myJson = {
                url: file.name,
                file: encodedImage,
                serviceRequest:
                    {
                        name,
                        description,
                        price
                    }
            }
            await userRequest.post(`http://localhost:8040/api/homePage/saveNewImageInGallery/${currentService}`, myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImg = serviceNames[id].idImage
            const myJson = {
                idImg
            }
            await userRequest.delete('http://localhost:8040/api/homePage/deleteImage/' + idImg, myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImg = serviceNames[id].idImage
            const name = event.target.name.value
            const description = event.target.desc.value
            const price = event.target.price.value
            const idService = serviceNames[id].serviceResponse.idService
            const myJson = {
                idImage: idImg,
                url: file?.name,
                file: encodedImage,
                serviceRequest:
                    {
                        idService,
                        name,
                        description,
                        price
                    }
            }
            await userRequest.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSelectDelete = (event) => {
        event.preventDefault()
        const selectedImage = serviceNames[event.target.value]
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        setImageUrlDelete(selectedImageUrl)
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        setCurrentUsluga(serviceNames[event.target.value]?.serviceResponse)
        const selectedImage = serviceNames[event.target.value]
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
                <section className="service-part">
                    <div className="container">
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
                                               href={"/" + currentPath + "/" + serviceName.serviceResponse.name}
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
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {serviceNames.map((item) =>
                                    <option key={item.idImage}
                                            value={serviceNames.indexOf(item)}>{serviceNames.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd">Удалить</button>
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
                            <input required className="inputAdd" style={{display: "none"}} type="file" id="file"
                                   onChange={handleFile}/>
                        </div>
                        <div className="rightContainer">
                            <input required className="inputAdd" type="text" name="name"
                                   placeholder="Введите наименование услуги"/>
                            <input required className="inputAdd" type="text" name="desc"
                                   placeholder="Введите описание услуги"/>
                            <input required className="inputAdd" type="number" min="0" name="price"
                                   placeholder="Введите цену услуги"/>
                            <button className="buttonAdd" onClick={() => {
                                if (imageUrl === defaultImg) alert("Вставьте картинку!")
                            }
                            }>Добавить
                            </button>
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
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {serviceNames.map((item) =>
                                    <option key={item.idImage}
                                            value={serviceNames.indexOf(item)}>{serviceNames.indexOf(item) + 1}</option>)}
                            </select>
                            <input className="inputAdd" type="text" name="name"
                                   placeholder="Введите наименование услуги" value={currentUsluga?.name}
                                   onChange={event => setCurrentUsluga(serviceNames[event.target.value])}/>
                            <input className="inputAdd" type="text" name="desc"
                                   placeholder="Введите описание услуги" value={currentUsluga?.description}
                                   onChange={event => setCurrentUsluga(serviceNames[event.target.value])}/>
                            <input required className="inputAdd" type="number" min="0" name="price"
                                   placeholder="Введите цену услуги" value={currentUsluga?.price}
                                   onChange={event => setCurrentUsluga(serviceNames[event.target.value])}/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default VidyiUslug