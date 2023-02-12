import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
    return (
        <>
            <Navbar/>
            <main role="main">
                <h1 className="username">Здравствуйте, Николай</h1>
                <section className="contact-form">
                    <div className="container">
                        <h2>Ваша текущая скидка: 0%</h2><br/>
                        <h2>Осталось сертификатов до скидки: 3</h2>
                    </div>
                </section>
                <section className="contact-form">
                    <div className="container">
                        <h1>Оформить корпоратив</h1>
                        <form action="" method="post" className="ajax_form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_name">Что-то</label>
                                    <input type="text" className="form-control" id="fa_name" name="name" value=""/>
                                    <small className="form-text text-danger error_name"></small>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_email">Что-то 2</label>
                                    <input type="text" className="form-control" id="fa_email" name="email" value=""/>
                                    <small className="form-text text-danger error_email"></small>
                                </div>
                            </div>
                            <button type="submit" className="button btn-blue">Оформить</button>
                        </form>
                    </div>
                </section>
                <section className="contact-form">
                    <div className="container">
                        <h1>Оформить сертификат</h1>
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_name">ФИО</label>
                                    <input type="text" className="form-control" id="fa_name" name="name" value=""/>
                                    <small className="form-text text-danger error_name"></small>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_email">E-mail</label>
                                    <input type="text" className="form-control" id="fa_email" name="email" value=""/>
                                    <small className="form-text text-danger error_email"></small>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fa_message">Комментарий</label>
                                <textarea className="form-control" id="fa_message" name="message" rows="3"></textarea>
                                <small className="form-text text-danger error_message"></small>
                            </div>
                            <button type="submit" className="button btn-blue">Отправить</button>
                        </form>
                    </div>
                </section>
                <section className="contact-form">
                    <div className="container">
                        <h1>Оставить отзыв</h1>
                        <form action="" method="post" className="ajax_form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_name">ФИО</label>
                                    <input type="text" className="form-control" id="fa_name" name="name" value=""/>
                                    <small className="form-text text-danger error_name"></small>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fa_email">E-mail</label>
                                    <input type="text" className="form-control" id="fa_email" name="email" value=""/>
                                    <small className="form-text text-danger error_email"></small>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fa_message">Комментарий</label>
                                <textarea className="form-control" id="fa_message" name="message" rows="3"></textarea>
                                <small className="form-text text-danger error_message"></small>
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