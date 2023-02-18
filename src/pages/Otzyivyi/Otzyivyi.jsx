import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {userRequest} from "../../requestMethods";

const Otzyivyi = () => {
    const [replies, setReplies] = useState([])
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const currentUser = JSON.parse(localStorage.getItem("user"))?.username
    const admin = !!currentUser
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const response = await userRequest.get(`http://localhost:8040/api/redact1/getAllReview`)
                setReplies(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    replies.sort((a, b) => {
        return a.idReview - b.idReview
    })

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idReview = replies[id].idReview
            const reviewStatus = event.target.status.value
            const username = replies[id].username
            const myJson = {
                idReview,
                reviewStatus,
                username
            }
            console.log(myJson)
            await userRequest.put(`http://localhost:8040/api/redact1/updateReview`, myJson).then(() => navigate(0))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = replies[event.target.value]
        const selectedImageUrl = selectedImage.idReview
        setImageUrl(selectedImageUrl)
    }

    return (
        <>
            <Navbar/>
            {admin &&
                <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle} onClick={() => {
                    setModalAcceptActive(true)
                    setImageUrl("")
                }}/>}
            <section className="shooters-list-str bg-white">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item active">Отзывы</li>
                        </ol>
                    </nav>
                    <h2>Отзывы</h2>
                    <div className="row">
                        {replies.map((reply) =>
                            <div className="col-lg-4 col-md-6" key={reply.idReview}>
                                <div className="cardStr">
                                    <div className="card-body-str">
                                        <p className="card-desc-str">Пользователь:{reply.username}</p>
                                        <p className="card-desc-str">{reply.dateRegistration}</p>
                                        <p className="card-desc-str">Отзыв:{reply.reviewInfo}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
            {admin && <>
                <Modal active={modalAcceptActive} setActive={setModalAcceptActive}>
                    <h1>Изменить статус отзыва</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="leftContainer">{imageUrl}</div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {replies.map((item) =>
                                    <option key={item.idReview}
                                            value={replies.indexOf(item)}>{replies.indexOf(item) + 1}</option>)}
                            </select>
                            <select required className="inputAdd" name="status">
                                <option selected disabled value="">Выберите статус</option>
                                <option value="CONFIRMED">Принять</option>
                                <option value="REJECTED">Отклонить</option>
                            </select>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Otzyivyi