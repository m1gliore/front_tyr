import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Login = () => {
    return (
        <>
            <Navbar/>
            <div className="main-container">
                <div className="wrapper">
                    <h1 className="title">Войти в учётную запись</h1>
                    <form className="form">
                        <input type="email" placeholder="Эл. почта" className="input"/>
                        <input type="password" placeholder="Пароль" className="input"/>
                        <button className="button">Войти</button>
                        <span className="error">Что-то пошло не так</span>
                        <a href="/restore-password" className="link">Забыли свой пароль?</a>
                        <a href="/register" className="link">Создать новую учётную запись</a>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login