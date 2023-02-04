import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const LuchshieStrelki = () => {
    const [shooters, setShooters] = useState([])
    const [modalDeleteActive, setModalDeleteActive] = useState(false)
    const [modalAddActive, setModalAddActive] = useState(false)
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const admin = true

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=luchshie-strelki')
                setShooters(response.data.imageResponseSet)
                console.log(response.data)
            } catch (e) {

            }
        })()

    }, [])


    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faTrashCan} onClick={() => setModalDeleteActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => setModalRedactActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPlus} onClick={() => setModalAddActive(true)}/>
            </>}
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
                        {shooters.map((shooter) =>
                            <div className="col-lg-4 col-md-6" key={shooter.shooterResponse.idShooter}>
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src={"data:image/" + shooter.url.split('.')[1] + ";base64," + shooter.file}
                                         alt={shooter.title}/>
                                    <div className="card-body">
                                        <p className="card-title card-desc">{shooter.shooterResponse.name + " "
                                            + shooter.shooterResponse.patronymic}</p>
                                        <p className="card-desc">Количество
                                            выстрелов: {shooter.shooterResponse.result}</p>
                                        <p className="card-desc">Процент
                                            попаданий: {shooter.shooterResponse.successfulHits}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
            <Modal active={modalDeleteActive} setActive={setModalDeleteActive}>
                <p>Удалить</p>
            </Modal>
            <Modal active={modalAddActive} setActive={setModalAddActive}>
                <p>Добавить</p>
            </Modal>
            <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                <p>Изменить</p>
            </Modal>
        </>
    )
}

export default LuchshieStrelki