import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faPen} from "@fortawesome/free-solid-svg-icons";

const Sertifikatyi = () => {
    const [certificates, setCertificates] = useState([])
    const [certificateTemplates, setCertificateTemplates] = useState([])
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const admin = true

    useEffect(() => {
        (async () => {
            try {
                const responseCertificate = await axios.get('http://localhost:8040/api/redact/allCertificates')
                const responseTemplate = await axios.get('http://localhost:8040/api/redact/allCertificateTypes')
                setCertificates(responseCertificate.data)
                setCertificateTemplates(responseTemplate.data)

            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    console.log(certificates)
    console.log(certificateTemplates)
    certificates.sort((a, b) => {
        return a.idCertificate - b.idCertificate
    })

    const handleSubmitAccept = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idCertificate = certificates[id].idCertificate
            const status = event.target.status.value
            const myJson = {
                idCertificate,
                status
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/redact/updateCertificate', myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitRedact = async (event) => {
        try {
            event.preventDefault()
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
            await axios.put('http://localhost:8040/api/redact/updateCertificateType', myJson)
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

    const refresh = () => window.location.reload()

    return (
        <>
            <Navbar/>
            {admin && <>
                <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle}
                                 onClick={() => setModalRedactActive(true)}/>
                <FontAwesomeIcon className="action fa-2x" icon={faPen}
                                 onClick={() => setModalAcceptActive(true)}/>
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
                                        <p className="card-desc-str">Сумма: {certificate.price}</p>
                                        <p className="card-desc-str">Дата: {certificate.registration} %</p>
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
                                <option selected disabled>Выберите один из вариантов</option>
                                {certificates.map((item) =>
                                    <option key={item.idCertificate}
                                            value={certificates.indexOf(item)}>{certificates.indexOf(item) + 1}</option>)}
                            </select>
                            <select required className="inputAdd" name="status" onChange={handleSelectRedact}>
                                <option selected disabled>Выберите статус</option>
                                <option value="accept">Принять</option>
                                <option value="reject">Отклонить</option>
                            </select>
                            <button className="buttonAdd" onClick={refresh}>Изменить</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalAcceptActive} setActive={setModalAcceptActive}>
                    <h1>Изменить шаблон сертификата</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="leftContainer">{imageUrl}</div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled>Выберите один из вариантов</option>
                                {certificateTemplates.map((item) =>
                                    <option key={item.idCertificateType}
                                            value={certificateTemplates.indexOf(item)}>{certificateTemplates.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="number" name="nominal"
                                   placeholder="Введите номинал"/>
                            <input required className="inputAdd" type="number" name="discount"
                                   placeholder="Введите скидку(%)"/>
                            <input required className="inputAdd" type="number" name="countCertificate"
                                   placeholder="Введите количнство сертификатов для действия скидки"/>
                            <button className="buttonAdd" >Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Sertifikatyi