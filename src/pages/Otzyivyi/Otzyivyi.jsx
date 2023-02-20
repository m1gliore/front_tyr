import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {userRequest} from "../../requestMethods";
import {isAdmin} from "../../myLibrary";

const Otzyivyi = () => {
    const [allReplies, setAllReplies] = useState([])
    const [replies, setReplies] = useState([])
    const [cardNumber, setCardNumber] = useState(null)
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [modalRejectActive, setModalRejectActive] = useState(false)
    const admin = isAdmin()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const responseAdmin = await userRequest.get(`http://localhost:8040/api/redact1/getAllReview`)
                const responseClient = await userRequest.get(`http://localhost:8040/api/homePage/getAllReviewsByHomePage`)
                setAllReplies(responseAdmin.data)
                setReplies(responseClient.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [allReplies])

    allReplies.sort((a, b) => {
        return a.idReview - b.idReview
    })

    replies.sort((a, b) => {
        return a.idReview - b.idReview
    })

    const handleSubmitRedact = async (event) => {
        console.log(event)
        event.preventDefault()
        try {
            const idReview = cardNumber
            const reviewStatus = event.target.status.value
            const username = allReplies.find(item => item.idReview === idReview).username
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

    return (
        <>
            <Navbar/>
            <section className="shooters-list-str bg-white">
                <div className="container">
                    <h2>Отзывы</h2>
                    <div className="row">
                        {replies.map((reply) =>
                            <div className="col-lg-4 col-md-6" key={reply.idReview}>
                                <div className="cardStr">
                                    <div className="card-body-str">
                                        <p className="card-desc-str">Пользователь: {reply.username}</p>
                                        <p className="card-desc-str">Дата: {reply.dateRegistration}</p>
                                        <p className="card-desc-str">Отзыв:<br/><br/>{reply.reviewInfo}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {admin && <>
                        {allReplies.length !== 0 && <h2 style={{marginTop: "5vh"}}>Неподтверждённые отзывы</h2>}
                        <div className="row">
                            {allReplies.map((reply) =>
                                <div className="col-lg-4 col-md-6" key={reply.idReview}>
                                    <div className="cardStr">
                                        <div className="card-body-str">
                                            <p className="card-desc-str">Пользователь: {reply.username}</p>
                                            <p className="card-desc-str">Дата: {reply.dateRegistration}</p>
                                            <p className="card-desc-str">Отзыв:<br/><br/>{reply.reviewInfo}</p>
                                        </div>
                                        {admin && <div style={{display: "flex"}}>
                                            <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle}
                                                             onClick={() => {
                                                                 setModalAcceptActive(true)
                                                                 setCardNumber(reply.idReview)
                                                             }}/>
                                            <FontAwesomeIcon className="action fa-2x" icon={faBan}
                                                             onClick={() => {
                                                                 setModalRejectActive(true)
                                                                 setCardNumber(reply.idReview)
                                                             }}/>
                                        </div>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </>}
                </div>
            </section>
            <Footer/>
            {admin && <>
                <Modal active={modalAcceptActive} setActive={setModalAcceptActive}>
                    <h1>Принять отзыв</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <input type="text" name="status" value="CONFIRMED" style={{display: "none"}}/>
                        <div className="rightContainer">
                            <button className="buttonAdd">Принять</button>
                        </div>
                    </form>
                </Modal>
                <Modal active={modalRejectActive} setActive={setModalRejectActive}>
                    <h1>Отклонить отзыв</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <input type="text" name="status" value="REJECTED" style={{display: "none"}}/>
                        <div className="rightContainer">
                            <button className="buttonAdd">Отклонить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Otzyivyi