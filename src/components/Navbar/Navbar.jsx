import './styles.css';
import logo from '../../images/Group 1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faEnvelope, faPen, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import Modal from "../Modal/Modal";
import {useState} from "react";

const Navbar = () => {
    const [modalDeleteActiveTyr, setModalDeleteActiveTyr] = useState(false)
    const [modalAddActiveTyr, setModalAddActiveTyr] = useState(false)
    const [modalRedactActiveTyr, setModalRedactActiveTyr] = useState(false)
    const [modalDeleteActiveService, setModalDeleteActiveService] = useState(false)
    const [modalAddActiveService, setModalAddActiveService] = useState(false)
    const [modalRedactActiveService, setModalRedactActiveService] = useState(false)
    const admin = true

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 header-logo">
                            <img className="logo" src={logo} alt="logo"/>
                        </div>
                        <div className="col-lg-9 header-contact">
                            <div className="row">
                                <div className="col-md-2 col-sm-6 header-top-phone-1">
                                    <div className="text-right">
                                        <div className="header-phone">+ 375 29 8594040</div>
                                        <div className="header-phone-desc">(моб.МТС/Viber)</div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-6 header-top-phone-2">
                                    <div className="text-left">
                                        <div className="header-phone">+ 375 29 6694040</div>
                                        <div className="header-phone-desc">(моб.ВЕЛ/Viber)</div>
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
                                    <div className="dropdown-menu" aria-labelledby="topMenu12"><a
                                        className="dropdown-item" href="/oruzhie-v-tire/type?catalog=lazernoe">Лазерный
                                        тир</a><a
                                        className="dropdown-item" href="/oruzhie-v-tire/type?catalog=strajkbol">Страйкбольный
                                        тир</a>
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
                                    <div className="dropdown-menu" aria-labelledby="topMenu89"><a
                                        className="dropdown-item" href="/uslugi/type?catalog=osnovnyie-uslugi-tira">Основные
                                        услуги тира</a><a className="dropdown-item"
                                                          href="/uslugi/type?catalog=obuchenie-i-cursor-strelbyi">Обучение
                                        и курсы
                                        стрельбы</a><a className="dropdown-item"
                                                       href="/uslugi/type?catalog=yuridicheskim-liczam">Юридическим
                                        лицам</a><a className="dropdown-item"
                                                    href="/uslugi/type?catalog=podarochnyie-sertifikatyi">Подарочные
                                        сертификаты</a><a className="dropdown-item"
                                                          href="/uslugi/type?catalog=razvlecheniya-dlya-vsej-semi">Развлечения
                                        для
                                        всей семьи</a><a className="dropdown-item"
                                                         href="/uslugi/type?catalog=poznanie-i-razvitie">Познание
                                        и развитие</a>
                                        {admin && <>
                                            <FontAwesomeIcon className="action" icon={faTrashCan}
                                                             onClick={() => setModalDeleteActiveService(true)}/>
                                            <FontAwesomeIcon className="action" icon={faPen}
                                                             onClick={() => setModalRedactActiveService(true)}/>
                                            <FontAwesomeIcon className="action" icon={faPlus}
                                                             onClick={() => setModalAddActiveService(true)}/>
                                        </>}</div>
                                </li>
                                <li className="nav-item active"><a className="nav-link"
                                                                   href="/strelki/type?catalog=luchshie-strelki">Лучшие
                                    стрелки</a></li>
                                <li className="nav-item"><a className="nav-link" href="/kontaktyi">Контакты тира</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {admin && <>
                <Modal active={modalDeleteActiveTyr} setActive={setModalDeleteActiveTyr}>
                    <h1>Удалить категорию тира</h1>
                </Modal>
                <Modal active={modalAddActiveTyr} setActive={setModalAddActiveTyr}>
                    <h1>Добавить категорию тира</h1>
                </Modal>
                <Modal active={modalRedactActiveTyr} setActive={setModalRedactActiveTyr}>
                    <h1>Изменить категорию тира</h1>
                </Modal>
                <Modal active={modalDeleteActiveService} setActive={setModalDeleteActiveService}>
                    <h1>Удалить тип услуг</h1>
                </Modal>
                <Modal active={modalAddActiveService} setActive={setModalAddActiveService}>
                    <h1>Добавить тип услуг</h1>
                </Modal>
                <Modal active={modalRedactActiveService} setActive={setModalRedactActiveService}>
                    <h1>Изменить тип услуг</h1>
                </Modal>
            </>}
        </header>
    )
}

export default Navbar