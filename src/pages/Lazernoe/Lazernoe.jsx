import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";

const Lazernoe = () => {
    const [categories, setCategories] = useState([])
    const [guns, setGuns] = useState([])

    useEffect(() => {
        // (async () => {
        //     try {
        //         const response = await axios.get('')
        //         setImages(response.data)
        //     } catch (e) {
        //
        //     }
        // })()
        setCategories(
            [{
                "id": 1,
                "title": "Автоматы",
                "type": "assault rifles"
            },
                {
                    "id": 2,
                    "title": "Пистолеты",
                    "type": "pistols"
                },
                {
                    "id": 3,
                    "title": "Винтовки",
                    "type": "rifles"
                },
                {
                    "id": 4,
                    "title": "Пистолеты-пулеметы",
                    "type": "submachine guns"
                }])

        setGuns(
            [{
                "id": 1,
                "url": "https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg",
                "alt": "Лазертаг с автоматом Калашникова - лазертаг с АК",
                "title": "Автомат Калашникова АК-74",
                "desc": "Отличная модель оружия для лазертага, сделанная из стали с деревянным прикладом. Красивый, " +
                    "солидный. Подойдет и детям, и взрослым. Лазертаг с АК – впервые в Минске. Без отдачи. Одиночный " +
                    "огонь.",
                "cost": 3,
                "quantity": 20,
                "link": "oruzhie-v-tire/lazernoe/avtomat-kalashnikova-ak-74",
                "type": "assault rifles"
            },
                {
                    "id": 2,
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/ak-105/1_250x250_040.jpg",
                    "alt": "Лазертаг с автоматом Калашникова АК-105",
                    "title": "Автомат Калашникова АК-105",
                    "desc": "Копия автомата Калашникова АК-105, предназначенная для лазертага. Металл и пластик. " +
                        "Соответствует реальному АК 105-й версии (последняя модель). Без отдачи, одиночный огонь. " +
                        "Компактный вариант АК.",
                    "cost": 3,
                    "quantity": 20,
                    "link": "oruzhie-v-tire/lazernoe/avtomat-kalashnikova-ak-105",
                    "type": "assault rifles"
                },
                {
                    "id": 3,
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/grach/1_250x250_040.jpg",
                    "alt": 'Пистолет Ярыгина "Грач"',
                    "title": 'Пистолет Ярыгина "Грач"',
                    "desc": "Цельнометаллическая копия пистолета Ярыгина в нашем лазерном тире. Проверьте, чем " +
                        "отличается новый армейский пистолет Ярыгина от старого пистолета Макарова. Большой выбор " +
                        "упражнений для стрельбы.",
                    "cost": 2,
                    "quantity": 15,
                    "link": "/oruzhie-v-tire/oruzhie-v-tire/lazernoe/grach",
                    "type": "pistols"
                },
                {
                    "id": 4,
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/glock/1_250x250_040.jpg",
                    "alt": "Лазертаг с пистолетом Глок",
                    "title": "Пистолет Глок",
                    "desc": "Соответствует по внешнему виду, габаритам и массе своему страйкбольному аналогу. Копия " +
                        "огнестрельного «Глока». Невидимый лазерный импульс. Отдача отсутствует. Достаточно легкий – " +
                        "оптимален для детей и новичков.",
                    "cost": 2,
                    "quantity": 15,
                    "link": "/oruzhie-v-tire/oruzhie-v-tire/lazernoe/pistolet-glok",
                    "type": "pistols"
                },
                {
                    "id": 5,
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/vss/1_250x250_040.jpg",
                    "alt": "Лазертаг с ВСС Винторез - лазертаг со снайперской винтовкой",
                    "title": "Снайперская винтовка ВСС Винторез",
                    "desc": "Редкий экземпляр: лазертаг-версия винтовки снайперской специальной (ВСС Винторез). " +
                        "Сделана из стали, приклад из дерева. Оптический прицел. Компактная, лучший выбор для юного " +
                        "снайпера.",
                    "cost": 3,
                    "quantity": 20,
                    "link": "/oruzhie-v-tire/lazernoe/snajperskaya-vintovka-vss-vintorez",
                    "type": "rifles"
                },
                {
                    "id": 6,
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/mp-512-36/1_250x250_040.jpg",
                    "alt": "Лазертаг с металлическим оружием",
                    "title": "Винтовка МР-512",
                    "desc": "Классическая модель отечественной пневматической винтовки МР-512 в лазертаг-исполнении. " +
                        "Винтовка с обновленным дизайном. Идеальна для тренировки перед сдачей норм ГТО, участием в " +
                        "соревнованиях по спортивной или стендовой стрельбе.",
                    "cost": 3,
                    "quantity": 20,
                    "link": "/oruzhie-v-tire/lazernoe/vintovka-mr512",
                    "type": "rifles"
                },
                {
                    "id": 7,
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/ppsh/1_250x250_040.jpg",
                    "alt": "Лазерный пистолет-пулемет Шпагина ППШ ММГ",
                    "title": "Пистолет-пулемет Шпагина ППШ",
                    "desc": "Антуражный, увесистый, из дерева и стали: лазерный пистолет-пулемет Шпагина (ППШ). " +
                        "Ощутите в руках тяжесть легендарного советского пистолета-пулемета! Не очень удобен для детей " +
                        "из-за веса.",
                    "cost": 3,
                    "quantity": 20,
                    "link": "/oruzhie-v-tire/lazernoe/lazernyij-pistolet-pulemet-shpagina-ppsh",
                    "type": "submachine guns"
                }])
    }, [])

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="category">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/oruzhie-v-tire">Тир</a></li>
                                <li className="breadcrumb-item active">Лазерный тир</li>
                            </ol>
                        </nav>
                        <div className="category-card">
                            <h1>Лазерный тир</h1>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="category-image-container">
                                        <img src="https://tir-centr.by/assets/cache_image/lazernoe/1_400x400_dc0.jpg"
                                             className="img-fluid" alt="Лазерный тир в Минске"/>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <ul className="list-unstyled summary">
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon1"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_1.png"/>
                                            <div className="media-body">
                                                <h3>Начальное обучение стрельбе</h3>
                                                <p>Выстрел лазерным лучом невидимого диапазона. Нет отдачи, легкий
                                                    спуск: для отработки начальных навыков стрельбы, техники
                                                    безопасности, стоек для стрельбы. Оптимально для детей.</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon4"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_4.png"/>
                                            <div className="media-body">
                                                <h3>Дополнительные услуги</h3>
                                                <p>Проведение корпоративов, тимбилдинги, дни рождения подростков и
                                                    детей, проведение экскурсий и лекций. Проведение соревнований
                                                    среди детей и подростков. Консультации по тактике лазертага.</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon3"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_3.png"/>
                                            <div className="media-body">
                                                <h3>Новые технологии</h3>
                                                <p>Невидимый лазерный луч, металлические копии реальных образцов
                                                    оружия. Современное программное обеспечение с актуальными
                                                    упражнениями и сюжетами. Набор упражнений постоянно
                                                    пополняется.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-justify">
                                    <noindex><a href="https://tir-centr.by/oruzhie-v-tire/lazernoe#guns">Перейти к
                                        списку</a><br/><br/></noindex>
                                    <p align="justify">Наряду со страйкболом огромное распространение получила такая
                                        игра, как «лазертаг». Участники разбиваются на команды и стремятся поразить друг
                                        друга выстрелами из оснащенного лазерным излучателем оружия. Для отслеживания
                                        попаданий участники надевают специальные жилеты, каски и так далее. Предлагаемый
                                        нами <b>лазертаг в Минске</b> на крытой площадке является отдельным видом данных
                                        развлекательных услуг и предназначен для тех, кто хочет пройти индивидуальную
                                        тренировку перед командной игрой в лазертаг, пройти обучение стрельбе с
                                        использованием безопасных, но гораздо более точно соответствующих реальным
                                        образцам оружия лазерных макетов. В первую очередь <b>лазерный тир в
                                            Минске</b> предназначен для самых маленьких стрелков (от 6 лет). </p>
                                    <p align="justify">Чем данный вариант времяпровождения в интерактивном тире
                                        отличается от стандартного лазертага? Во-первых, для стрельбы используются
                                        максимально совпадающие по массе и размерам с реальными образцами копии
                                        огнестрельного оружия, а не пластиковые стрелялки-бластеры. Во-вторых, для
                                        обучения стрельбе в лазерном тире применяется новейшая технология отслеживания
                                        точки попадания, а сам обучающий сюжет (мишени, игры и многое другое)
                                        проецируется на экран большой площади. У нас желающим посетить лазерный тир
                                        предлагаются 2 стрелковых галереи с экранами 3х2 и 2х1,5 метра. В-третьих, сама
                                        по себе стрельба по интерактивным мишеням в лазерном тире может носить как
                                        развлекательный характер (<b>детский день рождения</b> или <b>проведение
                                            корпоратива</b> в тире), так и стать первым этапом серьезной стрелковой
                                        подготовки. </p>
                                    <p align="justify">Интерактивный лазерный тир будет интересен и тем, кто увлекается
                                        стрельбой в различных игровых автоматах. Принцип действия похож, но наш тир
                                        предлагает гораздо большее число вариантов стрельбы, чем все собранные по Минску
                                        игровые автоматы, причем дешевле. Охота на уток? Дуэли с ковбоями? Оборона от
                                        зомби? Все это есть у нас наряду с настоящими армейскими стрелковыми
                                        упражнениями, упражнениями IPSC. Если развлечения в лазерном тире покажутся
                                        слишком простыми, то в запасе остаются еще два шага к реализму: страйкбольный
                                        интерактивный тир и галерея пневматического оружия с огромным выбором оружия.
                                        Минимальный бюджет на человека в лазерном тире составляет 2 рубля. Ограниченное
                                        обучение (стойки, прицеливание, техника безопасности и т.п.) входит в стоимость
                                        в любом случае.</p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                    <noindex><a name="guns"></a></noindex>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {categories.map((category) =>
                    <section key={category.id}
                             className={"models-list " + (category.id % 2 === 0 ? "bg-gray" : "bg-white")}>
                        <div className="container">
                            <h2>{category.title}</h2>
                            <div className="row">
                                {guns.map((gun) => category.type === gun.type &&
                                    <div key={gun.id} className="col-lg-4 col-md-6">
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block" src={gun.url} alt={gun.alt}/>
                                            <div className="card-body">
                                                <p className="card-title">{gun.title}</p>
                                                <p className="card-text">{gun.desc}</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row">
                                                    <div className="col">
                                                        от <span
                                                        className="price">{gun.cost} руб.</span> / {gun.quantity} выстр.
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <a href={gun.link}
                                                           className="btn btn-red" role="button">Подробнее</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </section>)}
            </main>
            <Footer/>
        </>
    )
}

export default Lazernoe