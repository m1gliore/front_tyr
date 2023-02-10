import './styles.css'
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import Modal from "../Modal/Modal";

const Main = () => {
    const admin = true
    const [modalRedactActive, setModalRedactActive] = useState(false)

    return (
        <main role="main">
            {admin &&
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => setModalRedactActive(true)}/>}
            <section className="review">
                <div className="mainGallery">
                    <div className="imageContainer">
                        <a href="/uslugi/type?catalog=osnovnyie-uslugi-tira">
                            <img src="https://tir-centr.by/assets/images/homepage/review/1.jpg" alt="one"/>
                            <div className="bottomText">Основные услуги тира</div>
                        </a>
                    </div>
                    <div className="imageContainer">
                        <a href="/uslugi/type?catalog=obuchenie-i-cursor-strelbyi">
                            <img src="https://tir-centr.by/assets/images/homepage/review/2.jpg" alt="two"/>
                            <div className="bottomText">Обучение и курсы стрельбы</div>
                        </a>
                    </div>
                    <div className="imageContainer">
                        <a href="/uslugi/type?catalog=yuridicheskim-liczam">
                            <img src="https://tir-centr.by/assets/images/homepage/review/3.jpg" alt="three"/>
                            <div className="bottomText">Корпоративы и тимбилдинги</div>
                        </a>
                    </div>
                    <div className="imageContainer">
                        <a href="/uslugi/type?catalog=podarochnyie-sertifikatyi">
                            <img src="https://tir-centr.by/assets/images/homepage/review/4.jpg" alt="four"/>
                            <div className="bottomText">Подарочные серификаты</div>
                        </a>
                    </div>
                    <div className="imageContainer">
                        <a href="/uslugi/type?catalog=razvlecheniya-dlya-vsej-semi">
                            <img src="https://tir-centr.by/assets/images/homepage/review/5.jpg" alt="five"/>
                            <div className="bottomText">Развлечения для семьи и детей</div>
                        </a>
                    </div>
                    <div className="imageContainer">
                        <a href="/uslugi/type?catalog=poznanie-i-razvitie">
                            <img src="https://tir-centr.by/assets/images/homepage/review/6.jpg" alt="six"/>
                            <div className="bottomText">Экскурсии и познание</div>
                        </a>
                    </div>
                </div>
            </section>
            {admin &&
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить изображения слайдера</h1>
                </Modal>}
        </main>
    )
}

export default Main