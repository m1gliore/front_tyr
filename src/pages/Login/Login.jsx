import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import localStorage from "redux-persist/es/storage";
import {useNavigate} from "react-router-dom";
import {publicRequest} from "../../requestMethods";

const Login = () => {

    let currentUser = {}
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {

            const username = event.target?.username?.value
            const password = event.target?.password?.value
            const myJson = {
                password,
                username
            }
            await publicRequest.post(`http://localhost:8040/api/auth/auth`, myJson)
                .then((response) => {
                    currentUser = response.data
                    localStorage.setItem("user", JSON.stringify(currentUser))
                    navigate(`/user-profile/${username}`,{replace:true})
                })

        } catch (e) {
            const statusCode = e.response ? e.response.status : null
            if (statusCode === 400) alert("Данные введены неверно")
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
                        <button className="button-login btn-blue">Войти</button>
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