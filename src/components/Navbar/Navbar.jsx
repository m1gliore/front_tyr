import './styles.css';
import logo from '../../images/Group 1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faEnvelope, faPen, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import Modal from "../Modal/Modal";
import {useEffect, useState} from "react";
import {isAdmin, transliterate} from "../../myLibrary";
import {useNavigate} from "react-router-dom";
import {publicRequest, userRequest} from "../../requestMethods";

const Navbar = () => {
    const currentUser = JSON.parse(localStorage.getItem("user"))?.username
    const loginned = !!currentUser
    const [currentTyr, setCurrentTyr] = useState([])
    const [currentService, setCurrentService] = useState([])
    const [tyrTypes, setTyrTypes] = useState([])
    const [modalDeleteActiveTyr, setModalDeleteActiveTyr] = useState(false)
    const [modalAddActiveTyr, setModalAddActiveTyr] = useState(false)
    const [modalRedactActiveTyr, setModalRedactActiveTyr] = useState(false)
    const [modalDeleteActiveService, setModalDeleteActiveService] = useState(false)
    const [modalAddActiveService, setModalAddActiveService] = useState(false)
    const [modalRedactActiveService, setModalRedactActiveService] = useState(false)
    const [imageUrlDelete, setImageUrlDelete] = useState("Категория")
    const [imageUrl, setImageUrl] = useState("Категория")
    const admin = isAdmin()
    const user = JSON.parse(localStorage.getItem("user"))?.username
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const response = await publicRequest.get(`http://localhost:8040/api/homePage/getHomePageTitle`)
                setTyrTypes(response.data)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    const handleSubmitAdd = async (event) => {
        event.preventDefault()
        try {
            const nameCatalog = event.target.nameCatalog?.value
            const description = event.target.description?.value
            const directoryType = 'TYR'
            const myJson = {
                nameCatalog,
                url: transliterate(nameCatalog, false),
                description,
                directoryType
            }
            await userRequest.post(`http://localhost:8040/api/redact/saveNewServiceCatalog`, myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const url = tyrTypes.titleHomePageResponseSetGun[id]?.url
            const myJson = {
                url
            }
            await userRequest.delete(`http://localhost:8040/api/redact/deleteServiceCatalog/${url}`, myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idServiceCatalog = tyrTypes[id]?.idServiceCatalog
            const nameCatalog = event.target.nameCatalog.value
            const description = event.target.description.value
            const myJson = {
                idServiceCatalog,
                nameCatalog,
                url: transliterate(nameCatalog, false),
                description,
            }
            await userRequest.put('http://localhost:8040/api/redact/updateServiceCatalog', myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitAddService = async (event) => {
        event.preventDefault()
        try {
            const nameCatalog = event.target.nameCatalog.value
            const directoryType = 'SERVICE'
            const myJson = {
                nameCatalog,
                url: transliterate(nameCatalog, false),
                directoryType
            }
            await userRequest.post('http://localhost:8040/api/redact/saveNewServiceCatalog', myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitDeleteService = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const url = tyrTypes.titleHomePageResponseSetService[id]?.url
            const myJson = {
                url
            }
            await userRequest.put(` http://localhost:8040/api/redact/deleteServiceCatalog/${url}`, myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSubmitRedactService = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idServiceCatalog = tyrTypes[id]?.idServiceCatalog
            const nameCatalog = event.target.nameCatalog.value
            const myJson = {
                idServiceCatalog,
                nameCatalog,
                url: transliterate(nameCatalog, false)
            }
            await userRequest.put('http://localhost:8040/api/redact/updateServiceCatalog', myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSelectDelete = (event) => {
        event.preventDefault()
        const selectedImage = tyrTypes.titleHomePageResponseSetGun[event.target.value]
        const selectedImageUrl = selectedImage.title
        setImageUrlDelete(selectedImageUrl)
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        setCurrentTyr(tyrTypes?.titleHomePageResponseSetGun[event.target.value])
        setCurrentService(tyrTypes?.titleHomePageResponseSetService[event.target.value])
    }

    return (
        <header>
            <div className="header-top">
                <div className="container" style={{margin: 0}}>
                    <div className="flexRow">
                        <div className="col-lg-3 header-logo">
                            <img className="logo" src={logo} alt="logo"/>
                        </div>
                        <div className="col-lg-9 header-contact">
                            <div className="row">
                                <div className="col-md-1 col-sm-6 header-top-phone-1">
                                </div>
                                <div className="col-md-2 col-sm-6 header-top-phone-2">
                                    <div className="text-left">
                                        <div className="header-phone">+375 44 769-84-98</div>
                                        <div className="header-phone-desc">(моб.A1)</div>
                                    </div>
                                </div>
                                <div className="col-md-4 header-top-address">
                                    <div className="header-address-mail">
                                        <a href="mailto:tircaliber@gmail.com">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            &nbsp;&nbsp; e-mail: tircaliber@gmail.com
                                        </a>
                                    </div>
                                    <div className="header-address-desc">Торговый центр Европа ул. Сурганова, д. 57Б,
                                        пом. 314а
                                    </div>
                                </div>
                                {!loginned && <>
                                    <div className="col-md-1 footer-auth">
                                        <div className="text-center">
                                            <a href="/login">
                                                Войти
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-1 footer-auth">
                                        <div className="text-center">
                                            <a href="/register">
                                                Зарегистрироваться
                                            </a>
                                        </div>
                                    </div>
                                </>}
                                {loginned &&
                                    <div className="col-md-2 footer-auth">
                                        <div className="text-center">
                                            <a href={`/user-profile/` + JSON.parse(localStorage.getItem("user"))?.username}>
                                                {JSON.parse(localStorage.getItem("user"))?.username}
                                            </a>
                                        </div>
                                    </div>
                                }
                                <div className="col-md-1 header-top-social">
                                    <a href="https://www.instagram.com/tircaliberr/" target="_blank" rel="noreferrer"
                                       className="fa-stack">
                                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                        <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x top-icon"/>
                                    </a>
                                </div>
                                {user &&
                                    <button className="button btn-blue" style={{
                                        color: "rgb(49, 55, 194)",
                                        backgroundColor: "#fff",
                                        width: "15%",
                                        marginLeft: "15px"
                                    }} onClick={() => {
                                        localStorage.removeItem("user")
                                        window.location.replace("/")
                                    }}>Выйти из учётной записи
                                    </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav bg-light">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav text-md-center nav-justified w-100">
                                <li className="nav-item active"><a className="nav-link" href="/">Главная</a></li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
                                                                     href="/oruzhie-v-tire" id="topMenu12"
                                                                     data-bs-toggle="dropdown" aria-haspopup="true"
                                                                     aria-expanded="false">Оружие в тире</a>
                                    <div className="dropdown-menu" aria-labelledby="topMenu12">
                                        {tyrTypes?.titleHomePageResponseSetGun?.map((item) =>
                                            <a key={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}
                                               className="dropdown-item"
                                               href={"/oruzhie-v-tire/type?catalog=" + item.url}>{item.title}</a>
                                        )}

                                        {admin && <>
                                            <FontAwesomeIcon className="action" icon={faTrashCan} onClick={() => {
                                                setModalDeleteActiveTyr(true)
                                                setImageUrl("Категория")
                                            }}/>
                                            <FontAwesomeIcon className="action" icon={faPen} onClick={() => {
                                                setModalRedactActiveTyr(true)
                                                setCurrentTyr({})
                                                setImageUrl("Категория")
                                            }}/>
                                            <FontAwesomeIcon className="action" icon={faPlus} onClick={() => {
                                                setModalAddActiveTyr(true)
                                                setImageUrl("Категория")
                                            }}/>
                                        </>}
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="/images/type?catalog=galereya">Галерея</a></li>
                                <li className="nav-item"><a className="nav-link" href="/czenyi">Цены</a></li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/uslugi"
                                                                     id="topMenu89" data-bs-toggle="dropdown"
                                                                     aria-haspopup="true"
                                                                     aria-expanded="false">Услуги</a>
                                    <div className="dropdown-menu" aria-labelledby="topMenu89">
                                        {tyrTypes?.titleHomePageResponseSetService?.map((item) =>
                                            <a key={tyrTypes.titleHomePageResponseSetService.indexOf(item)}
                                               className="dropdown-item"
                                               href={"/uslugi/type?catalog=" + item.url}>{item.title}</a>
                                        )}
                                        {admin && <>
                                            <FontAwesomeIcon className="action" icon={faTrashCan} onClick={() => {
                                                setModalDeleteActiveService(true)
                                                setImageUrl("Категория")
                                            }}/>
                                            <FontAwesomeIcon className="action" icon={faPen} onClick={() => {
                                                setModalRedactActiveService(true)
                                                setCurrentService({})
                                                setImageUrl("Категория")
                                            }}/>
                                            <FontAwesomeIcon className="action" icon={faPlus} onClick={() => {
                                                setModalAddActiveService(true)
                                                setImageUrl("Категория")
                                            }}/>
                                        </>}</div>
                                </li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="/strelki/type?catalog=luchshie-strelki">Лучшие
                                    стрелки</a></li>
                                <li className="nav-item"><a className="nav-link" href="/kontaktyi">Контакты тира</a>
                                </li>
                                {admin && <li className="nav-item"><a className="nav-link"
                                                                      href="/sertifikatyi">Сертификаты</a>
                                </li>}
                                <li className="nav-item"><a className="nav-link" href="/otzyivyi">Отзывы </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {admin && <>
                <Modal active={modalDeleteActiveTyr} setActive={setModalDeleteActiveTyr}>
                    <h1>Удалить категорию тира</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDelete}>
                        <div className="leftContainer">
                            <div>{imageUrlDelete}</div>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectDelete}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetGun?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}>{tyrTypes.titleHomePageResponseSetGun.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd">Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActiveTyr} setActive={setModalAddActiveTyr}>
                    <h1>Добавить категорию тира</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAdd}>
                        <div className="rightContainer">
                            <input required className="inputAdd" type="text" name="nameCatalog"
                                   placeholder="Введите наименование категории"/>
                            <input required className="inputAdd" type="text" name="description"
                                   placeholder="Введите описание категории"/>
                            <button className="buttonAdd">Добавить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActiveTyr} setActive={setModalRedactActiveTyr}>
                    <h1>Изменить категорию тира</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetGun?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}>{tyrTypes.titleHomePageResponseSetGun.indexOf(item) + 1}</option>)}
                            </select>
                            <input className="inputAdd" type="text" name="nameCatalog"
                                   placeholder="Введите наименование категории" value={currentTyr?.title}
                                   onChange={event => setCurrentTyr(currentTyr[event.target.value])}/>
                            <input className="inputAdd" type="text" name="description"
                                   placeholder="Введите описание категории" value={currentTyr?.description}
                                   onChange={event => setCurrentTyr(currentTyr[event.target.value])}/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalDeleteActiveService} setActive={setModalDeleteActiveService}>
                    <h1>Удалить тип услуг</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDeleteService}>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectDelete}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetService?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetService.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetService.indexOf(item)}>{tyrTypes.titleHomePageResponseSetService.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd">Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActiveService} setActive={setModalAddActiveService}>
                    <h1>Добавить тип услуг</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAddService}>
                        <div className="rightContainer">
                            <input required className="inputAdd" type="text" name="nameCatalog"
                                   placeholder="Введите наименование типа услуг"/>
                            <button className="buttonAdd">Добавить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActiveService} setActive={setModalRedactActiveService}>
                    <h1>Изменить тип услуг</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedactService}>
                        <div className="leftContainer">
                            <div>{imageUrl}</div>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetService?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetService.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetService.indexOf(item)}>{tyrTypes.titleHomePageResponseSetService.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="text" name="nameCatalog"
                                   placeholder="Введите наименование типа услуг" value={currentService?.title}
                                   onChange={event => setCurrentService(currentService[event.target.value])}/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </header>
    )
}

export default Navbar