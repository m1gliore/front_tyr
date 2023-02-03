import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const LuchshieStrelki = () => {
    return (
        <>
            <Navbar/>
            <section className="shooters-list bg-white">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item active">Лучшие стрелки</li>
                        </ol>
                    </nav>
                    <h2>Лучшие стрелки</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <img className="card-img-top mx-auto d-block"
                                     src="https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg"
                                     alt="Лазертаг с автоматом Калашникова - лазертаг с АК"/>
                                <div className="card-body">
                                    <p className="card-title card-desc">Алексей</p>
                                    <p className="card-desc">Количество выстрелов: 5</p>
                                    <p className="card-desc">Процент попаданий: 20%</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <img className="card-img-top mx-auto d-block"
                                     src="https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg"
                                     alt="Лазертаг с автоматом Калашникова - лазертаг с АК"/>
                                <div className="card-body">
                                    <p className="card-title card-desc">Антон</p>
                                    <p className="card-desc">Количество выстрелов: 7</p>
                                    <p className="card-desc">Процент попаданий: 40%</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <img className="card-img-top mx-auto d-block"
                                     src="https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg"
                                     alt="Лазертаг с автоматом Калашникова - лазертаг с АК"/>
                                <div className="card-body">
                                    <p className="card-title card-desc">Андрей</p>
                                    <p className="card-desc">Количество выстрелов: 9</p>
                                    <p className="card-desc">Процент попаданий: 60%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default LuchshieStrelki