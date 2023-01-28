import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faVk} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 header-logo">
                            <img src="https://tir-centr.by/assets/template/images/logo.png" alt="logo"/>
                        </div>
                        <div className="col-lg-9 header-contact">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 header-top-phone-1">
                                    <div className="text-right">
                                        <div className="header-phone">+ 375 29 8594040</div>
                                        <div className="header-phone-desc">(моб.МТС/Viber)</div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 header-top-phone-2">
                                    <div className="text-left">
                                        <div className="header-phone">+ 375 29 6694040</div>
                                        <div className="header-phone-desc">(моб.ВЕЛ/Viber)</div>
                                    </div>
                                </div>
                                <div className="col-md-4 header-top-address">
                                    <div className="header-address-mail">
                                        <a href="mailto:info@tir-centr.by">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            &nbsp;&nbsp; e-mail: info@tir-centr.by
                                        </a>
                                    </div>
                                    <div className="header-address-desc">г. Минск, пр-т Дзержинского, 9
                                    </div>
                                </div>
                                <div className="col-md-2 header-top-social">
                                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"
                                       className="fa-stack">
                                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                        <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x top-icon"/>
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
                                       className="fa-stack">
                                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                        <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x top-icon"/>
                                    </a>
                                    <a href="https://vk.com" target="_blank" rel="noreferrer"
                                       className="fa-stack">
                                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                        <FontAwesomeIcon icon={faVk} className="fa-stack-1x top-icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                        className="dropdown-item" href="/oruzhie-v-tire/lazernoe">Лазерный тир</a><a
                                        className="dropdown-item" href="/oruzhie-v-tire/strajkbol">Страйкбольный тир</a><a
                                        className="dropdown-item" href="/oruzhie-v-tire/pnevmatika">Пневматический
                                        тир</a><a className="dropdown-item" href="/oruzhie-v-tire/signalnoe-oruzhie">Сигнальное
                                        оружие</a></div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/galereya">Галерея</a></li>
                                <li className="nav-item"><a className="nav-link" href="/czenyi">Цены</a></li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/uslugi"
                                                                     id="topMenu89" data-bs-toggle="dropdown"
                                                                     aria-haspopup="true"
                                                                     aria-expanded="false">Услуги</a>
                                    <div className="dropdown-menu" aria-labelledby="topMenu89"><a
                                        className="dropdown-item" href="/uslugi/standartnyie-pkey">Стандартные
                                        пакеты</a><a className="dropdown-item" href="/uslugi/osnovnyie-uslugi-tira">Основные
                                        услуги тира</a><a className="dropdown-item"
                                                          href="/uslugi/obuchenie-i-cursor-strelbyi">Обучение и курсы
                                        стрельбы</a><a className="dropdown-item" href="/uslugi/yuridicheskim-liczam">Юридическим
                                        лицам</a><a className="dropdown-item" href="/uslugi/podarochnyie-sertifikatyi">Подарочные
                                        сертификаты</a><a className="dropdown-item"
                                                          href="/uslugi/razvlecheniya-dlya-vsej-semi">Развлечения для
                                        всей семьи</a><a className="dropdown-item" href="/uslugi/poznanie-i-razvitie">Познание
                                        и развитие</a><a className="dropdown-item" href="/uslugi/skidki">Скидки</a><a
                                        className="dropdown-item" href="/uslugi/podarki-k-prazdnikam">Подарки к
                                        праздникам</a><a className="dropdown-item" href="/uslugi/zapis-onlajn"
                                                         target="_blank">Запись онлайн</a></div>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
                                                                     href="/dokumentyi" id="topMenu92"
                                                                     data-bs-toggle="dropdown" aria-haspopup="true"
                                                                     aria-expanded="false">Документы</a>
                                    <div className="dropdown-menu" aria-labelledby="topMenu92"><a
                                        className="dropdown-item" href="/dokumentyi/dogovor">Договор оказания
                                        услуг</a><a className="dropdown-item"
                                                    href="/dokumentyi/pravila-poseshheniya-i-tb">Правила посещения и
                                        ТБ</a><a className="dropdown-item" href="/dokumentyi/otdelnyie-uslugi">Отдельные
                                        услуги</a><a className="dropdown-item" href="/dokumentyi/oplata-uslug">Оплата
                                        услуг</a></div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/kontaktyi">Контакты тира</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar