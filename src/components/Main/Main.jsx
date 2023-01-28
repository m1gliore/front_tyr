import './styles.css'

const Main = () => {
    return (
        <main role="main">
            <section className="overview">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src="https://tir-centr.by/assets/images/homepage/overview/home-soldier.png"
                                 alt="Несколько стрелковых галерей"/>
                            <p>Несколько стрелковых галерей</p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src="https://tir-centr.by/assets/images/homepage/overview/home-corp.png"
                                 alt="Индивидуальное и групповое обучение"/>
                            <p>Индивидуальное и групповое обучение</p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src="https://tir-centr.by/assets/images/homepage/overview/home-gift.png"
                                 alt="Подарочные сертификаты в наличии"/>
                            <p>Подарочные сертификаты в наличии</p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src="https://tir-centr.by/assets/images/homepage/overview/home-look.png"
                                 alt="Ждем Вас ежедневно с 13 до 21 часов"/>
                            <p>Ждем Вас ежедневно с 13 до 21 часов</p>
                        </div>
                    </div>
                </div>
            </section>
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
                            href="/uslugi/osnovnyie-uslugi-tira"
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
                        </a><a href="/uslugi/obuchenie-i-kursyi-strelbyi"
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
                        </a><a href="/uslugi/yuridicheskim-liczam"
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
                        </a><a href="/uslugi/podarochnyie-sertifikatyi"
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
                        </a><a href="/uslugi/razvlecheniya-dlya-vsej-semi"
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
                        </a><a href="/uslugi/poznanie-i-razvitie"
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
            <section className="home-news">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Новости</h2>
                        </div>
                        <div className="col-auto text-right">
                            <a href="/novosti" className="btn btn-gray" role="button">Все
                                новости</a>
                        </div>
                    </div>
                    <div className="card-deck">
                        <div className="card bg-gray">
                            <div className="card-header">
                                02.08.2022
                            </div>
                            <div className="card-body">
                                <p className="card-title">Выходные в августе</p>
                                <p className="card-text">Выходные в августе: по техническим причинам не будем
                                    работать 8, 15 и 22 августа (это понедельники).</p>
                            </div>
                            <div className="card-footer">
                                <a href="novosti/vyixodnyie-v-avguste" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                        <div className="card bg-white">
                            <div className="card-header">
                                10.02.2022
                            </div>
                            <div className="card-body">
                                <p className="card-title">Подарочные сертификаты на 23 февраля</p>
                                <p className="card-text">Напоминаем, что у нас есть отличный подарок на 23 февраля
                                    для любого мужчины: подарочные сертификаты номиналом 30, 50 и 100 руб.</p>
                            </div>
                            <div className="card-footer">
                                <a href="novosti/podarochnyie-sertifikatyi-na-23-fevralya" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main