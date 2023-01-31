import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faEnvelope, faMapMarkerAlt, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";

const Kontaktyi = () => {
    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item active">Контакты тира</li>
                            </ol>
                        </nav>
                        <div className="base-card">
                            <h1>Контакты тира</h1>
                            <div className="row contact-info">
                                <div className="col-lg-4 col-md-6">
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneSquare} className="faIcon"/>&nbsp;
                                        +375 29 859 40 40 (МТС, Вайбер)<br/>
                                        <FontAwesomeIcon icon={faPhoneSquare} className="faIcon"/>&nbsp;
                                        +375 29 669 40 40 (Велком, Вайбер)<br/>
                                        <FontAwesomeIcon icon={faPhoneSquare} className="faIcon"/>&nbsp;
                                        +375 17 364 15 66 (городской)</p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} className="faIcon"/>&nbsp;
                                        <a href="mailto:info@tir-centr.by">info@tir-centr.by</a>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="faIcon"/>&nbsp;
                                        г. Минск, пр-т Дзержинского, 9, пом. 1011<br/>
                                        <span className="fa-blank"></span> Первый отдельный вход со двора дома,<br/>
                                        <span className="fa-blank"></span> торец со стороны м. «Грушевка»
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faClock} className="faIcon"/>&nbsp;
                                        Ежедневно с 13 до 21 ч.<br/>
                                        <span className="fa-blank"></span> <small className="ml-1">после 21 ч. - только
                                        по предварительной записи</small>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <p className="text-danger">
                                        Рекомендуем предварительно звонить перед посещением! Возможность группового
                                        посещения и посещения по сертификату гарантируется <strong>только</strong> на
                                        условиях предварительной записи
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Kontaktyi