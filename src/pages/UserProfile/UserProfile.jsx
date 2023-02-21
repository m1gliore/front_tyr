import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {userRequest} from "../../requestMethods";

const UserProfile = () => {

    const currentUser = JSON.parse(localStorage.getItem("user"))?.username
    const currentToken = JSON.parse(localStorage.getItem("user"))?.token
    const [user, setUser] = useState({})
    const [certificateType, setCertificateType] = useState([]);
    const [offer, setOffer] = useState("1")
    const [discountOffer, setDiscountOffer] = useState("0")
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try {
                console.log(currentToken)
                const response = await userRequest.get(`http://localhost:8040/api/client/getUserInfo/${currentUser}`,)
                const responseCertificateType = await axios.get('http://localhost:8040/api/homePage/allCertificateTypes')
                console.log({headers: {Authorization: `Bearer ${currentToken}`}})
                setUser(response.data)
                setCertificateType(responseCertificateType.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [currentToken, currentUser])

    const handleChangeOffer = (event) => {
        event.preventDefault()
        setOffer(event.target.value)
    }

    const handleChangeDiscountOffer = (event) => {
        event.preventDefault()
        setDiscountOffer(event.target.value)
    }

    const handleSubmitCorporate = async (event) => {
        event.preventDefault()
        try {
            const date = event.target.date.value
            const countPeople = event.target.people.value
            const phone = event.target.phone.value
            const surname = event.target.surname.value
            const myJson = {
                username: currentUser,
                date,
                countPeople,
                phone,
                surname
            }
            console.log(myJson)
            await userRequest.post(`http://localhost:8040/api/client/createCorporate`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitCertificate = async (event) => {
        event.preventDefault()
        try {
            const idCertificateType = event.target.certificate.value
            const surname = event.target.surname.value
            const phone = event.target.phone.value
            const myJson = {
                username: currentUser,
                surname,
                phone,
                certificateTypeRequest: {
                    idCertificateType
                }
            }
            console.log(myJson)
            await userRequest.post(`http://localhost:8040/api/client/createCertificate`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitReply = async (event) => {
        event.preventDefault()
        try {
            const reviewInfo = event.target.message.value
            const myJson = {
                username: currentUser,
                reviewInfo
            }
            console.log(myJson)
            await userRequest.post(`http://localhost:8040/api/client/saveNewReview`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Navbar/>
            <main role="main">
                <div className="topContainer">
                    <h1 className="username">Здравствуйте, {currentUser}</h1>
                </div>
                <section className="contact-form">
                    <div className="containerProfile">
                        <select required className="inputAdd" name="discountOffer" onChange={handleChangeDiscountOffer}>
                            <option value="0">Первый тариф</option>
                            <option value="1">Второй тариф</option>
                            <option value="2">Третий тариф</option>
                        </select>
                        <h2>Ваша текущая
                            скидка: {user.countCertificate > certificateType[discountOffer]?.countCertificate ? certificateType[discountOffer]?.discount : 0}%</h2>
                        <br/>
                        <h2>Осталось сертификатов до скидки:&nbsp;
                            {certificateType[discountOffer]?.countCertificate - user.countCertificate < 0 ?
                                0 : certificateType[discountOffer]?.countCertificate - user.countCertificate}</h2>
                    </div>
                    <div className="containerProfile">
                        <h2>Предложения для вас</h2><br/>
                        <select required className="inputAdd" name="offer" onChange={handleChangeOffer}>
                            <option value="1">Оформить корпоратив</option>
                            <option value="2">Оформить сертификат</option>
                            <option value="3">Оставить отзыв</option>
                        </select>
                    </div>
                </section>
                <section className={offer !== "1" ? "contact-form hidden" : "contact-form"}>
                    <div className="container">
                        <h1>Оформить корпоратив</h1>
                        <form onSubmit={handleSubmitCorporate}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_date">Дата планирования</label>
                                    <input required type="datetime-local" className="form-control" id="fa_date"
                                           name="date"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_people">Количество людей</label>
                                    <input required type="number" min="0" max="40" className="form-control"
                                           id="fa_people"
                                           name="people"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_phone">Телефон</label>
                                    <input required type="tel"
                                           pattern="^\+[0-9]{3} [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$"
                                           maxLength="17" className="form-control" id="fa_phone" name="phone"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_surname">Фамилия</label>
                                    <input required type="text" className="form-control" id="fa_surname"
                                           name="surname"/>
                                </div>
                            </div>
                            <button type="submit" className="button btn-blue">Оформить</button>
                        </form>
                    </div>
                </section>
                <section className={offer !== "2" ? "contact-form hidden" : "contact-form"}>
                    <div className="container">
                        <h1>Оформить сертификат</h1>
                        <form onSubmit={handleSubmitCertificate}>
                            <div className="row">
                                <select required className="inputAdd" name="certificate">
                                    <option selected disabled value="">Выберите один из вариантов</option>
                                    <option
                                        value="1">Номинал: {certificateType[0]?.nominal} руб&nbsp;
                                        Скидка: {certificateType[0]?.discount}%&nbsp;&nbsp;Кол-во сертификатов для
                                        скидки: {certificateType[0]?.countCertificate} шт
                                    </option>
                                    <option
                                        value="2">Номинал: {certificateType[1]?.nominal} руб&nbsp;
                                        Скидка: {certificateType[1]?.discount}%&nbsp;&nbsp;Кол-во сертификатов для
                                        скидки: {certificateType[1]?.countCertificate} шт
                                    </option>
                                    <option
                                        value="3">Номинал: {certificateType[2]?.nominal} руб&nbsp;
                                        Скидка: {certificateType[2]?.discount}%&nbsp;&nbsp;Кол-во сертификатов для
                                        скидки: {certificateType[2]?.countCertificate} шт
                                    </option>
                                </select>
                                <input required className="inputAdd" type="tel" name="phone"
                                       pattern="^\+[0-9]{3} [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$"
                                       maxLength="17" placeholder="Введите ваш номер телефона"/>
                                <input required className="inputAdd" type="text" name="surname"
                                       placeholder="Введите вашу фамилию"/>
                            </div>
                            <button type="submit" className="button btn-blue">Отправить</button>
                        </form>
                    </div>
                </section>
                <section className={offer !== "3" ? "contact-form hidden" : "contact-form"}>
                    <div className="container">
                        <h1>Оставить отзыв</h1>
                        <form onSubmit={handleSubmitReply}>
                            <div className="form-group">
                                <label htmlFor="fa_message">Комментарий</label>
                                <textarea className="form-control" id="fa_message" name="message" rows="3"></textarea>
                            </div>
                            <button type="submit" className="button btn-blue">Отправить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default UserProfile