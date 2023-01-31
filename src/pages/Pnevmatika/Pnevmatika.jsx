import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Pnevmatika = () => {
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
                                <li className="breadcrumb-item active">Пневматический тир</li>
                            </ol>
                        </nav>
                        <div className="category-card">
                            <h1>Пневматический тир</h1>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="category-image-container">
                                        <img
                                            src="https://tir-centr.by/assets/cache_image/pnevmatika/common/1_400x400_dc0.jpg"
                                            className="img-fluid"
                                            alt="Пневматический тир Минск - обучение стрельбе, стрелковый клуб"/>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <ul className="list-unstyled summary">
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon5"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_5.png"/>
                                            <div className="media-body">
                                                <h3>Для новичков и профессионалов</h3>
                                                <p>Обучение стрельбе и стрельба из представленных в тире образцов.
                                                    Самостоятельная стрельба из собственной пневматики (поминутная,
                                                    почасовая оплата). Корректность и дружелюбие.</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon6"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_6.png"/>
                                            <div className="media-body">
                                                <h3>Дополнительные услуги</h3>
                                                <p>Проведение корпоративов, тимбилдинги, дни рождения подростков и
                                                    детей, проведение экскурсий и лекции. Консультации по выбору и
                                                    применению пневматики. Пристрелка пневматики, хронограф.</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon7"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_7.png"/>
                                            <div className="media-body">
                                                <h3>Выбор оружия</h3>
                                                <p>В наличии больше образцов пневматики, чем в любом минском
                                                    магазине. От недорогих массовых образцов до эксклюзива.
                                                    Револьверы, винтовки, пистолеты, пистолеты-пулеметы.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-justify">
                                    <noindex><a href="https://tir-centr.by/oruzhie-v-tire/pnevmatika#guns">Перейти к
                                        списку</a><br/><br/></noindex>
                                    <p align="justify"><b>Пневматический тир</b> - это незаслуженно забытый в нашей
                                        стране вид досуга, развлечения и хобби людей всех возрастов и любого пола. Все
                                        привыкли к тому, что минские тиры - это летние палатки в парках культуры и
                                        отдыха, где подвыпившие парни пытаются настрелять на приз из древних винтовок
                                        времен Отечественной войны с Наполеоном, а также суровые подвалы с не менее
                                        суровыми инструкторами-интравертами-мизантропами. Мы предлагаем вам совершенно
                                        новый формат досуга, развлечения и обучения - это <b>тир в центре города</b> с
                                        большим выбором пневматики, включая даже стреляющие очередями пистолеты-пулеметы
                                        и иные редкие экземпляры оружия. </p>
                                    <p align="justify">У нас нет призов - нашей целью является приятное
                                        времяпровождение, патриотическое воспитание, повышение общего уровня культуры и
                                        понимания того, что оружие - это неотъемлемая часть истории человечества. У нас
                                        не будут смеяться над новичками и многие женщины, как показывает практика,
                                        стреляют гораздо лучше, чем их брутальные мужья. Вы можете пострелять из своего
                                        свежеприобретенного пневматического пистолета или винтовки, пройти <b>курс
                                            обучения стрельбе и обращению с оружием</b>, отточить свои навыки и многое
                                        другое. Вся представленная в тире пневматика имеет заводские или искусственно
                                        внесенные в конструкцию ограничения по мощности до 3 Дж и соответствует всем
                                        требованиям безопасности для посетителей и посторонних лиц. </p>
                                    <p align="justify">Если вы считаете, что стрельба из пневматического оружия не дает
                                        ничего полезного и не помогает освоиться с огнестрельным оружием, то мы готовы
                                        доказать вам обратное. Многие посетители и посетительницы тира для
                                        пневматического оружия в дальнейшем с интересом посещали специализированные <b>стрелковые
                                            клубы Минска</b>, России и других странах, где никто из них не ронял оружие
                                        и не создавал проблем из-за несоблюдения техники безопасности. Поэтому мы будем
                                        рады видеть вас независимо от ваших стрелковых навыков, возраста и пола,
                                        рекомендуя перед визитом заранее определиться с интересующими вас образцами
                                        оружия (фотосессия разрешена <b>только</b> с теми единицами, оружия из которых
                                        вы будете стрелять). Минимальный бюджет на человека в пневматическом тире
                                        составляет 3 рубля. Ограниченное обучение (стойки, прицеливание, техника
                                        безопасности и т.п.) входит в стоимость в любом случае.</p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                    <noindex><a name="guns"></a></noindex>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="models-list bg-white">
                    <div className="container">
                        <h2>Пистолеты</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mr-53m/1_250x250_040.jpg"
                                         alt="Пневматический пистолет МР-53М"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет МР-53М</p>
                                        <p className="card-text">Первое учебное оружие в школах и ДОСААФ:
                                            пневматический пистолет МР-53М от Ижевского машиностроительного завода.
                                            Тяжелый и грубый, но простой, безотказный и мощный. Легкий взвод.
                                            Стальной и внушительный.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">4 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-mr-53m"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/h-01/1_250x250_040.jpg"
                                         alt="Пневматический пистолет H-01"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет H-01</p>
                                        <p className="card-text">Классический пружинно-поршневой однозарядный
                                            пневматический пистолет начального уровня. Редко встречается в продажах,
                                            отсутствует в тирах Минска. Blow H-01 имеет очень своеобразный внешний
                                            вид, хорош для фотосессии и стрельбы на небольшое расстояние.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">3 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-h-01"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/aps-nbb/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Стечкина (АПС)"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Стечкина (АПС)</p>
                                        <p className="card-text">Выполненная из металла пневматическая копия
                                            автоматического пистолета Стечкина (АПС). Высокое качество изготовления,
                                            точность. Стрельба самовзводом и с предварительного взвода. Тяжелый,
                                            выглядит внушительно. Попробуйте вместе с ПМ!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">7 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-stechkina-(aps)"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/pm/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Макарова (ПМ)"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Макарова (ПМ)</p>
                                        <p className="card-text">Цельнометаллический, выполненный из стали
                                            пневматический пистолет Макарова (ПМ). Возможность сборки-разборки,
                                            соответствие реальному пистолету по массе. Не подводит и не ломается.
                                            Начните знакомство с пневматикой именно с ПМ. Удобен даже для ребенка
                                            (при удержании двумя руками).</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">4 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-makarova-(pm)"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/tt/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Тульский Токарева (ТТ)"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Тульский Токарева (ТТ)</p>
                                        <p className="card-text">Первый советский самозарядный пистолет.
                                            Качественная пневматическая копия ТТ, максимально соответствует
                                            оригиналу. Для любителей оружейной классики и антуражного оружия.
                                            Тяжелый и мощный. Рекомендуем пневматический ТТ вместе с ПМ и АПС!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">8 руб.</span> / 17 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-tulskij-tokareva-(tt)"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/colt-scg/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Colt Special Combat"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Colt Special Combat</p>
                                        <p className="card-text">Эксклюзив в нашем тире – хромированная версия
                                            всемирно известного пистолета Кольт. Идентичность оригиналу с точностью
                                            до спускового крючка и предохранительной скобы. Пневматический Кольт –
                                            точный, тяжелый и красивый. Лучший вариант для фотосессии с оружием.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">12 руб.</span> / 18 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-colt-special-combat"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/beretta-tar92/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Beretta 92"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Beretta 92 с отдачей</p>
                                        <p className="card-text">Привычный по множеству фильмов пистолет военных,
                                            гангстеров и полицейских. Распространен по всему миру. Итальянская
                                            классика в тире – пневматический пистолет Берета с возможностью
                                            автоматического огня. Узнаваемый силуэт, высокая степень соответствия
                                            огнестрельному исходнику.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">12 руб.</span> / 18 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-beretta-92"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/z116/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Z116"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Z116 с отдачей</p>
                                        <p className="card-text">Пневматический пистолет Z116 не имеет явного
                                            огнестрельного аналога и является новой моделью, предназначенной для
                                            развлекательной и учебной стрельбы. Имеет систему блоубэк, малый вес,
                                            широкую рукоять.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">10 руб.</span> / 20 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-z116"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/bersa/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Bersa"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Bersa</p>
                                        <p className="card-text">Пневматическая копия аргентинского пистолета «Bersa
                                            Thunder/TPRC», предназначенного для скрытого ношения. Наш выбор: легкий,
                                            удобный, сам просится в руку! Выполнен качественно, стреляет точно.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">8 руб.</span> / 20 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-bersa"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/p-900/1_250x250_040.jpg"
                                         alt="Пневматический пистолет P-900"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет P-900</p>
                                        <p className="card-text">Однозарядный пневматический пистолет P-900
                                            относится к пружинно-поршневой пневматике. Имеет футуристический вид,
                                            похож на бластер пришельца. Легкий, хорошо лежит в руке. Интересен как
                                            экзотический пистолет-переломка.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">3 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-p-900"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/cz-75-shadow/1_250x250_040.jpg"
                                         alt="Пневматический пистолет CZ-75"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет CZ-75</p>
                                        <p className="card-text">Легендарный чешский пистолет CZ-75 в пневматическом
                                            исполнении. Он известен и распространен почти так же, как пистолеты
                                            Макарова, Глок, Кольт, Браунинг. Достаточно легкий, затвор из оружейного
                                            пластика.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">6 руб.</span> / 21 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-cz-75"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/cz-75-compact/1_250x250_040.jpg"
                                         alt="Пневматический пистолет CZ-75D Compact"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет CZ-75D Compact с ЛЦУ</p>
                                        <p className="card-text">Компактное исполнение (для скрытого ношение)
                                            всемирно известного чешского пистолета CZ-75. Состоит на вооружении
                                            полиции многих стран (Польша, Словакия и другие). Для небольшой руки.
                                            Хромированный затвор.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">7 руб.</span> / 17 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-cz-75d-compact"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/walther-pps/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Вальтер ППС"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Вальтер ППС с отдачей</p>
                                        <p className="card-text">Лицензионная пневматическая копия современного
                                            компактного пистолета «Вальтер ППС» калибра 9 мм. Соответствие
                                            оригиналу, компактный и легкий, тонкий. Удобен для женщин и детей.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">10 руб.</span> / 18 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-valter-pps"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/steyr-m9-a1/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Steyr Manlicher M9-A1"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Steyr Manlicher M9-A1</p>
                                        <p className="card-text">Пневматическая копия одного из новейших компактных
                                            пистолетов калибра 9 мм. – это Steyr Manlicher M9-A1. Хромированный
                                            затвор, эргономичная рукоять, небольшие размеры. Конкурент «Глока»! Для
                                            тех, кто любит компактные и легкие пистолеты.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">7 руб.</span> / 19 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-steyr-manlicher-m9-a1"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/sig-sauer-p226/1_250x250_040.jpg"
                                         alt="Пневматический пистолет SIG Sauer P226"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет SIG Sauer P226 с
                                            отдачей</p>
                                        <p className="card-text">SIG Sauer P226 – пневматический пистолет с
                                            подвижным затвором и отдачей. Лицензионная реплика всемирно известного
                                            пистолета от оружейной компании с вековой историей. Мощный и точный. Для
                                            ценителей пневматики высокого качества.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">11 руб.</span> / 18 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-sig-sauer-p226"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp-651ks/1_250x250_040.jpg"
                                         alt="Пневматический пистолет МР-651 КС (Корнет)"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет МР-651 КС (Корнет)</p>
                                        <p className="card-text">Пневматический пистолет МР-651 КС «Корнет» – это
                                            максимально дешевый, простой и неприхотливый пневматический пистолет
                                            начального уровня от отечественного производителя. Имеет достаточно
                                            интересную конструкцию. Стреляет стальными шариками или пулями.
                                            Многозарядный.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">3 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-mr-651-ks-(kornet)"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mauser-m712/1_250x250_040.jpg"
                                         alt="Пневматический пистолет Маузер М712"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет Маузер М712 с отдачей</p>
                                        <p className="card-text">Легендарный пистолет Маузера в пневматическом
                                            варианте. Одиночный и автоматический огонь. Отдача. Сделан очень
                                            качественно, полностью из металла. Стань Героем Революции!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">12 руб.</span> / 19 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-mauzer-c96"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="models-list bg-gray">
                    <div className="container">
                        <h2>Винтовки</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp-512-26/3_250x250_040.jpg"
                                         alt="Пневматическая винтовка МР-512-26 (дерево)"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка MP-512-26</p>
                                        <p className="card-text">Классический образец пружинно-поршневой пневматики
                                            с деревянным ложем. Удобная и точная. Идеальный вариант для посетителей
                                            бюджетных тиров: пневматическая винтовка с минимальной стоимостью
                                            выстрела. Обитатель школьных тиров, секций ДОСААФ.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">5 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-mp-512-26"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/g-force-15/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка G-FORCE 15"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка G-FORCE 15 с
                                            коллиматором</p>
                                        <p className="card-text">Винтовка G-FORCE будет интересна любителям
                                            тактических версий пневматики, схожих с реальными образцами оружия.
                                            Данная винтовка имеет сходство с карабином (автоматом) M-4, имеет
                                            прорезиненный затыльник, коллиматорный прицел и очень легкий взвод. </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">8 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-g-force"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp553k/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка MP-553K"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка MP-553K с оптикой</p>
                                        <p className="card-text">МР-553К – работающая на СО2 версия легендарной
                                            биатлонной винтовки. Удобная, легкая, точная. Обойма на 5 пуль.
                                            Возможность быстрой перезарядки, не требуется взводить рычаг. Попробуйте
                                            пострелять из МР-553К перед покупкой.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">8 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-mp-553k"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp-61/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка MP-61"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка MP-61</p>
                                        <p className="card-text">МР-61 – многозарядная спортивная винтовка с боковым
                                            взводом. Изначально разрабатывалась для биатлонистов. Имеет малый вес,
                                            отлично лежит в руках, проста и удобна в использовании. Купить винтовку
                                            МР-61 – это правильное решение любого начинающего стрелка.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">5 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-mp-61"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp-512-22/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка MP-512-22"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка MP-512-22</p>
                                        <p className="card-text">Винтовка МР-512-22 - это самая распространенная в
                                            СНГ пневматика. Первое, с чего начинается знакомство с длинноствольным
                                            оружием (школа, ДОСААФ). Простая и точная. Результат эволюции
                                            легендарной ИЖ-38. Пластиковое ложе и приклад.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">5 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-mp-512-22"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp-514k/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка MP-514К"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка MP-514К</p>
                                        <p className="card-text">Осторожно! Редкое и злобное животное:
                                            пневматическая винтовка МР-514К («Крокодил»). Почему ее так называют?
                                            Попробуйте и очень быстро поймете. Многозарядная, имеет необычную
                                            компоновку. Большие возможности для модернизации и изменения внешнего
                                            вида.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">5 руб.</span> / 8 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-mp-514k"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/delta-fox/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка Delta Fox"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка Delta Fox с оптикой</p>
                                        <p className="card-text">Delta Fox - это легкая, удобная и точная винтовка с
                                            ослабленным усилием взвода. Рекомендуется производителем для детей и
                                            подростков. Качественные прицельные приспособления, красивое
                                            исполнение.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">8 руб.</span> / 10 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-delta-fox"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/crosman1077/1%20(1)_250x250_040.jpg"
                                         alt="Пневматическая винтовка Crosman 1077"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматическая винтовка Crosman 1077</p>
                                        <p className="card-text">Многозарядная пневматическая винтовка - точная и
                                            легкая, стреляет стальными пулями. Отличная альтернатива переломным
                                            винтовкам, экономия времени при сохранении точности.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">8 руб.</span> / 12 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-crosman-1077"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="models-list bg-white">
                    <div className="container">
                        <h2>Пистолеты-пулеметы</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/ingram/1_250x250_040.jpg"
                                         alt="Пневматический пистолет-пулемет Ingram M11"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет-пулемет Ingram M11</p>
                                        <p className="card-text">Простая пневматическая реплика скорострельного
                                            пистолета-пулемета Ingram. Имеет выдвижной приклад. Режим стрельбы -
                                            только одиночные выстрелы. Низкая стоимость выстрела. Рекомендуется для
                                            детей.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">6 руб.</span> / 25 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-pulemet-ingram-m11"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/uzm/1_250x250_040.jpg"
                                         alt="Пневматический пистолет-пулемет Uzi"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет-пулемет Uzi с отдачей</p>
                                        <p className="card-text">Великолепно сделанная пневматическая копия
                                            легендарного пистолета-пулемета Uzi. Одиночная и автоматическая
                                            стрельба, двигающийся затвор. Полностью сделан из металла. Тяжелый,
                                            трудно отличить от настоящего.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">13 руб.</span> / 25 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-pulemet-uzi"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/mp-661k-08/1_250x250_040.jpg"
                                         alt="Пневматический пистолет-пулемет Дрозд"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет-пулемет Дрозд
                                            бункерный</p>
                                        <p className="card-text">Пистолет-пулемет «Дрозд» - это пример качественной
                                            пневматики от отечественного производителя. Электронный спуск, стрельба
                                            очередями, огромный объем бункерного магазина, установлен коллиматорный
                                            прицел.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">40 руб.</span> / 100 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-pulemet-drozd"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/t-rex/1_250x250_040.jpg"
                                         alt="Пневматический пистолет-пулемет Кедр (ПП-91"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет-пулемет Кедр с отдачей</p>
                                        <p className="card-text">Переделанный из боевого оружия пневматический
                                            пистолет-пулемет «Кедр» - это антуражная и реалистичная пневматика.
                                            Одиночный и автоматический огонь. Изготовлен из стали. Тяжелый, имеет
                                            откидной приклад.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">13 руб.</span> / 25 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-pulemet-kedr-(pp-91"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/drozd-priklad/1_250x250_040.jpg"
                                         alt="Пневматический пистолет-пулемет МР 661 Дрозд"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический пистолет-пулемет Дрозд</p>
                                        <p className="card-text">Пистолет-пулемет «Дрозд» - это качественная
                                            пневматика от отечественного производителя. Электронный спуск, одиночный
                                            и автоматический огонь, приклад. Отличное соотношение цены и
                                            качества!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">12 руб.</span> / 20 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-pistolet-pulemet-drozd-s-prikladom"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="models-list bg-gray">
                    <div className="container">
                        <h2>Револьверы</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/nagant/1_250x250_040.jpg"
                                         alt="Пневматический револьвер Наган"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический револьвер Наган</p>
                                        <p className="card-text">Копия револьвера системы Нагана в очень
                                            качественном исполнении. Снаряжается имитаторами патронов. Точный,
                                            хорошо лежит в руке. Пневматический Наган - классика среди револьверов.
                                            Самое распространенный в СССР револьвер в первой половине XX века.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">5 руб.</span> / 7 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-revolver-nagan"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/dan-wesson-25-gold/1_250x250_040.jpg"
                                         alt="Пневматический револьвер Дэн Вессон Gold"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический револьвер Дэн Вессон Gold</p>
                                        <p className="card-text">Пневматический револьвер в позолоченном исполнении.
                                            Лучший выбор для гангстера или рок-звезды. Встречайте Dan Wesson Gold со
                                            стволом длиной 2,5 дюйма. Заряжается имитаторами патронов, стреляет
                                            шариками. Лучший выбор для фото в Instagram.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">5 руб.</span> / 6 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-revolver-den-vesson"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/super-sport-6/1_250x250_040.jpg"
                                         alt="Пневматический револьвер Super Sport 6"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический револьвер Super Sport 6</p>
                                        <p className="card-text">Пневматический револьвер Super Sport – это пример
                                            по-настоящему крупного револьвера с длинным стволом (6 дюймов). Очень
                                            тяжелый, рекомендуем стрелять с двух рук. Темно-серый цвет, впечатляющий
                                            вид. Заряжается имитаторами патронов.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">4 руб.</span> / 6 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-revolver-super-sport-6"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/super-sport-8/1_250x250_040.jpg"
                                         alt="Пневматический револьвер Super Sport 8"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический револьвер Super Sport 8</p>
                                        <p className="card-text">Пневматический револьвер Super Sport – это самый
                                            большой из имеющихся у нас пневматических револьверов. Длина ствола – 8
                                            дюймов. Для самых суровых и крепких ковбоев! Заряжается имитаторами
                                            патронов.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">4 руб.</span> / 6 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-revolver-super-sport-8"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/dan-wesson-4/1_250x250_040.jpg"
                                         alt="Пневматический револьвер Дэн Вессон 4 дюйма"/>
                                    <div className="card-body">
                                        <p className="card-title">Пневматический револьвер Дэн Вессон 4 дюйма</p>
                                        <p className="card-text">Пневматический револьвер «Дэн Вессон» со стволом в
                                            4 дюйма – лицензионная копия современного американского револьвера от
                                            компании «Dan Wesson». Удобный, надежный, точный. Образец качественной
                                            пневматики. Заряжается имитаторами патронов.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">4 руб.</span> / 6 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskij-revolver-den-vesson-4-dyujma"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="models-list bg-white">
                    <div className="container">
                        <h2>Автоматы</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/pnevmatika/m4-177/1_250x250_040.jpg"
                                         alt="Пневматическая винтовка M4"/>
                                        <div className="card-body">
                                            <p className="card-title">Пневматическая винтовка M4</p>
                                            <p className="card-text">Пневматическая винтовка М4 - это качественная копия
                                                американской армейской автоматической винтовки (автомата) М4.
                                                Многозарядная винтовка с предварительной накачкой. Рекомендуем стрельбу
                                                стальными шариками. Регулировка скорости пули.</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col">
                                                    от <span className="price">4 руб.</span> / 10 выстр.
                                                </div>
                                                <div className="col-auto text-right">
                                                    <a href="oruzhie-v-tire/pnevmatika/pnevmaticheskaya-vintovka-m4"
                                                       className="btn btn-red" role="button">Подробнее</a>
                                                </div>
                                            </div>
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

export default Pnevmatika