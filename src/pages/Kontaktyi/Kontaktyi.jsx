import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faEnvelope, faMapMarkerAlt, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const Kontaktyi = () => {
    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <div className="base-card">
                            <h1>Контакты тира</h1>
                            <div className="row contact-info">
                                <div className="col-lg-4 col-md-6">
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneSquare} className="faIcon"/>&nbsp;
                                        +375 44 769-84-98 (A1)</p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} className="faIcon"/>&nbsp;
                                        <a href="mailto:tircaliber@gmail.com">tircaliber@gmail.com</a>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="faIcon"/>&nbsp;
                                        Торговый центр Европа ул. Сурганова, д. 57Б, пом. 314а
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
                    <YMaps>
                        <div style={{
                            marginTop: "20px",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Map style={{width: "80vw", height: "80vh"}}
                                 defaultState={{center: [53.92868412579576, 27.582801597724394], zoom: 18}}>
                                <Placemark geometry={[53.92868412579576, 27.582801597724394]}/>
                            </Map>
                        </div>
                    </YMaps>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Kontaktyi