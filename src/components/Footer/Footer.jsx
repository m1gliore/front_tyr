import './styles.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div className="payment-system">
                <div className="container">
                    <img src="https://tir-centr.by/assets/template/images/pay-logo.png" alt="payment"
                         className="payment-system-logo"/>
                </div>
            </div>
            <div className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 footer-nav">
                            <ul className="nav">
                                <li className="nav-item"><a href="/novosti" className="nav-link">Новости</a></li>
                                <li className="nav-item"><a href="/czenyi" className="nav-link">Услуги и цены</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-9 footer-contact">
                            <div className="row">
                                <div className="col-md-3 footer-phone-1">
                                    <div className="text-right">
                                        <div className="header-phone">+ 375 29 8594040</div>
                                        <div className="header-phone-desc">(моб.МТС/Viber)</div>
                                    </div>
                                </div>
                                <div className="col-md-3 footer-phone-2">
                                    <div className="text-left">
                                        <div className="header-phone">+ 375 29 6694040</div>
                                        <div className="header-phone-desc">(моб.ВЕЛ/Viber)</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 footer-address">
                                    <div className="text-center">
                                        <div className="header-address-mail">
                                            <a href="mailto:info@tir-centr.by">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                                &nbsp;&nbsp; e-mail: info@tir-centr.by
                                            </a>
                                        </div>
                                        <div className="header-address-desc">
                                            РБ, г. Минск, пр-т Дзержинского, 9<br/>
                                            режим работы: 13.00 - 21.00
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-6 footer-social">
                                    <div className="text-center">
                                        <a href="https://www.instagram.com" target="_blank" className="fa-stack"
                                           rel="noreferrer">
                                            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                            <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x bot-icon"/>
                                        </a>
                                        <a href="https://www.facebook.com" target="_blank" className="fa-stack"
                                           rel="noreferrer">
                                            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                            <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x bot-icon"/>
                                        </a>
                                        <a href="https://vk.com" target="_blank" className="fa-stack" rel="noreferrer">
                                            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                            <FontAwesomeIcon icon={faVk} className="fa-stack-1x bot-icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="footer-company">Оказание услуг - ЧП «Услуги 22 век» УНП 191391147</div>
                                <div className="footer-not-oferta">Представленная на сайте информация носит
                                    ознакомительный характер, не является рекламой и не содержит предложения заключить
                                    сделку на указанных условиях
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer