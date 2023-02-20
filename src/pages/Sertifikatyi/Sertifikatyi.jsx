import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheckCircle, faPen, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {userRequest} from "../../requestMethods";
import {isAdmin} from "../../myLibrary";

const Sertifikatyi = () => {
    const [certificates, setCertificates] = useState([])
    const [allCertificates, setAllCertificates] = useState([])
    const [corporates, setCorporates] = useState([])
    const [certificateTemplates, setCertificateTemplates] = useState([])
    const [template, setTemplate] = useState({})
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [modalRejectActive, setModalRejectActive] = useState(false)
    const [modalAcceptCorporateActive, setModalAcceptCorporateActive] = useState(false)
    const [cardNumber, setCardNumber] = useState(null)
    const admin = isAdmin()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                if (admin) {
                    const responseCertificate = await userRequest.get('http://localhost:8040/api/redact/allCertificates')
                    const responseAllCertificate = await userRequest.get('http://localhost:8040/api/redact/allCertificatesPending')
                    const responseTemplate = await userRequest.get('http://localhost:8040/api/homePage/allCertificateTypes')
                    const responseCorporate = await userRequest.get('http://localhost:8040/api/redact/allCorporates')
                    setCertificates(responseCertificate.data)
                    setAllCertificates(responseAllCertificate.data)
                    setCertificateTemplates(responseTemplate.data)
                    setCorporates(responseCorporate.data)
                }
            } catch (e) {
                console.log(e)
            }
        })()
    }, [admin])

    certificates.sort((a, b) => {
        return a.idCertificate - b.idCertificate
    })

    allCertificates.sort((a, b) => {
        return a.idCertificate - b.idCertificate
    })

    const handleSubmitAccept = async (event) => {
        event.preventDefault()
        try {
            const idCertificate = cardNumber
            const certificateStatus = event.target.status.value
            const username = allCertificates.find(item => item.idCertificate === idCertificate).username
            const myJson = {
                idCertificate,
                certificateStatus,
                username
            }
            console.log(myJson)
            await userRequest.put('http://localhost:8040/api/redact/updateCertificate', myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitDelete = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idCorporate = corporates[id]?.idCorporate
            const myJson = {
                idCorporate
            }
            console.log(myJson)
            await userRequest.delete(`http://localhost:8040/api/redact/deleteCorporate/${idCorporate}`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idCertificateType = certificateTemplates[id].idCertificateType
            const nominal = event.target.nominal.value
            const discount = event.target.discount.value
            const countCertificate = event.target.countCertificate.value
            const myJson = {
                idCertificateType,
                nominal,
                discount,
                countCertificate
            }
            console.log(myJson)
            await userRequest.put('http://localhost:8040/api/redact/updateCertificateType', myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => {
                    setModalRedactActive(true)
                }}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPeopleGroup} onClick={() => {
                    setModalAcceptCorporateActive(true)
                }}/>
            </>}
            <section className="shooters-list-str bg-white">
                <div className="flexContainer">
                    <div className="container">
                        <h2>Типы сертификатов</h2>
                        <div className="row">
                            {certificateTemplates.map((certificate) =>
                                <div className="col-lg-4 col-md-6" key={certificate.idCertificateType}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Скидка: {certificate.discount}%</p>
                                            <p className="card-desc-str">Номинал: {certificate.nominal} руб.</p>
                                            <p className="card-desc-str">Количество скртификатов для
                                                скидки: {certificate.countCertificate} шт.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h2 style={{marginTop: "5vh"}}>Сертификаты</h2>
                        <div className="row">
                            {certificates.map((certificate) =>
                                <div className="col-lg-4 col-md-6" key={certificate.idCertificate}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Дата: {certificate.registration} </p>
                                            <p className="card-desc-str">Телефон: {certificate.phone} </p>
                                            <p className="card-desc-str">Цена со скидкой: {certificate.price} руб.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div style={{borderLeft: "5px solid blue"}} className="container">
                        <h2>Корпоративы</h2>
                        <div className="row">
                            {corporates.map((corporate) =>
                                <div className="col-lg-4 col-md-6" key={corporate.idCorporate}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Дата: {corporate.registration}</p>
                                            <p className="card-desc-str">Фамилия: {corporate.surname}</p>
                                            <p className="card-desc-str">Телефон: {corporate.phone}</p>
                                            <p className="card-desc-str">Цена со скидкой: {corporate.price} руб.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h2 style={{marginTop: "5vh"}}>Неподтверждённые сертификаты</h2>
                        <div className="row">
                            {allCertificates.map((certificate) =>
                                <div className="col-lg-4 col-md-6" key={certificate.idCertificate}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Дата: {certificate.registration}</p>
                                            <p className="card-desc-str">Телефон: {certificate.phone}</p>
                                            <p className="card-desc-str">Цена со скидкой: {certificate.price} руб.</p>
                                        </div>
                                        <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle}
                                                         onClick={() => {
                                                             setModalAcceptActive(true)
                                                             setCardNumber(certificate.idCertificate)
                                                         }}/>
                                        <FontAwesomeIcon className="action fa-2x" icon={faBan}
                                                         onClick={() => {
                                                             setModalRejectActive(true)
                                                             setCardNumber(certificate.idCertificate)
                                                         }}/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            {admin && <>
                <Modal active={modalAcceptCorporateActive} setActive={setModalAcceptCorporateActive}>
                    <h1>Удалить корпоратив</h1>
                    <form className="modalAdd" onSubmit={handleSubmitDelete}>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id">
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {corporates.map((item) =>
                                    <option key={item.idCorporate}
                                            value={corporates.indexOf(item)}>{corporates.indexOf(item) + 1}</option>)}
                            </select>
                            <button className="buttonAdd">Удалить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAcceptActive} setActive={setModalAcceptActive}>
                    <h1>Принять отзыв</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAccept}>
                        <input type="text" name="status" value="CONFIRMED" style={{display: "none"}}/>
                        <div className="rightContainer">
                            <button className="buttonAdd">Принять</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRejectActive} setActive={setModalRejectActive}>
                    <h1>Отклонить отзыв</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAccept}>
                        <input type="text" name="status" value="REJECTED" style={{display: "none"}}/>
                        <div className="rightContainer">
                            <button className="buttonAdd">Отклонить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить шаблон сертификата</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id">
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {certificateTemplates.map((item) =>
                                    <option key={item.idCertificateType}
                                            value={certificateTemplates.indexOf(item)}>{certificateTemplates.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="number" min="0" name="nominal"
                                   placeholder="Введите номинал" value={template?.nominal}
                                   onChange={event => setTemplate(certificateTemplates[event.target.value])}/>
                            <input required className="inputAdd" type="number" min="0" max="100" name="discount"
                                   placeholder="Введите скидку(%)" value={template?.discount}
                                   onChange={event => setTemplate(certificateTemplates[event.target.value])}/>
                            <input required className="inputAdd" type="number" min="0" name="countCertificate"
                                   placeholder="Введите количнство сертификатов для действия скидки"
                                   value={template?.countCertificate}
                                   onChange={event => setTemplate(certificateTemplates[event.target.value])}/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Sertifikatyi