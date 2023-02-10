import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const Tyr = () => {
    const currentTyr = useLocation().search.split('=')[1]
    const currentPath = useLocation().pathname + useLocation().search
    const [tyrs, setTyrs] = useState([])
    const [tyrsName, setTyrsName] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const admin = true
    const gunTypes = []

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=${currentTyr}`)
                setTyrs(response.data)
                setTyrsName(response.data.imageResponseSet)
            } catch (e) {

            }
        })()

    }, [currentTyr])

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

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faTrashCan} onClick={() => setModalDeleteActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => setModalRedactActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPlus} onClick={() => setModalAddActive(true)}/>
            </>}
            <main role="main">
                <section className="category">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/oruzhie-v-tire">Тир</a></li>
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
                                            <img className="align-self-center mr-3"
                                                 alt={tyrsName[0]?.gunResponse.firstIconTitle}
                                                 src="https://tir-centr.by/assets/images/categories/Icons_1.png"/>
                                            <div className="media-body">
                                                <h3>{tyrsName[0]?.gunResponse.firstIconTitle}</h3>
                                                <p>{tyrsName[0]?.gunResponse.firstIconDesc}</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3"
                                                 alt={tyrsName[0]?.gunResponse.secondIconTitle}
                                                 src="https://tir-centr.by/assets/images/categories/Icons_4.png"/>
                                            <div className="media-body">
                                                <h3>{tyrsName[0]?.gunResponse.secondIconTitle}</h3>
                                                <p>{tyrsName[0]?.gunResponse.secondIconDesc}</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3"
                                                 alt={tyrsName[0]?.gunResponse.thirdIconTitle}
                                                 src="https://tir-centr.by/assets/images/categories/Icons_3.png"/>
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
                                                        <a href={"/" + gun.gunResponse.v}
                                                           className="btn btn-blue" role="button">Подробнее</a>
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

export default Tyr