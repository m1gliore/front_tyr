import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const SignalnoeOruzhie = () => {
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
                                <li className="breadcrumb-item active">Сигнальное оружие</li>
                            </ol>
                        </nav>
                        <div className="category-card">
                            <h1>Сигнальное оружие</h1>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="category-image-container">
                                        <img src="https://tir-centr.by/assets/cache_image/signal/_400x400_dc0.jpg"
                                             className="img-fluid" alt="Сигнальное оружие Минск"/>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <ul className="list-unstyled summary">
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon2"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_2.png"/>
                                            <div className="media-body">
                                                <h3>Знакомство с огнестрельным оружием</h3>
                                                <p>Отличный вариант для тех, кто насмотрелся фильмов, но никогда не
                                                    стрелял из настоящего оружия. Наиболее безопасный вариант для
                                                    первого знакомства с огнестрелом. Возможность понять принцип
                                                    работы пистолета в действии.</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon4"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_4.png"/>
                                            <div className="media-body">
                                                <h3>Реалистичные ощущения</h3>
                                                <p>Снарядите магазин патронами. Подготовьте сами оружие к стрельбе.
                                                    Почувствуйте ощущения от реального выстрела. Узнайте, как пахнет
                                                    порох. Сделайте интригующее видео или фото.</p>
                                            </div>
                                        </li>
                                        <li className="media mt-3">
                                            <img className="align-self-center mr-3" alt="Icon1"
                                                 src="https://tir-centr.by/assets/images/categories/Icons_1.png"/>
                                            <div className="media-body">
                                                <h3>Включено в наши учебные курсы</h3>
                                                <p>Все обучающиеся на наших курсах отрабатывают навыки работы с
                                                    оружием на сигнальных пистолетах. Обязательно для четкого
                                                    понимания принципа работы огнестрельного короткоствольного
                                                    оружия и техники безопасности при его использовании.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-justify">
                                    <noindex><a href="https://tir-centr.by/oruzhie-v-tire/signalnoe-oruzhie#guns">Перейти
                                        к списку</a><br/><br/></noindex>
                                    <p align="justify">Вы и Ваши дети никогда не имели дел с огнестрельным оружием? Вам
                                        интересно, на что это похоже? Увы, мы не можем предложить Вам такого, но у нас
                                        Вы можете пострелять из <b>сигнальных пистолетов</b> и револьверов. Полученные
                                        при этом ощущения на 50-90% аналогичны от тех, которые Вы получите при стрельбе
                                        из настоящего оружия. Кроме того, съемка при стрельбе из сигнального оружия –
                                        это оптимальный вариант для получения красивых видео (проверено неоднократно).
                                    </p>
                                    <p align="justify">Что представляет собой сигнальное оружие? Оно использует холостым
                                        боеприпасом (т.е. из ствола не будет вылетать пуля). При этом процесс снаряжения
                                        пистолета или револьвера патронами, зарядка и процесс стрельбы в большинстве
                                        случаев аналогичен процедуре работы с огнестрельным оружием. Вы сможете сами
                                        снарядить магазин или барабан, дослать патрон в патронник и произвести несколько
                                        выстрелов. </p>
                                    <p align="justify">Мы рекомендуем попробовать сигнальный пистолет и револьвер не
                                        только в качестве самостоятельного развлечения, но и в качестве теста перед
                                        покупкой аналогичного образца, а также в качестве завершения праздника.
                                        Используемые у нас образцы безопасны и могут быть использованы не только
                                        взрослыми, но и подростками. Поверьте, Вам действительно будет интересно (и
                                        очень громко). Для стрельбы у нас используются полностью легальные в
                                        соответствии с белорусским законодательством пистолеты и револьверы калибра 5,6
                                        мм.</p>
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
                                         src="https://tir-centr.by/assets/cache_image/signal/3_250x250_040.jpg"
                                         alt="Сигнальный пистолет МР-371"/>
                                    <div className="card-body">
                                        <p className="card-title">Сигнальный пистолет МР-371</p>
                                        <p className="card-text">Самый противоречивый отечественный сигнальный
                                            пистолет: МР-371 (копия пистолета Макарова). Очень реалистичное
                                            обращение, но не самые интересные ощущения при стрельбе. Бюджетный
                                            вариант, оптимален для обучения.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">3 руб.</span> / 1 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/signalnoe-oruzhie/signalnyij-pistolet-mr-371"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/signal/m906/2_250x250_040.jpg"
                                         alt="Сигнальный пистолет Stalker M906"/>
                                    <div className="card-body">
                                        <p className="card-title">Сигнальный пистолет Stalker M906</p>
                                        <p className="card-text">Самый лучший вариант для желающих познакомиться с
                                            огнестрельным оружием. Полуавтоматический огонь, движущийся затвор,
                                            громкий звук выстрела. Зарядил и стреляй, реалистичнее некуда.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">3 руб.</span> / 1 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/signalnoe-oruzhie/signalnyij-pistolet-stalker-m906"
                                                   className="btn btn-red" role="button">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src="https://tir-centr.by/assets/cache_image/signal/ppk/1_250x250_040.jpg"
                                         alt="Сигнальный пистолет Walther PPK Chiappa Bond 007"/>
                                    <div className="card-body">
                                        <p className="card-title">Сигнальный пистолет Walther PPK Bond 007</p>
                                        <p className="card-text">Еще один отличный вариант для желающих
                                            познакомиться с огнестрельным оружием. Полуавтоматический огонь,
                                            движущийся затвор, громкий звук выстрела. Зарядил и стреляй, звук и
                                            пламя улетные!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                от <span className="price">3 руб.</span> / 1 выстр.
                                            </div>
                                            <div className="col-auto text-right">
                                                <a href="oruzhie-v-tire/signalnoe-oruzhie/signalnyij-pistolet-walther-ppk-bond-007"
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

export default SignalnoeOruzhie