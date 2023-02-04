import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const VidyiUslug = () => {
    const currentService = useLocation().search.split('=')[1]

    const [services, setServices] = useState([])
    const [serviceNames, setServiceNames] = useState([])

    useEffect(() => {
        setServices([{
            "id": 1,
            "title": "Основные услуги тира",
            "type": "osnovnyie-uslugi-tira"
        },
            {
                "id": 2,
                "title": "Обучение и курсы стрельбы",
                "type": "obuchenie-i-cursor-strelbyi"
            },
            {
                "id": 3,
                "title": "Юридическим лицам",
                "type": "yuridicheskim-liczam"
            },
            {
                "id": 4,
                "title": "Подарочные сертификаты",
                "type": "podarochnyie-sertifikatyi"
            },
            {
                "id": 5,
                "title": "Развлечения для всей семьи",
                "type": "razvlecheniya-dlya-vsej-semi"
            },
            {
                "id": 6,
                "title": "Познание и развитие",
                "type": "poznanie-i-razvitie"
            }])

        setServiceNames([{
            "id": 1,
            "image": "https://tir-centr.by/assets/cache_image/services/3.2_200x200_b1c.jpg",
            "title": "Проведение корпоратива",
            "desc": "Хотите организовать проведение корпоратива без пьянки и в необычной обстановки? Корпоратив в " +
                "тире – это отличный способ необычного времяпровождения в компании родных, коллег, знакомых. Новый " +
                "год, 23 февраля, 8 марта и другие даты.",
            "url": "yuridicheskim-liczam/organizacziya-provedeniya-korporativov",
            "type": "yuridicheskim-liczam"
        },
            {
                "id": 2,
                "image": "https://tir-centr.by/assets/cache_image/services/3.1_200x200_b1c.jpg",
                "title": "Тимбилдинг в Минске",
                "desc": "Хотите испытать на прочность, организованность и обучаемость свой коллектив в необычной " +
                    "обстановке? Проведение тимбилдинга в тире – отличный способ сплотить коллектив и узнать что-то " +
                    "новое о личностных и деловых качествах подчиненных. До 15 человек одновременно.",
                "url": "yuridicheskim-liczam/timbilding-v-minske",
                "type": "yuridicheskim-liczam"
            },
            {
                "id": 3,
                "image": "https://tir-centr.by/assets/cache_image/services/item_5050_200x200_b1c.jpg",
                "title": "Подготовка к соревнованиям по стрельбе, тренировка – для юридических лиц",
                "desc": "Нужно подготовить представителей компании к соревнованиям по стрельбе среди филиалов, " +
                    "партнеров или представительств? У нас большой опыт оказания подобных услуг. Безналичный расчет, " +
                    "понимание стоящих перед вами задач. Гарантируем, что больше не будете последними!",
                "url": "yuridicheskim-liczam/podgotovka-k-sorevnovaniyam-po-strelbe,-trenirovka-–-dlya-yuridicheskix-licz",
                "type": "yuridicheskim-liczam"
            }])
    }, [])

    return (
        <>
            <Navbar/>
            <main role="main">
                {services.map((service) => service.type === currentService &&
                    <section key={service.id} className="service-part">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                    <li className="breadcrumb-item"><a href="/uslugi">Услуги</a></li>
                                    <li className="breadcrumb-item active">{service.title}</li>
                                </ol>
                            </nav>
                            <h1>{service.title}</h1>
                            <div className="row">
                                <div className="col-12 text-justify">
                                </div>
                                {serviceNames.map((serviceName) => serviceName.type === currentService &&
                                    <div key={serviceName.id} className="col-lg-6 service-card">
                                        <div className="row inner">
                                            <div className="col-4">
                                                <img src={serviceName.image} className="img-fluid"
                                                     alt={serviceName.title}/>
                                            </div>
                                            <div className="col">
                                                <h2>{serviceName.title}</h2>
                                                <p>{serviceName.desc}</p>
                                                <a className="btn btn-red" href={serviceName.url}
                                                   role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>)}
            </main>
            <Footer/>
        </>
    )
}

export default VidyiUslug