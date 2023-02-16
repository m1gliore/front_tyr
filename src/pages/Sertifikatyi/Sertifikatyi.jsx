import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faPen} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Sertifikatyi = () => {
    const [certificates, setCertificates] = useState([])
    const [certificateTemplates, setCertificateTemplates] = useState([])
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const admin = true
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const responseCertificate = await axios.get('http://localhost:8040/api/redact/allCertificates')
                const responseTemplate = await axios.get('http://localhost:8040/api/redact/allCertificateTypes')
                setCertificates(responseCertificate.data)
                setCertificateTemplates(responseTemplate.data)
                console.log(responseCertificate.data)
                console.log(responseTemplate.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    certificates.sort((a, b) => {
        return a.idCertificate - b.idCertificate
    })

    const handleSubmitAccept = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idCertificate = certificates[id].idCertificate
            const status = event.target.status.value
            const username = certificates[id].username
            const myJson = {
                idCertificate,
                status,
                username

            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/redact/updateCertificate', myJson).then(() => navigate(0))
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
            await axios.put('http://localhost:8040/api/redact/updateCertificateType', myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = certificates[event.target.value]
        const selectedImageUrl = selectedImage.idCertificate
        setImageUrl(selectedImageUrl)
    }

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle} onClick={() => {
                    setModalRedactActive(true)
                    setImageUrl("")
                }}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => {
                    setModalAcceptActive(true)
                    setImageUrl("")
                }}/>
            </>}
            <section className="shooters-list-str bg-white">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item active">Сертификаты</li>
                        </ol>
                    </nav>
                    <h2>Сертификаты</h2>
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
                    <h2>Типы сертификатов</h2>
                    <div className="row">
                        {certificateTemplates.map((certificate) =>
                            <div className="col-lg-4 col-md-6" key={certificate.idCertificateType}>
                                <div className="cardStr">
                                    <div className="card-body-str">
                                        <p className="card-desc-str">Скидка: {certificate.discount}%</p>
                                        <p className="card-desc-str">Номинал: {certificate.nominal} руб.</p>
                                        <p className="card-desc-str">Количество скртификатов для скидки: {certificate.countCertificate} руб.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
            {admin && <>
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить статус сертификата</h1>
                    <form className="modalAdd" onSubmit={handleSubmitAccept}>
                        <div className="leftContainer">{imageUrl}</div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {certificates.map((item) =>
                                    <option key={item.idCertificate}
                                            value={certificates.indexOf(item)}>{certificates.indexOf(item) + 1}</option>)}
                            </select>
                            <select required className="inputAdd" name="status">
                                <option selected disabled value="">Выберите статус</option>
                                <option value="accept">Принять</option>
                                <option value="reject">Отклонить</option>
                            </select>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAcceptActive} setActive={setModalAcceptActive}>
                    <h1>Изменить шаблон сертификата</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="leftContainer">{imageUrl}</div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {certificateTemplates.map((item) =>
                                    <option key={item.idCertificateType}
                                            value={certificateTemplates.indexOf(item)}>{certificateTemplates.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="number" min="0" name="nominal"
                                   placeholder="Введите номинал"/>
                            <input required className="inputAdd" type="number" min="0" max="100" name="discount"
                                   placeholder="Введите скидку(%)"/>
                            <input required className="inputAdd" type="number" min="0" name="countCertificate"
                                   placeholder="Введите количнство сертификатов для действия скидки"/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Sertifikatyi