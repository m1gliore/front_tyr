import './styles.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 footer-contact">
                            <div className="row">
                                <div className="col-md-3 footer-phone-1">
                                </div>
                                <div className="col-md-3 footer-phone-2">
                                    <div className="text-left">
                                        <div className="header-phone">+375 44 769-84-98</div>
                                        <div className="header-phone-desc">(моб.A1)</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 footer-address">
                                    <div className="text-center">
                                        <div className="header-address-mail">
                                            <a href="mailto:tircaliber@gmail.com">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                                &nbsp;&nbsp; e-mail: tircaliber@gmail.com
                                            </a>
                                        </div>
                                        <div className="header-address-desc">
                                            Торговый центр Европа ул. Сурганова, д. 57Б, пом. 314а<br/>
                                            режим работы: 13.00 - 21.00
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-6 footer-social">
                                    <div className="text-center">
                                        <a href="https://www.instagram.com/tircaliberr/" target="_blank" className="fa-stack"
                                           rel="noreferrer">
                                            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                                            <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x bot-icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="footer-company">Оказание услуг - ЧУП "ТехноСтрайк" УНП 193666264</div>
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