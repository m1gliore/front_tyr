import './styles.css';
import logo from '../../images/Group 1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faEnvelope, faPen, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import Modal from "../Modal/Modal";
import {useEffect, useState} from "react";
import axios from "axios";
import translit from "../../makeLink";

const Navbar = () => {
    const [tyrTypes, setTyrTypes] = useState([])
    const [modalDeleteActiveTyr, setModalDeleteActiveTyr] = useState(false)
    const [modalAddActiveTyr, setModalAddActiveTyr] = useState(false)
    const [modalRedactActiveTyr, setModalRedactActiveTyr] = useState(false)
    const [modalDeleteActiveService, setModalDeleteActiveService] = useState(false)
    const [modalAddActiveService, setModalAddActiveService] = useState(false)
    const [modalRedactActiveService, setModalRedactActiveService] = useState(false)
    const [imageUrlDelete, setImageUrlDelete] = useState("Категория")
    const [imageUrl, setImageUrl] = useState("Категория")
    const admin = true

    useEffect(() => {
        (async () => {
            try {
                //тут как-то подгрузи типы тиров
                const response = await axios.get(`http://localhost:8040/api/homePage/getHomePageTitle`)
                setTyrTypes(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])


    // tyrTypes.sort((a, b) => {
    //     return a.idServiceCatalog - b.idServiceCatalog
    // })

    const handleSubmitAdd = async (event) => {
        try {
            event.preventDefault()
            const nameCatalog = event.target.nameCatalog.value
            const description = event.target.description.value
            const directoryType = 'TYR'
            const myJson = {
                nameCatalog,
                url: translit(nameCatalog),
                description,
                directoryType
            }
            console.log(myJson)
            await axios.post(`http://localhost:8040/api/redact/saveNewServiceCatalog`, myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idServiceCatalog = tyrTypes[id].idServiceCatalog
            const myJson = {
                idServiceCatalog
            }
            console.log(myJson)
            await axios.delete('http://localhost:8040/api/homePage/deleteImage/', myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idServiceCatalog = tyrTypes[id].idServiceCatalog
            const nameCatalog = event.target.nameCatalog.value
            const description = event.target.description.value
            const myJson = {
                idServiceCatalog,
                nameCatalog,
                url: translit(nameCatalog),
                description,
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson)
        } catch (e) {
            console.log(e)
        }
    }
    const handleSubmitAddService = async (event) => {
        try {
            event.preventDefault()
            const nameCatalog = event.target.nameCatalog.value
            const directoryType = 'SERVICE'
            const myJson = {
                nameCatalog,
                url: translit(nameCatalog),
                directoryType
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/redact/saveNewServiceCatalog', myJson)
        } catch (e) {
            console.log(e)
        }
    }
    const handleSubmitDeleteService = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idServiceCatalog = tyrTypes[id].idServiceCatalog
            const myJson = {
                idServiceCatalog
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedactService = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idServiceCatalog = tyrTypes[id].idServiceCatalog
            const nameCatalog = event.target.nameCatalog.value
            const myJson = {
                idServiceCatalog,
                nameCatalog,
                url: translit(nameCatalog)
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
        const selectedImage = tyrTypes.titleHomePageResponseSetGun[event.target.value]
        console.log(selectedImage)
        const selectedImageUrl = selectedImage.title
        console.log(selectedImageUrl)
        setImageUrlDelete(selectedImageUrl)
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = tyrTypes.titleHomePageResponseSetService[event.target.value]
        const selectedImageUrl = selectedImage.title
        setImageUrl(selectedImageUrl)
    }

    const refresh = () => window.location.reload()
    return (
        <header>
            <div className="header-top">
                <div className="container" style={{marginLeft: "10px", marginRight: "10px"}}>
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
                                <div className="col-md-2 header-top-social">
                                    <a href="https://www.instagram.com/tircaliberr/" target="_blank" rel="noreferrer"
                                       className="fa-stack">
                                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                        <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x top-icon"/>
                                    </a>
                                </div>
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
                                            <FontAwesomeIcon className="action" icon={faTrashCan}
                                                             onClick={() => setModalDeleteActiveTyr(true)}/>
                                            <FontAwesomeIcon className="action" icon={faPen}
                                                             onClick={() => setModalRedactActiveTyr(true)}/>
                                            <FontAwesomeIcon className="action" icon={faPlus}
                                                             onClick={() => setModalAddActiveTyr(true)}/>
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
                                            <FontAwesomeIcon className="action" icon={faTrashCan}
                                                             onClick={() => setModalDeleteActiveService(true)}/>
                                            <FontAwesomeIcon className="action" icon={faPen}
                                                             onClick={() => setModalRedactActiveService(true)}/>
                                            <FontAwesomeIcon className="action" icon={faPlus}
                                                             onClick={() => setModalAddActiveService(true)}/>
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
                                <option selected disabled>Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetGun?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}>{tyrTypes.titleHomePageResponseSetGun.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd" onClick={refresh}>Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActiveTyr} setActive={setModalAddActiveTyr}>
                    <h1>Добавить категорию тира</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAdd}>
                        <div className="rightContainer">
                            <input required className="inputAdd" type="text" name="title"
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
                        <div className="leftContainer">
                            <div>{imageUrl}</div>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled>Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetGun?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetGun.indexOf(item)}>{tyrTypes.titleHomePageResponseSetGun.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="text" name="title"
                                   placeholder="Введите наименование категории"/>
                            <input required className="inputAdd" type="text" name="description"
                                   placeholder="Введите описание категории"/>
                            <button className="buttonAdd" onClick={refresh}>Изменить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalDeleteActiveService} setActive={setModalDeleteActiveService}>
                    <h1>Удалить тип услуг</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDeleteService}>
                        <div className="leftContainer">
                            <div>{imageUrlDelete}</div>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectDelete}>
                                <option selected disabled>Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetService?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetService.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetService.indexOf(item)}>{tyrTypes.titleHomePageResponseSetService.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd" onClick={refresh}>Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAddActiveService} setActive={setModalAddActiveService}>
                    <h1>Добавить тип услуг</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAddService}>
                        <div className="rightContainer">
                            <input required className="inputAdd" type="text" name="title"
                                   placeholder="Введите наименование типа услуг"/>
                            <button className="buttonAdd" onClick={refresh}>Добавить</button>
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
                                <option selected disabled>Выберите один из вариантов</option>
                                {tyrTypes?.titleHomePageResponseSetService?.map((item) =>
                                    <option key={tyrTypes.titleHomePageResponseSetService.indexOf(item)}
                                            value={tyrTypes.titleHomePageResponseSetService.indexOf(item)}>{tyrTypes.titleHomePageResponseSetService.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="text" name="title"
                                   placeholder="Введите наименование типа услуг"/>
                            <button className="buttonAdd" onClick={refresh}>Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </header>
    )
}

export default Navbar