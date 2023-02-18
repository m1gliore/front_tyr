import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrashCan, faUpload} from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../images/default-store-350x350.jpg";
import first from "../../images/NicePng_bullseye-icon-png_3253558.png";
import second from "../../images/gun-2-128.png";
import third from "../../images/pngegg.png";
import {isAdmin, transliterate} from "../../myLibrary";
import {userRequest} from "../../requestMethods";


const Tyr = () => {
    const currentTyr = useLocation().search.split('=')[1]
    const currentPath = useLocation().pathname + useLocation().search
    const [currentGun, setCurrentGun] = useState({})
    const [tyrs, setTyrs] = useState([])
    const [tyrsName, setTyrsName] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(defaultImg)
    const [imageUrlDelete, setImageUrlDelete] = useState(defaultImg)
    const admin = isAdmin()
    const [encodedImage, setEncodedImage] = useState("")
    const gunTypes = []
    const navigate = useNavigate()

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=${currentTyr}`)
                setTyrs(response.data)
                setTyrsName(response.data.imageResponseSet)
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

    }, [currentTyr, file])

    tyrsName.sort((a, b) => {
        return a.idImage - b.idImage
    })

    tyrsName.forEach((item) => {
        if (!gunTypes.includes(item.gunResponse.gunType)) gunTypes.push(item.gunResponse.gunType)
    })

    const ruType = (type) => {
        switch (type) {
            case "ASSAULT_RIFLES":
                return "Автоматы"

            case "PISTOLS":
                return "Пистолеты"

            case "RIFLES":
                return "Винтовки"

            case "SUBMACHINE_GUNS":
                return "Пистолеты-пулеметы"

            case "SHOTGUNS":
                return "Дробовики"

            case "MACHINE_GUNS":
                return "Пулеметы"

            default:
                break
        }
    }

    const handleSubmitAdd = async (event) => {
        event.preventDefault()
        try {
            const name = event.target.name.value
            const gunType = event.target.gunType.value
            const price = event.target.price.value
            const quantity = event.target.quantity.value
            const description = event.target.description.value
            const myJson = {
                url: file.name,
                file: encodedImage,
                gunRequest: {
                    name,
                    gunType,
                    price,
                    quantity,
                    description
                }
            }
            console.log(myJson)
            await userRequest.post(`http://localhost:8040/api/homePage/saveNewImageInGallery/${currentTyr}`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImg = tyrsName[id].idImage
            const myJson = {
                idImg
            }
            console.log(myJson)
            await userRequest.delete('http://localhost:8040/api/homePage/deleteImage/' + idImg, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImg = tyrsName[id].idImage
            const name = event.target.name.value
            const gunType = event.target.gunType.value
            const price = event.target.price.value
            const quantity = event.target.quantity.value
            const description = event.target.description.value
            const idGun = tyrsName[id]?.gunResponse?.idGun
            const myJson = {
                idImage: idImg,
                url: file?.name,
                file: encodedImage,
                gunRequest: {
                    idGun,
                    name,
                    gunType,
                    price,
                    quantity,
                    description
                }
            }
            console.log(myJson)
            await userRequest.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSelectDelete = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = tyrsName[event.target.value]
        console.log(selectedImage)
        const selectedImageUrl = "data:image/" + selectedImage?.url.split('.')[1] + ";base64," + selectedImage?.file
        console.log(selectedImageUrl)
        setImageUrlDelete(selectedImageUrl)
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        setCurrentGun(tyrsName[event.target.value]?.gunResponse)
        const selectedImage = tyrsName[event.target.value]
        const selectedImageUrl = "data:image/" + selectedImage?.url.split('.')[1] + ";base64," + selectedImage?.file
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
                <section className="category">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item active">{tyrs.nameCatalog}</li>
                            </ol>
                        </nav>
                        <div className="category-card">
                            <h1>{tyrs.nameCatalog}</h1>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="category-image-container">
                                        <img
                                            src={"data:image/" + tyrsName[0]?.url.split('.')[1] + ";base64," + tyrsName[0]?.file}
                                            className="img-fluid" alt={tyrs.nameCatalog}/>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <ul className="list-unstyled summary">
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3 iconIcon"
                                                 alt={tyrsName[0]?.gunResponse.firstIconTitle} src={first}/>
                                            <div className="media-body">
                                                <h3>{tyrsName[0]?.gunResponse.firstIconTitle}</h3>
                                                <p>{tyrsName[0]?.gunResponse.firstIconDesc}</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3 iconIcon"
                                                 alt={tyrsName[0]?.gunResponse.secondIconTitle} src={second}/>
                                            <div className="media-body">
                                                <h3>{tyrsName[0]?.gunResponse.secondIconTitle}</h3>
                                                <p>{tyrsName[0]?.gunResponse.secondIconDesc}</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3 iconIcon"
                                                 alt={tyrsName[0]?.gunResponse.thirdIconTitle} src={third}/>
                                            <div className="media-body">
                                                <h3>{tyrsName[0]?.gunResponse.thirdIconTitle}</h3>
                                                <p>{tyrsName[0]?.gunResponse.thirdIconDesc}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-justify">
                                    <noindex><a href={currentPath + "#guns"}>Перейти к списку</a><br/><br/>
                                    </noindex>
                                    <p align='justify'>
                                        {tyrs.description}
                                    </p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                    <noindex><a name="guns"></a></noindex>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {gunTypes.map((category) =>
                    <section key={category}
                             className={"models-list " + (gunTypes.indexOf(category) % 2 === 0 ? "bg-white" : "bg-gray")}>
                        <div className="container">
                            <h2>{ruType(category)}</h2>
                            <div className="row">
                                {tyrsName.map((gun) => gun.gunResponse.gunType === category &&
                                    <div key={gun.gunResponse.idGun} className="col-lg-4 col-md-6">
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block"
                                                 src={"data:image/" + gun.url.split('.')[1] + ";base64," + gun.file}
                                                 alt={gun.alt}/>
                                            <div className="card-body">
                                                <p className="card-title">{gun.gunResponse.name}</p>
                                                <p className="card-text">{gun.gunResponse.description}</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row">
                                                    <div className="col">
                                                        от <span
                                                        className="price">{gun.gunResponse.price} руб.</span> / {gun.gunResponse.quantity} выстр.
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <a href={"/oruzhie-v-tire/" + transliterate(gun.gunResponse.name, false)}
                                                           className="button btn-blue" role="button">Подробнее</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </section>)}
            </main>
            <Footer/>
            {admin && <>
                <Modal active={modalDeleteActive} setActive={setModalDeleteActive}>
                    <h1>Удалить оружие</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDelete}>
                        <div className="leftContainer">
                            <img className="imgAdd"
                                 src={imageUrlDelete}
                                 alt="foto"/>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectDelete}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {tyrsName.map((item) =>
                                    <option key={item.idImage}
                                            value={tyrsName.indexOf(item)}>{tyrsName.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd">Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActive} setActive={setModalAddActive}>
                    <h1>Добавить оружие</h1>
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
                                   placeholder="Введите наименование оружия"/>
                            <input required className="inputAdd" type="text" name="description"
                                   placeholder="Введите описание оружия"/>
                            <input required className="inputAdd" type="number" min="0" name="price"
                                   placeholder="Введите цену оружия за выстрелы"/>
                            <input required className="inputAdd" type="number" min="0" name="quantity"
                                   placeholder="Введите количество выстрелов"/>
                            <select required className="inputAdd" name="gunType">
                                <option selected disabled value="">Выберите один из типов оружия</option>
                                <option value="ASSAULT_RIFLES">Автоматы</option>
                                <option value="PISTOLS">Пистолеты</option>
                                <option value="RIFLES">Винтовки</option>
                                <option value="SUBMACHINE_GUNS">Пистолеты-пулеметы</option>
                                <option value="SHOTGUNS">Дробовики</option>
                                <option value="MACHINE_GUNS">Пулеметы</option>
                            </select>
                            <button className="buttonAdd" onClick={() => {
                                if (imageUrl === defaultImg) alert("Вставьте картинку!")
                            }
                            }>Добавить
                            </button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить оружие</h1>
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
                                {tyrsName.map((item) =>
                                    <option key={item.idImage}
                                            value={tyrsName.indexOf(item)}>{tyrsName.indexOf(item) + 1}</option>)}
                            </select>
                            <input className="inputAdd" type="text" name="name"
                                   placeholder="Введите наименование оружия" value={currentGun?.name}
                                   onChange={event => setCurrentGun(tyrsName[event.target.value])}/>
                            <input className="inputAdd" type="text" name="description"
                                   placeholder="Введите описание оружия" value={currentGun?.description}
                                   onChange={event => setCurrentGun(tyrsName[event.target.value])}/>
                            <input className="inputAdd" type="number" min="0" name="price"
                                   placeholder="Введите цену оружия за выстрелы" value={currentGun?.price}
                                   onChange={event => setCurrentGun(tyrsName[event.target.value])}/>
                            <input className="inputAdd" type="number" min="0" name="quantity"
                                   placeholder="Введите количество выстрелов" value={currentGun?.quantity}
                                   onChange={event => setCurrentGun(tyrsName[event.target.value])}/>
                            <select className="inputAdd" name="gunType" value={currentGun?.gunType}
                                    onChange={event => setCurrentGun(tyrsName[event.target.value])}>
                                <option selected disabled>Выберите один из типов оружия</option>
                                <option value="ASSAULT_RIFLES">Автоматы</option>
                                <option value="PISTOLS">Пистолеты</option>
                                <option value="RIFLES">Винтовки</option>
                                <option value="SUBMACHINE_GUNS">Пистолеты-пулеметы</option>
                                <option value="SHOTGUNS">Дробовики</option>
                                <option value="MACHINE_GUNS">Пулеметы</option>
                            </select>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Tyr