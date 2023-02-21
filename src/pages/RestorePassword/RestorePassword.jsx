import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RestorePassword = () => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const loginEmail = event.target?.loginEmail?.value
            const myJson = {
                loginEmail
            }
            console.log(myJson)
            await axios.post(`http://localhost:8040/api/auth/hui`, myJson).then(() => navigate("/"))

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
                    <h1 className="title">Восстановить учётную запись</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="email" name="loginEmail" placeholder="Ваш e-mail" className="input"/>
                        <button className="button-login btn-blue">Отправить</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default RestorePassword