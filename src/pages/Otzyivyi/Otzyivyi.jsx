import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const Otzyivyi = () => {
    const [replies, setReplies] = useState([])
    const [modalAcceptActive, setModalAcceptActive] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const admin = true

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=otzyivyi')
                setReplies(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    replies.sort((a, b) => {
        return a.idReply - b.idReply
    })

    const handleSubmitRedact = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idReply = replies[id].idReply
            const status = event.target.status.value
            const myJson = {
                idReply,
                status
            }
            console.log(myJson)
            await axios.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const selectedImage = replies[event.target.value]
        const selectedImageUrl = selectedImage.idReply
        setImageUrl(selectedImageUrl)
    }

    const refresh = () => window.location.reload()

    return (
        <>
            <Navbar/>
            {admin &&
                <FontAwesomeIcon className="action fa-2x" icon={faCheckCircle} onClick={() => setModalAcceptActive(true)}/>}
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
                            <div className="col-lg-4 col-md-6" key={reply.idReply}>
                                <div className="cardStr">
                                    <div className="card-body-str">
                                        <p className="card-desc-str">Сумма: {reply.title}</p>
                                        <p className="card-desc-str">Дата: {reply.desc} %</p>
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
                                <option selected disabled>Выберите один из вариантов</option>
                                {replies.map((item) =>
                                    <option key={item.idReply}
                                            value={replies.indexOf(item)}>{replies.indexOf(item) + 1}</option>)}
                            </select>
                            <select required className="inputAdd" name="status" onChange={handleSelectRedact}>
                                <option selected disabled>Выберите статус</option>
                                <option value="accept">Принять</option>
                                <option value="reject">Отклонить</option>
                            </select>
                            <button className="buttonAdd" onClick={refresh}>Изменить</button>
                        </div>
                    </form>
                </Modal>
            </>}
        </>
    )
}

export default Otzyivyi