import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UserProfile = () => {

    const [user, setUser] = useState({})
    const [offer, setOffer] = useState("1")
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=user')
                setUser(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    const handleChangeOffer = (event) => {
        event.preventDefault()
        setOffer(event.target.value)
    }

    const handleSubmitCorporate = async (event) => {
        event.preventDefault()
        try {
            const date = event.target.date.value
            const people = event.target.people.value
            const phone = event.target.phone.value
            const surname = event.target.surname.value
            const myJson = {
                date,
                people,
                phone,
                surname
            }
            await axios.post(`http://localhost:8040/api/homePage/saveNewImageInGallery/corporate`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitCertificate = async (event) => {
        event.preventDefault()
        try {
            const certificate = event.target.certificate.value
            const myJson = {
                certificate
            }
            await axios.post(`http://localhost:8040/api/homePage/saveNewImageInGallery/certificate`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmitReply = async (event) => {
        event.preventDefault()
        try {
            const message = event.target.message.value
            const myJson = {
                message
            }
            await axios.post(`http://localhost:8040/api/homePage/saveNewImageInGallery/reply`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Navbar/>
            <main role="main">
                <h1 className="username">Здравствуйте, {user.username}</h1>
                <section className="contact-form">
                    <div className="containerProfile">
                        <h2>Ваша текущая скидка: {user.discount}%</h2><br/>
                        <h2>Осталось сертификатов до скидки: {user.quantity}</h2>
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
                                    <option value="one">Один</option>
                                    <option value="two">Два</option>
                                    <option value="three">Три</option>
                                </select>
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