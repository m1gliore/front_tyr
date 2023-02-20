import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const loginEmail = event.target.loginEmail.value
            const username = event.target.username.value
            const password = event.target.password.value
            const password2 = event.target.password2.value
            const myJson = {
                password: password === password2 && password,
                loginEmail,
                username,
            }
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            const found = password.match(regex)

            if (!found) throw new SyntaxError("Неккоректный пароль (пароль должен содержать минимум 8 символов, одну " +
                "заглавную, одну строчную буквы, одну цифру и один специальный символ)")

            if (password !== password2) throw new SyntaxError("Пароли не совподают")

            await axios.post(`http://localhost:8040/api/auth/register`, myJson).then(() => {
                alert("На вашу почту выслано письмо с подтверждением аккаунта")
                navigate("/")
            })
        } catch (e) {
            const statusCode = e.response ? e.response.status : null
            if (e.name === "SyntaxError") alert(e.message)
            if (statusCode === 406) alert("Учётная запись с такими данными уже создана")
        }
    }

    return (
        <>
            <Navbar/>
            <div className="main-container">
                <div className="wrapper">
                    <h1 className="title">Создать учётную запись</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input name="username" type="text" placeholder="Имя пользователя" className="input"/>
                        <input name="loginEmail" type="email" placeholder="Эл. почта" className="input"/>
                        <input name="password" type="password" placeholder="Пароль" className="input"/>
                        <input name="password2" type="password" placeholder="Повторите пароль" className="input"/>
                        <button className="button-login btn-blue">Создать</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register