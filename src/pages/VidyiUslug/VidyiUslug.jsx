import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const VidyiUslug = () => {
    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="service-part">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/uslugi">Услуги</a></li>
                                <li className="breadcrumb-item active">Юридическим лицам</li>
                            </ol>
                        </nav>
                        <h1>Юридическим лицам</h1>
                        <div className="row">
                            <div className="col-12 text-justify">
                            </div>
                            <div className="col-lg-6 service-card">
                                <div className="row inner">
                                    <div className="col-4">
                                        <img src="https://tir-centr.by/assets/cache_image/services/3.2_200x200_b1c.jpg"
                                             className="img-fluid"
                                             alt="Корпоративы в Минске – проведение на Новый год, 8 марта, 23 февраля"/>
                                    </div>
                                    <div className="col">
                                        <h2>Проведение корпоратива</h2>
                                        <p>Хотите организовать проведение корпоратива без пьянки и в необычной
                                            обстановки? Корпоратив в тире – это отличный способ необычного
                                            времяпровождения в компании родных, коллег, знакомых. Новый год, 23 февраля,
                                            8 марта и другие даты.</p>
                                        <a className="btn btn-red"
                                           href="uslugi/yuridicheskim-liczam/organizacziya-provedeniya-korporativov"
                                           role="button">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 service-card">
                                <div className="row inner">
                                    <div className="col-4">
                                        <img src="https://tir-centr.by/assets/cache_image/services/3.1_200x200_b1c.jpg"
                                             className="img-fluid" alt="Тимбилдинг в Минске"/>
                                    </div>
                                    <div className="col">
                                        <h2>Тимбилдинг в Минске</h2>
                                        <p>Хотите испытать на прочность, организованность и обучаемость свой коллектив в
                                            необычной обстановке? Проведение тимбилдинга в тире – отличный способ
                                            сплотить коллектив и узнать что-то новое о личностных и деловых качествах
                                            подчиненных. До 15 человек одновременно.</p>
                                        <a className="btn btn-red"
                                           href="uslugi/yuridicheskim-liczam/timbilding-v-minske"
                                           role="button">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 service-card">
                                <div className="row inner">
                                    <div className="col-4">
                                        <img src="https://tir-centr.by/assets/cache_image/services/item_5050_200x200_b1c.jpg"
                                             className="img-fluid"
                                             alt="Обучение стрельбе перед соревнованиями, тренировка"/>
                                    </div>
                                    <div className="col">
                                        <h2>Подготовка к соревнованиям по стрельбе, тренировка – для юридических
                                            лиц</h2>
                                        <p>Нужно подготовить представителей компании к соревнованиям по стрельбе среди
                                            филиалов, партнеров или представительств? У нас большой опыт оказания
                                            подобных услуг. Безналичный расчет, понимание стоящих перед вами задач.
                                            Гарантируем, что больше не будете последними!</p>
                                        <a className="btn btn-red"
                                           href="uslugi/yuridicheskim-liczam/podgotovka-k-sorevnovaniyam-po-strelbe,-trenirovka-–-dlya-yuridicheskix-licz"
                                           role="button">Подробнее</a>
                                    </div>
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

export default VidyiUslug