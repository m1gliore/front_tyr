import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Uslugi = () => {
    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="service-top">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item active">Услуги</li>
                            </ol>
                        </nav>
                        <h1>Услуги</h1>
                        <div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h2>Юридическим лицам</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Для юридических лиц: проведение тимбилдингов, корпоративных
                                    мероприятий. Стоимость складывается из стоимости индивидуальных услуг, возможна
                                    аренда всего тира.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/uslugi/yuridicheskim-liczam" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h2>Развлечения для всей семьи</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Все виды досуга для детей, подростков и взрослых. Детский
                                    развлекательный центр, развлечения для подростков и молодежи. Необычные развлечения,
                                    в том числе и зимой.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/uslugi/razvlecheniya-dlya-vsej-semi" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h2>Познание и развитие</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Мероприятия на выходные в Минске: необычная экскурсия,
                                    посещение музея оружия с возможностью пострелять из него.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="/uslugi/poznanie-i-razvitie" className="btn btn-red" role="button">Подробнее</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h2>Подарочные сертификаты</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Подарочные сертификаты - это отличная возможность сделать
                                    необычный подарок своим коллегам любого пола, детям, друзьям. Номинал от 30 руб. до
                                    100 руб.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/uslugi/podarochnyie-sertifikatyi" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h2>Основные услуги тира</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Пневматический, лазерный и страйкбольный тир в Минске.
                                    Пристрелка оружия. Аренда тира. Измерение дульной энергии пневматики.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/uslugi/osnovnyie-uslugi-tira" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h2>Обучение и курсы стрельбы</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Для желающих научиться стрелять из винтовки, пистолета. Техника
                                    безопасности, прицеливание, стойки, стрельба на скорость и многое другое. Для
                                    взрослых и детей. До 2-х человек одновременно.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/uslugi/obuchenie-i-kursyi-strelbyi" className="btn btn-red"
                                   role="button">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Uslugi