import './styles.css'
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import Modal from "../Modal/Modal";

const Main = () => {
    const admin = true
    const [modalRedactActive, setModalRedactActive] = useState(false)

    return (
        <main role="main">
            {admin &&
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => setModalRedactActive(true)}/>}
            <section className="review">
                <div className="container">
                    <div id="tirReview"
                         style={{
                             margin: "0px auto",
                             maxWidth: "100%",
                             minWidth: "150px",
                             overflow: "visible",
                             height: "auto",
                             width: "auto",
                         }}
                         className="ug-gallery-wrapper ug-theme-tiles ug-under-960">
                        <div className="ug-overlay-disabled" style={{display: "none"}}></div>
                        <div className="ug-tiles-wrapper ug-tiletype-justified ug-tiles-transit ug-tiles-rest-mode"
                             style={{position: "relative", height: "416px", left: "15%"}}><a
                            href="/uslugi/type?catalog=osnovnyie-uslugi-tira"
                            className="ug-thumb-wrapper ug-tile ug-thumb-ratio-set"
                            style={{
                                backgroundColor: "rgb(240, 240, 240)",
                                opacity: 1,
                                width: "296px",
                                height: "198px",
                                position: "absolute",
                                margin: 0,
                                left: 0,
                                top: 0,
                                pointerEvents: "auto"
                            }}>
                            <div className="ug-thumb-overlay"
                                 style={{
                                     opacity: 0,
                                     backgroundColor: "rgba(0, 0, 0, 0.4)",
                                     width: "295.995px",
                                     height: "197.986px",
                                     left: 0,
                                     top: 0,
                                     position: "absolute",
                                     margin: 0
                                 }}>
                                <div className="ug-tile-icon ug-icon-link"
                                     style={{position: "absolute", margin: 0, left: "129px", top: "60px"}}></div>
                            </div>
                            <img src="https://tir-centr.by/assets/images/homepage/review/1.jpg"
                                 alt="Основные услуги тира"
                                 className="ug-thumb-image ug-trans-enabled"
                                 style={{width: "297px", height: "198px", left: 0, top: 0}}/>
                            <div className="ug-textpanel ug-trans-enabled"
                                 style={{zIndex: 2, width: "295.995px", height: "40px", top: "auto", bottom: 0}}>
                                <div className="ug-textpanel-bg ug-trans-enabled"
                                     style={{
                                         opacity: 0.6,
                                         backgroundColor: "rgb(0, 0, 0)",
                                         width: "295.995px",
                                         height: "40px"
                                     }}></div>
                                <div className="ug-textpanel-textwrapper ug-trans-enabled"
                                     style={{
                                         width: "273.995px",
                                         height: "40px",
                                         left: "11px",
                                         top: 0,
                                         position: "absolute",
                                         margin: 0
                                     }}>
                                    <div className="ug-textpanel-title ug-trans-enabled"
                                         style={{
                                             width: "273.995px",
                                             position: "absolute",
                                             margin: 0,
                                             left: 0,
                                             top: "8px"
                                         }}>Основные
                                        услуги тира
                                    </div>
                                </div>
                            </div>
                        </a><a href="/uslugi/type?catalog=obuchenie-i-cursor-strelbyi"
                               className="ug-thumb-wrapper ug-tile ug-thumb-ratio-set"
                               style={{
                                   backgroundColor: "rgb(240, 240, 240)",
                                   opacity: 1,
                                   width: "297px",
                                   height: "198px",
                                   position: "absolute",
                                   margin: 0,
                                   left: "316px",
                                   top: 0,
                                   pointerEvents: "auto"
                               }}>
                            <div className="ug-thumb-overlay"
                                 style={{
                                     opacity: 0,
                                     backgroundColor: "rgba(0, 0, 0, 0.4)",
                                     width: "297px",
                                     height: "197.986px",
                                     left: 0,
                                     top: 0,
                                     position: "absolute",
                                     margin: 0
                                 }}>
                                <div className="ug-tile-icon ug-icon-link"
                                     style={{position: "absolute", margin: 0, left: "130px", top: "60px"}}></div>
                            </div>
                            <img src="https://tir-centr.by/assets/images/homepage/review/2.jpg"
                                 alt="Обучение и курсы стрельбы"
                                 className="ug-thumb-image ug-trans-enabled"
                                 style={{width: "297px", height: "198px", left: 0, top: 0}}/>
                            <div className="ug-textpanel ug-trans-enabled"
                                 style={{zIndex: 2, width: "297px", height: "40px", top: "auto", bottom: 0}}>
                                <div className="ug-textpanel-bg ug-trans-enabled"
                                     style={{
                                         opacity: 0.6,
                                         backgroundColor: "rgb(0, 0, 0)",
                                         width: "297px",
                                         height: "40px"
                                     }}></div>
                                <div className="ug-textpanel-textwrapper ug-trans-enabled"
                                     style={{
                                         width: "275px",
                                         height: "40px",
                                         left: "11px",
                                         top: 0,
                                         position: "absolute",
                                         margin: 0
                                     }}>
                                    <div className="ug-textpanel-title ug-trans-enabled"
                                         style={{
                                             width: "275px",
                                             position: "absolute",
                                             margin: 0,
                                             left: 0,
                                             top: "8px"
                                         }}>Обучение
                                        и курсы стрельбы
                                    </div>
                                </div>
                            </div>
                        </a><a href="/uslugi/type?catalog=yuridicheskim-liczam"
                               className="ug-thumb-wrapper ug-tile ug-thumb-ratio-set"
                               style={{
                                   backgroundColor: "rgb(240, 240, 240)",
                                   opacity: 1,
                                   width: "297px",
                                   height: "198px",
                                   position: "absolute",
                                   margin: 0,
                                   left: "633px",
                                   top: 0,
                                   pointerEvents: "auto"
                               }}>
                            <div className="ug-thumb-overlay"
                                 style={{
                                     opacity: 0,
                                     backgroundColor: "rgba(0, 0, 0, 0.4)",
                                     width: "297px",
                                     height: "197.986px",
                                     left: 0,
                                     top: 0,
                                     position: "absolute",
                                     margin: 0
                                 }}>
                                <div className="ug-tile-icon ug-icon-link"
                                     style={{position: "absolute", margin: 0, left: "130px", top: "60px"}}></div>
                            </div>
                            <img src="https://tir-centr.by/assets/images/homepage/review/3.jpg"
                                 alt="Корпоративы и тимбилдинги"
                                 className="ug-thumb-image ug-trans-enabled"
                                 style={{width: "297px", height: "198px", left: 0, top: 0}}/>
                            <div className="ug-textpanel ug-trans-enabled"
                                 style={{zIndex: 2, width: "297px", height: "40px", top: "auto", bottom: 0}}>
                                <div className="ug-textpanel-bg ug-trans-enabled"
                                     style={{
                                         opacity: 0.6,
                                         backgroundColor: "rgb(0, 0, 0)",
                                         width: "297px",
                                         height: "40px"
                                     }}></div>
                                <div className="ug-textpanel-textwrapper ug-trans-enabled"
                                     style={{
                                         width: "275px",
                                         height: "40px",
                                         left: "11px",
                                         top: 0,
                                         position: "absolute",
                                         margin: 0
                                     }}>
                                    <div className="ug-textpanel-title ug-trans-enabled"
                                         style={{
                                             width: "275px",
                                             position: "absolute",
                                             margin: 0,
                                             left: 0,
                                             top: "8px"
                                         }}>Корпоративы
                                        и тимбилдинги
                                    </div>
                                </div>
                            </div>
                        </a><a href="/uslugi/type?catalog=podarochnyie-sertifikatyi"
                               className="ug-thumb-wrapper ug-tile ug-thumb-ratio-set"
                               style={{
                                   backgroundColor: "rgb(240, 240, 240)",
                                   opacity: 1,
                                   width: "296px",
                                   height: "198px",
                                   position: "absolute",
                                   margin: 0,
                                   left: 0,
                                   top: "218px",
                                   pointerEvents: "auto"
                               }}>
                            <div className="ug-thumb-overlay"
                                 style={{
                                     opacity: 0,
                                     backgroundColor: "rgba(0, 0, 0, 0.4)",
                                     width: "295.995px",
                                     height: "197.986px",
                                     left: 0,
                                     top: 0,
                                     position: "absolute",
                                     margin: 0
                                 }}>
                                <div className="ug-tile-icon ug-icon-link"
                                     style={{position: "absolute", margin: 0, left: "129px", top: "60px"}}></div>
                            </div>
                            <img src="https://tir-centr.by/assets/images/homepage/review/4.jpg"
                                 alt="Подарочные серификаты"
                                 className="ug-thumb-image ug-trans-enabled"
                                 style={{width: "297px", height: "198px", left: 0, top: 0}}/>
                            <div className="ug-textpanel ug-trans-enabled"
                                 style={{zIndex: 2, width: "295.995px", height: "40px", top: "auto", bottom: 0}}>
                                <div className="ug-textpanel-bg ug-trans-enabled"
                                     style={{
                                         opacity: 0.6,
                                         backgroundColor: "rgb(0, 0, 0)",
                                         width: "295.995px",
                                         height: "40px"
                                     }}></div>
                                <div className="ug-textpanel-textwrapper ug-trans-enabled"
                                     style={{
                                         width: "273.995px",
                                         height: "40px",
                                         left: "11px",
                                         top: 0,
                                         position: "absolute",
                                         margin: 0
                                     }}>
                                    <div className="ug-textpanel-title ug-trans-enabled"
                                         style={{
                                             width: "273.995px",
                                             position: "absolute",
                                             margin: 0,
                                             left: 0,
                                             top: "8px"
                                         }}>Подарочные
                                        серификаты
                                    </div>
                                </div>
                            </div>
                        </a><a href="/uslugi/type?catalog=razvlecheniya-dlya-vsej-semi"
                               className="ug-thumb-wrapper ug-tile ug-thumb-ratio-set"
                               style={{
                                   backgroundColor: "rgb(240, 240, 240)",
                                   opacity: 1,
                                   width: "297px",
                                   height: "198px",
                                   position: "absolute",
                                   margin: 0,
                                   left: "316px",
                                   top: "218px",
                                   pointerEvents: "auto"
                               }}>
                            <div className="ug-thumb-overlay"
                                 style={{
                                     opacity: 0,
                                     backgroundColor: "rgba(0, 0, 0, 0.4)",
                                     width: "297px",
                                     height: "197.986px",
                                     left: 0,
                                     top: 0,
                                     position: "absolute",
                                     margin: 0
                                 }}>
                                <div className="ug-tile-icon ug-icon-link"
                                     style={{position: "absolute", margin: 0, left: "130px", top: "60px"}}></div>
                            </div>
                            <img src="https://tir-centr.by/assets/images/homepage/review/5.jpg"
                                 alt="Развлечения для семьи и детей"
                                 className="ug-thumb-image ug-trans-enabled"
                                 style={{width: "297px", height: "198px", left: 0, top: 0}}/>
                            <div className="ug-textpanel ug-trans-enabled"
                                 style={{zIndex: 2, width: "297px", height: "40px", top: "auto", bottom: 0}}>
                                <div className="ug-textpanel-bg ug-trans-enabled"
                                     style={{
                                         opacity: 0.6,
                                         backgroundColor: "rgb(0, 0, 0)",
                                         width: "297px",
                                         height: "40px"
                                     }}></div>
                                <div className="ug-textpanel-textwrapper ug-trans-enabled"
                                     style={{
                                         width: "275px",
                                         height: "40px",
                                         left: "11px",
                                         top: 0,
                                         position: "absolute",
                                         margin: 0
                                     }}>
                                    <div className="ug-textpanel-title ug-trans-enabled"
                                         style={{
                                             width: "275px",
                                             position: "absolute",
                                             margin: 0,
                                             left: 0,
                                             top: "8px"
                                         }}>Развлечения
                                        для семьи и детей
                                    </div>
                                </div>
                            </div>
                        </a><a href="/uslugi/type?catalog=poznanie-i-razvitie"
                               className="ug-thumb-wrapper ug-tile ug-thumb-ratio-set"
                               style={{
                                   backgroundColor: "rgb(240, 240, 240)",
                                   opacity: 1,
                                   width: "297px",
                                   height: "198px",
                                   position: "absolute",
                                   margin: 0,
                                   left: "633px",
                                   top: "218px",
                                   pointerEvents: "auto"
                               }}>
                            <div className="ug-thumb-overlay"
                                 style={{
                                     opacity: 0,
                                     backgroundColor: "rgba(0, 0, 0, 0.4)",
                                     width: "297px",
                                     height: "197.986px",
                                     left: 0,
                                     top: 0,
                                     position: "absolute",
                                     margin: 0
                                 }}>
                                <div className="ug-tile-icon ug-icon-link"
                                     style={{position: "absolute", margin: 0, left: "130px", top: "60px"}}></div>
                            </div>
                            <img src="https://tir-centr.by/assets/images/homepage/review/6.jpg"
                                 alt="Экскурсии и познание"
                                 className="ug-thumb-image ug-trans-enabled"
                                 style={{width: "297px", height: "198px", left: 0, top: 0}}/>
                            <div className="ug-textpanel ug-trans-enabled"
                                 style={{zIndex: 2, width: "297px", height: "40px", top: "auto", bottom: 0}}>
                                <div className="ug-textpanel-bg ug-trans-enabled"
                                     style={{
                                         opacity: 0.6,
                                         backgroundColor: "rgb(0, 0, 0)",
                                         width: "297px",
                                         height: "40px"
                                     }}></div>
                                <div className="ug-textpanel-textwrapper ug-trans-enabled"
                                     style={{
                                         width: "275px",
                                         height: "40px",
                                         left: "11px",
                                         top: 0,
                                         position: "absolute",
                                         margin: 0
                                     }}>
                                    <div className="ug-textpanel-title ug-trans-enabled"
                                         style={{
                                             width: "275px",
                                             position: "absolute",
                                             margin: 0,
                                             left: 0,
                                             top: "8px"
                                         }}>Экскурсии
                                        и познание
                                    </div>
                                </div>
                            </div>
                        </a></div>
                        <div className="ug-tiles-preloader ug-preloader-trans"
                             style={{
                                 opacity: 1,
                                 position: "absolute",
                                 margin: 0,
                                 left: "539px",
                                 top: "100px",
                                 display: "none"
                             }}></div>
                    </div>
                </div>
            </section>
            {admin &&
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить изображения слайдера</h1>
                </Modal>}
        </main>
    )
}

export default Main