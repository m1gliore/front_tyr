import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Tyr = () => {
    const currentTyr = useLocation().search.split('=')[1]

    const [tyrs, setTyrs] = useState([])
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
        setTyrs([{
            "id": 1,
            "type": "lazernoe",
            "name": "Лазерный тир",
            "mainImage": "https://tir-centr.by/assets/cache_image/lazernoe/1_400x400_dc0.jpg",
            "firstIcon": "https://tir-centr.by/assets/images/categories/Icons_1.png",
            "firstIconTitle": "Начальное обучение стрельбе",
            "firstIconDesc": "Выстрел лазерным лучом невидимого диапазона. Нет отдачи, легкий спуск: для отработки " +
                "начальных навыков стрельбы, техники безопасности, стоек для стрельбы. Оптимально для детей.",
            "secondIcon": "https://tir-centr.by/assets/images/categories/Icons_4.png",
            "secondIconTitle": "Дополнительные услуги",
            "secondIconDesc": "Проведение корпоративов, тимбилдинги, дни рождения подростков и детей, проведение " +
                "экскурсий и лекций. Проведение соревнований среди детей и подростков. Консультации по тактике лазертага.",
            "thirdIcon": "https://tir-centr.by/assets/images/categories/Icons_3.png",
            "thirdIconTitle": "Новые технологии",
            "thirdIconDesc": "Невидимый лазерный луч, металлические копии реальных образцов оружия. Современное " +
                "программное обеспечение с актуальными упражнениями и сюжетами. Набор упражнений постоянно пополняется.",
            "url": "/oruzhie-v-tire/lazernoe#guns",
            "mainDesc": "Наряду со страйкболом огромное распространение получила такая игра, как «лазертаг». " +
            "Участники разбиваются на команды и стремятся поразить друг друга выстрелами из оснащенного лазерным" +
            " излучателем оружия. Для отслеживания попаданий участники надевают специальные жилеты, каски и так далее. " +
            "Предлагаемый нами лазертаг в Минске на крытой площадке является отдельным видом данных " +
            "развлекательных услуг и предназначен для тех, кто хочет пройти индивидуальную тренировку перед командной " +
            "игрой в лазертаг, пройти обучение стрельбе с использованием безопасных, Минске предназначен для самых " +
            "маленьких стрелков (от 6 лет). Чем данный вариант времяпровождения в интерактивном тире отличается от " +
            "стандартного лазертага? Во-первых, для стрельбы используются максимально совпадающие по массе и размерам с " +
            "реальными образцами копии огнестрельного оружия, а не пластиковые стрелялки-бластеры. Во-вторых, для " +
            "обучения стрельбе в лазерном тире применяется новейшая технология отслеживания точки попадания, а сам " +
            "обучающий сюжет (мишени, игры и многое другое) проецируется на экран большой площади. У нас желающим " +
            "посетить лазерный тир предлагаются 2 стрелковых галереи с экранами 3х2 и 2х1,5 метра. В-третьих, сама по " +
            "себе стрельба по интерактивным мишеням в лазерном тире может носить как развлекательный характер " +
            "(детский день рожденияили проведение корпоратива в тире), так и стать первым этапом " +
            "серьезной стрелковой подготовки. Интерактивный лазерный тир будет интересен и тем, кто увлекается" +
            "стрельбой в различных игровых автоматах. Принцип действия похож, но наш тир предлагает гораздо большее" +
            "число вариантов стрельбы, чем все собранные по Минску игровые автоматы, причем дешевле. Охота на уток? " +
            "Дуэли с ковбоями? Оборона от зомби? Все это есть у нас наряду с настоящими армейскими стрелковыми " +
            "упражнениями, упражнениями IPSC. Если развлечения в лазерном тире покажутся слишком простыми, то в " +
            "запасе остаются еще два шага к реализму: страйкбольный интерактивный тир и галерея пневматического " +
            "оружия с огромным выбором оружия. Минимальный бюджет на человека в лазерном тире составляет 2 рубля. " +
            "Ограниченное обучение (стойки, прицеливание, техника безопасности и т.п.) входит в стоимость в любом " +
            "случае."
        },
            {
                "id": 2,
                "type": "strajkbol",
                "name": "Страйкбольный тир",
                "mainImage": "https://tir-centr.by/assets/cache_image/strikeball/1_400x400_dc0.jpg",
                "firstIcon": "https://tir-centr.by/assets/images/categories/Icons_2.png",
                "firstIconTitle": "Индивидуальный подход",
                "firstIconDesc": "Все посетители равны. Нет плохих и хороших стрелков - есть только разные объемы " +
                    "опыта. Будем рады посетителям любого возраста и пола. Помощь, консультации и обучение стрельбе.",
                "secondIcon": "https://tir-centr.by/assets/images/categories/Icons_8.png",
                "secondIconTitle": "Дополнительные услуги",
                "secondIconDesc": "Проведение корпоративов, тимбилдинги, дни рождения подростков и детей, проведение " +
                    "экскурсий и лекции. Консультации по выбору страйкбольных приводов. Пристрелка страйкбольного оружия.",
                "thirdIcon": "https://tir-centr.by/assets/images/categories/Icons_9.png",
                "thirdIconTitle": "Новые технологии",
                "thirdIconDesc": "Электронный интерактивный экран для отслеживания попаданий. Современное программное " +
                    "обеспечение с актуальными упражнениями и сюжетами. Набор упражнений постоянно пополняется.",
                "url": "/oruzhie-v-tire/strajkbol#guns",
                "mainDesc": ["Страйкбол очень популярен у тех, кому хочется почувствовать себя настоящим солдатом, " +
                "продемонстрировать свои умения в точной стрельбе, доказать превосходство над другими или просто " +
                "весело провести время. Отличительная особенность страйкбольных площадок Минска и особенность " +
                "белорусского страйкбола в целом - это командная игра и ориентированность на массовость. Хотите " +
                "поиграть в страйкбол недорого? Собирайте команду, записывайтесь на определенный день и будет вам " +
                "счастье (причем действительно дешево). Индустрия страйкбола не стоит на месте и появляются даже " +
                "крытые площадки достаточно большого объема, позволяющие играть в страйкбол зимой.", "К сожалению или " +
                "к счастью, но далеко не все столь фанатичны, чтобы в любую погоду ехать куда-то на край города, " +
                "самостоятельно покупать и пристреливать приводы (страйкбольное оружие), не у всех есть друзья для " +
                "организации самостоятельной игры и не всем нравится стрелять в людей (и получать шары в нежные части " +
                "тела в ответ). Специально для тех, кто хочет попробовать свои силы в страйкболе, отточить свои " +
                "стрелковые навыки или просто ищет нестандартные развлечения в Минске, мы предлагаем посетить наш " +
                "интерактивный тир со страйкбольным оружием. Чем он интересен и почему услуги тира стоят дороже, " +
                "чем в страйкбольных клубах Минска?", "Во-первых, у нас используются собственные приводы (пистолеты, " +
                "автоматы и так далее), которые можно испытать в действии до того, как приобретать что-то в " +
                "собственность. Во-вторых, наш страйкбольный тир в Минске - это не стрельба по банкам и бутылкам, а " +
                "огромный интерактивный экран размерами 3х2 метра, который позволит посетителям стрелять по " +
                "интерактивным мишеням, потренироваться в специальных режимах (игры, обучающие сюжеты и так далее). " +
                "В-третьих, к нам не нужно записываться и пострелять в тире можно в любой момент, когда возникло " +
                "желание отдохнуть, заглянуть хоть одним глазком в мир оружия, узнать что-то новое и интересное, " +
                "провести пристрелку своего страйкбольного автомата или винтовки в нормальных условиях. Минимальный " +
                "бюджет на человека в страйкбольном тире составляет 5 рублей. Ограниченное обучение (стойки, " +
                "прицеливание, техника безопасности и т.п.) входит в стоимость в любом случае."]
            }])

        setCategories(
            [{
                "id": 1,
                "title": "Автоматы",
                "type": "ASSAULT_RIFLES",
                "tyr": ["lazernoe", "strajkbol"]
            },
                {
                    "id": 2,
                    "title": "Пистолеты",
                    "type": "PISTOLS",
                    "tyr": ["lazernoe", "strajkbol"]
                },
                {
                    "id": 3,
                    "title": "Винтовки",
                    "type": "RIFLES",
                    "tyr": ["lazernoe", "strajkbol"]
                },
                {
                    "id": 4,
                    "title": "Пистолеты-пулеметы",
                    "type": "SUBMACHINE_GUNS",
                    "tyr": ["lazernoe", "strajkbol"]
                },
                {
                    "id": 5,
                    "title": "Дробовики",
                    "type": "SHOTGUNS",
                    "tyr": ["strajkbol"]
                },
                {
                    "id": 6,
                    "title": "Пулеметы",
                    "type": "MACHINE_GUNS",
                    "tyr": ["strajkbol"]
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
                "type": "ASSAULT_RIFLES",
                "tyr": "lazernoe"
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
                    "type": "ASSAULT_RIFLES",
                    "tyr": "lazernoe"
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
                    "type": "PISTOLS",
                    "tyr": "lazernoe"
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
                    "type": "PISTOLS",
                    "tyr": "lazernoe"
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
                    "type": "RIFLES",
                    "tyr": "lazernoe"
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
                    "type": "RIFLES",
                    "tyr": "lazernoe"
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
                    "type": "SUBMACHINE_GUNS",
                    "tyr": "lazernoe"
                },
                {
                    "id": 8,
                    "url": "https://tir-centr.by/assets/cache_image/strikeball/colt-1911/1_250x250_040.jpg",
                    "alt": "Страйкбольный пистолет Кольт 1911",
                    "title": "Пистолет Кольт 1911",
                    "desc": "Легендарный пистолет Кольт 1911 в страйкбольном исполнении. Большой, тяжелый, " +
                        "внушительный. Электрическая версия. Для тех, кому нравятся большие пистолеты.",
                    "cost": 5,
                    "quantity": 30,
                    "link": "/oruzhie-v-tire/strajkbol/pistolet-kolt-1911",
                    "type": "PISTOLS",
                    "tyr": "strajkbol"
                },
                {
                    "id": 9,
                    "url": "https://tir-centr.by/assets/cache_image/strikeball/as-val/1_250x250_040.jpg",
                    "alt": "Страйкбольный автомат Вал АС Вал",
                    "title": "Автомат специальный Вал",
                    "desc": "Автомат частей специального назначения и антитеррористических отрядов. Встроенный " +
                        "глушитель. Страйкбольный АС Вал - попробуйте в специальных упражнениях для спецназа. Легкий и удобный, рекомендуем для всех возрастов.",
                    "cost": 6,
                    "quantity": 20,
                    "link": "/oruzhie-v-tire/strajkbol/avtomat-speczialnyij-val",
                    "type": "ASSAULT_RIFLES",
                    "tyr": "strajkbol"
                },
                {
                    "id": 10,
                    "url": "https://tir-centr.by/assets/cache_image/strikeball/mp5k/1_250x250_040.jpg",
                    "alt": "Пистолет-пулемет MP5 K",
                    "title": "Пистолет-пулемет MP5 K",
                    "desc": "Любите боевики? Попробуйте оружие полиции и спецподразделений Европы: пистолет-пулемет " +
                        "MP5 (укороченный) в нашем тире. Точная страйкбольная копия. Различные упражнения и мишени. " +
                        "Тир в Минске с возможностью пострелять из MP5 Kurz!",
                    "cost": 12,
                    "quantity": 70,
                    "link": "/oruzhie-v-tire/strajkbol/mp5-k",
                    "type": "SUBMACHINE_GUNS",
                    "tyr": "strajkbol"
                },
                {
                    "id": 11,
                    "url": "https://tir-centr.by/assets/cache_image/strikeball/benelli-m3-compact/1_250x250_040.jpg",
                    "alt": "Страйкбольный дробовик Benelli M3 Compact",
                    "title": "Дробовик Benelli M3 Compact",
                    "desc": "Еще одна редкая пушка для последнего киногероя! Металлический дробовик с ручным взводом и " +
                        "перезарядкой. Тяжелый, внушительный. Заряжается имитаторами патронов 12-го калибра. " +
                        "Только для взрослых: требует физической силы.",
                    "cost": 4,
                    "quantity": 7,
                    "link": "/oruzhie-v-tire/strajkbol/drobovik-benelli-m3-compact",
                    "type": "SHOTGUNS",
                    "tyr": "strajkbol"
                },
                {
                    "id": 12,
                    "url": "https://tir-centr.by/assets/cache_image/strikeball/spr-mod0/1_250x250_040.jpg",
                    "alt": "Страйкбольная снайперская винтовка MK12 MOD0",
                    "title": "Снайперская винтовка MK12 MOD0 (оптика)",
                    "desc": "Изучите оружие вероятного противника: копия снайперской винтовки Корпуса морской пехоты " +
                        "США MK12. Оснащена оптическим прицелом и сошками. Много реальных упражнений для тренировок " +
                        "снайперов. Можно в паре со вторым номером (пулемет, автомат).",
                    "cost": 7,
                    "quantity": 20,
                    "link": "/oruzhie-v-tire/strajkbol/snajperskaya-vintovka-mk12-mod0",
                    "type": "RIFLES",
                    "tyr": "strajkbol"
                },
                {
                    "id": 13,
                    "url": "https://tir-centr.by/assets/cache_image/strikeball/rpk74/1_250x250_040.jpg",
                    "alt": "Страйкбольный пулемет Калашникова РПК-74",
                    "title": "Ручной пулемет Калашникова РПК-74",
                    "desc": "Где пострелять из пулемета Калашникова? Страйкбольный тир в Минске предлагает стать " +
                        "пулеметчиком с РПК-74. Различные упражнения и мишени. Тир с РПК-74 в Минске – для тех, " +
                        "кому надоели винтовки и пистолеты.",
                    "cost": 17,
                    "quantity": 100,
                    "link": "/oruzhie-v-tire/strajkbol/rpk-74",
                    "type": "MACHINE_GUNS",
                    "tyr": "strajkbol"
                }])
    }, [])

    return (
        <>
            <Navbar/>
            <main role="main">
                {tyrs.map((tyr) => tyr.type === currentTyr &&
                    <section className="category">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                    <li className="breadcrumb-item"><a href="/oruzhie-v-tire">Тир</a></li>
                                    <li className="breadcrumb-item active">{tyr.name}</li>
                                </ol>
                            </nav>
                            <div key={tyr.id} className="category-card">
                                <h1>{tyr.name}</h1>
                                <div className="row">
                                    <div className="col-lg">
                                        <div className="category-image-container">
                                            <img src={tyr.mainImage} className="img-fluid" alt={tyr.name}/>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <ul className="list-unstyled summary">
                                            <li className="media mt-3">
                                                <img className="align-self-center mr-3" alt={tyr.firstIconTitle}
                                                     src={tyr.firstIcon}/>
                                                <div className="media-body">
                                                    <h3>{tyr.firstIconTitle}</h3>
                                                    <p>{tyr.firstIconDesc}</p>
                                                </div>
                                            </li>
                                            <li className="media mt-3">
                                                <img className="align-self-center mr-3" alt={tyr.secondIconTitle}
                                                     src={tyr.secondIcon}/>
                                                <div className="media-body">
                                                    <h3>{tyr.secondIconTitle}</h3>
                                                    <p>{tyr.secondIconDesc}</p>
                                                </div>
                                            </li>
                                            <li className="media mt-3">
                                                <img className="align-self-center mr-3" alt={tyr.thirdIconTitle}
                                                     src={tyr.thirdIcon}/>
                                                <div className="media-body">
                                                    <h3>{tyr.thirdIconTitle}</h3>
                                                    <p>{tyr.thirdIconDesc}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-justify">
                                        <noindex><a href={tyr.url}>Перейти к списку</a><br/><br/></noindex>
                                        <p align='justify'>
                                            {tyr.mainDesc}
                                        </p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                        <noindex><a name="guns"></a></noindex>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)}
                {categories.map((category) => category.tyr.map((item) => item === currentTyr &&
                    <section key={category.id}
                             className={"models-list " + (category.id % 2 === 0 ? "bg-gray" : "bg-white")}>
                        <div className="container">
                            <h2>{category.title}</h2>
                            <div className="row">
                                {guns.map((gun) => category.type === gun.type && gun.tyr === currentTyr &&
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
                    </section>))}
            </main>
            <Footer/>
        </>
    )
}

export default Tyr