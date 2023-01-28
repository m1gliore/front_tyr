import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
    return (
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#mainCarousel" data-bs-slide-to="1" className=""></li>
                <li data-bs-target="#mainCarousel" data-bs-slide-to="2" className=""></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block"
                         src="https://tir-centr.by/assets/images/homepage/slider/slider-pnevmatika.jpg"
                         alt="Пневматический тир в Минске"/>
                    <div className="caption">
                        <p className="carousel-item-title">Пневматический тир в Минске</p>
                        <p className="carousel-item-description">Самый большой выбор пневматики в Беларуси (и не
                            только). Пистолеты, револьверы, винтовки.</p>
                    </div>
                    <a className="btn btn-red" href="/oruzhie-v-tire/pnevmatika">Подробнее</a>
                </div>
                <div className="carousel-item">
                    <img className="d-block"
                         src="https://tir-centr.by/assets/images/homepage/slider/slider-strikeball.jpg"
                         alt="Страйкбольный тир в Минске"/>
                    <div className="caption">
                        <p className="carousel-item-title">Страйкбольный тир в Минске</p>
                        <p className="carousel-item-description">Большой выбор страйкбольных приводов: от
                            обычных до эксклюзивных. Пистолеты с отдачей.</p>
                    </div>
                    <a className="btn btn-red"
                       href="/oruzhie-v-tire/strajkbol">Подробнее</a>
                </div>
                <div className="carousel-item">
                    <img className="d-block"
                         src="https://tir-centr.by/assets/images/homepage/slider/slider-lasertag.jpg"
                         alt="Лазертаг и лазерный тир"/>
                    <div className="caption">
                        <p className="carousel-item-title">Лазертаг и лазерный тир</p>
                        <p className="carousel-item-description">Лазерный тир с реалистичными копиями реального
                            оружия - для самых маленьких.</p>
                    </div>
                    <a className="btn btn-red" href="/oruzhie-v-tire/lazernoe">Подробнее</a>
                </div>

            </div>
            <a className="carousel-control-prev" href="#mainCarousel" role="button" data-bs-slide="prev">
                <FontAwesomeIcon icon={faAngleLeft} className="fa-5x" aria-hidden="true"/>
            </a>
            <a className="carousel-control-next" href="#mainCarousel" role="button" data-bs-slide="next">
                <FontAwesomeIcon icon={faAngleRight} className="fa-5x" aria-hidden="true"/>
            </a>
        </div>
    )
}

export default Carousel