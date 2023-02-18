import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faPen, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {userRequest} from "../../requestMethods";

const Sertifikatyi = () => {
    const [certificates, setCertificates] = useState([])
    const [corporates, setCorporates] = useState([])
    const [certificateTemplates, setCertificateTemplates] = useState([])
    const [template, setTemplate] = useState({})
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [modalAcceptCorporateActive, setModalAcceptCorporateActive] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const admin = true
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const responseCertificate = await userRequest.get('http://localhost:8040/api/redact/allCertificates')
                const responseTemplate = await axios.get('http://localhost:8040/api/homePage/allCertificateTypes')
                const responseCorporate = await userRequest.get('http://localhost:8040/api/redact/allCorporates')
                setCertificates(responseCertificate.data)
                setCertificateTemplates(responseTemplate.data)
                setCorporates(responseCorporate.data)
                console.log(responseCertificate.data)
                console.log(responseTemplate.data)
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
            const idCertificate = certificates[id]?.idCertificate
            const certificateStatus = event.target.status.value
            const username = certificates[id].username
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

    const handleSelectRedact = (event) => {
        event.preventDefault()
        setTemplate(certificateTemplates[event.target.value])
        console.log(template)
        const selectedImage = certificates[event.target.value]
        const selectedImageUrl = selectedImage.idCertificate
        setImageUrl(selectedImageUrl)
    }

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => {
                    setModalRedactActive(true)
                    setImageUrl("")
                }}/>
                <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle} onClick={() => {
                    setModalAcceptActive(true)
                    setImageUrl("")
                }}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPeopleGroup} onClick={() => {
                    setModalAcceptCorporateActive(true)
                    setImageUrl("")
                }}/>
            </>}
            <section className="shooters-list-str bg-white">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Главная</a></li>
                        <li className="breadcrumb-item active">Сертификаты</li>
                    </ol>
                </nav>
                <div className="flexContainer">
                    <div className="container">
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
                        <h2 style={{marginTop: "5vh"}}>Типы сертификатов</h2>
                        <div className="row">
                            {certificateTemplates.map((certificate) =>
                                <div className="col-lg-4 col-md-6" key={certificate.idCertificateType}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Скидка: {certificate.discount}%</p>
                                            <p className="card-desc-str">Номинал: {certificate.nominal} руб.</p>
                                            <p className="card-desc-str">Количество скртификатов для
                                                скидки: {certificate.countCertificate} руб.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="container">
                        <h2>Корпоративы</h2>
                        <div className="row">
                            {corporates.map((corporate) =>
                                <div className="col-lg-4 col-md-6" key={corporate.idCorporate}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Дата: {corporate.registration} </p>
                                            <p className="card-desc-str">Телефон: {corporate.phone} </p>
                                            <p className="card-desc-str">Цена со скидкой: {corporate.price} руб.</p>
                                        </div>
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
                        <div className="leftContainer">{imageUrl}</div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
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
                                <option value="CONFIRMED">Принять</option>
                                <option value="REJECTED">Отклонить</option>
                            </select>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
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