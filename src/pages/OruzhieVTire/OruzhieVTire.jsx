import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const OruzhieVTire = () => {
    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="tir">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item active">Тир</li>
                            </ol>
                        </nav>
                        <h1>Оружие в тире</h1>
                        <div className="category-card">
                            <div className="row">
                                <div className="col-sm-auto text-center">
                                    <img src="https://tir-centr.by/assets/cache_image/strikeball/1_200x200_b1c.jpg"
                                         className="img-fluid" alt="Страйкбольный тир в Минске"/>
                                </div>
                                <div className="col-sm">
                                    <h2>Страйкбольный тир</h2>
                                    <p className="text-justify">Страйкбольный тир в Минске - это отличная возможность
                                        потренироваться на множестве интерактивных мишеней. Со своим или нашим приводом.
                                        Теплое, комфортное помещение. Обучение страйкболу, тренировки. Для новичков и
                                        профессионалов.</p>
                                    <a href="oruzhie-v-tire/strajkbol" className="btn btn-red"
                                       role="button">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="category-card">
                            <div className="row">
                                <div className="col-sm-auto text-center">
                                    <img src="https://tir-centr.by/assets/cache_image/signal/_200x200_b1c.jpg"
                                         className="img-fluid" alt="Сигнальное оружие Минск"/>
                                </div>
                                <div className="col-sm">
                                    <h2>Сигнальное оружие</h2>
                                    <p className="text-justify">Никогда не стреляли из огнестрельного оружия и хотите
                                        узнать, на что это похоже? Начните с сигнальных пистолетов и револьверов.
                                        Реалистичный процесс зарядки и выстрела (холостой патрон).</p>
                                    <a href="oruzhie-v-tire/signalnoe-oruzhie" className="btn btn-red"
                                       role="button">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="category-card">
                            <div className="row">
                                <div className="col-sm-auto text-center">
                                    <img
                                        src="https://tir-centr.by/assets/cache_image/pnevmatika/common/1_200x200_b1c.jpg"
                                        className="img-fluid"
                                        alt="Пневматический тир Минск - обучение стрельбе, стрелковый клуб"/>
                                </div>
                                <div className="col-sm">
                                    <h2>Пневматический тир</h2>
                                    <p className="text-justify">Пневматический тир в Минске - это возможность отлично
                                        провести время и соприкоснуться с историей оружия. Для детей и взрослых, мужчин
                                        и женщин. От 6 лет и старше. Большой выбор пневматики (пистолеты, револьверы,
                                        винтовки). От недорогих до эксклюзива.</p>
                                    <a href="oruzhie-v-tire/pnevmatika" className="btn btn-red"
                                       role="button">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="category-card">
                            <div className="row">
                                <div className="col-sm-auto text-center">
                                    <img src="https://tir-centr.by/assets/cache_image/lazernoe/1_200x200_b1c.jpg"
                                         className="img-fluid" alt="Лазерный тир в Минске"/>
                                </div>
                                <div className="col-sm">
                                    <h2>Лазерный тир</h2>
                                    <p className="text-justify">Лазерный тир в Минске - это лучший вариант для желающих
                                        максимально недорого отработать базовые навыки стрельбы, подготовиться к важной
                                        игре в лазертаг или просто приятно провести время. Металлическое оружие, копии
                                        огнестрельных прототипов. От детей до военнослужащих.</p>
                                    <a href="oruzhie-v-tire/lazernoe" className="btn btn-red"
                                       role="button">Подробнее</a>
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

export default OruzhieVTire