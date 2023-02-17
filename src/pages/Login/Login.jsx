import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const username = event.target?.username?.value
            const password = event.target?.password?.value
            const myJson = {
                password,
                username
            }
            console.log(myJson)
            await axios.post(`http://localhost:8040/api/auth/auth`, myJson)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Navbar/>
            <div className="main-container">
                <div className="wrapper">
                    <h1 className="title">Войти в учётную запись</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Ваш логин" className="input"/>
                        <input type="password" name="password" placeholder="Пароль" className="input"/>
                        <button className="btn btn-blue">Войти</button>
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