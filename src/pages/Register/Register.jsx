import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Register = () => {
    return (
        <>
            <Navbar/>
            <div className="main-container">
                <div className="wrapper">
                    <h1 className="title">Создать учётную запись</h1>
                    <form className="form">
                        <input type="text" placeholder="Имя" className="input"/>
                        <input type="text" placeholder="Фамилия" className="input"/>
                        <input type="text" placeholder="Отчество" className="input"/>
                        <input type="email" placeholder="Эл. почта" className="input"/>
                        <input type="password" placeholder="Пароль" className="input"/>
                        <input type="password" placeholder="Повторите пароль" className="input"/>
                        <button className="button">Создать</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register