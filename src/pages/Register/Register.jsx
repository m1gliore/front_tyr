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
            console.log(myJson)
            await axios.post(`http://localhost:8040/api/auth/register`, myJson).then(()=>navigate(0))
        } catch (e) {
            console.log(e)
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
                        <button className="btn btn-blue">Создать</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register