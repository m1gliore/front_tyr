import './styles.css'
import {faPen, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import Modal from "../Modal/Modal";
import axios from "axios";
import defaultImg from "../../images/default-store-350x350.jpg";
import first from "../../images/1.jpg";
import second from "../../images/2.jpg";
import third from "../../images/3.jpg";
import fourth from "../../images/4.jpg";
import fifth from "../../images/5.jpg";

const Main = () => {
    const [sliderImages, setSliderImages] = useState([])
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(defaultImg)
    const admin = true
    const [encodedImage, setEncodedImage] = useState("")

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=luchshie-strelki')
                setSliderImages(response.data.imageResponseSet)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()

        if (file) {
            setImageUrl(URL.createObjectURL(file))
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setEncodedImage(reader.result)
            }
            reader.onerror = (error) => {
                console.log('Error: ', error)
            }
        }
    }, [file])

    sliderImages.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmitRedact = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id.value
            const idImage = sliderImages[id].idImage
            const title = event.target.title.value
            const desc = event.target.desc.value
            const myJson = {
                idImage,
                url: file.name,
                file: encodedImage,
                shooterRequest: {
                    title,
                    desc
                }
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
        const selectedImage = sliderImages[event.target.value]
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        setImageUrl(selectedImageUrl)
    }

    const refresh = () => window.location.reload()
    return (
        <main role="main">
            {admin &&
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => setModalRedactActive(true)}/>}
            <section className="review">
                <div className="mainGallery">
                    <div className="imageContainer">
                        <img src={first} alt="one"/>
                        <div className="bottomText">Услуги тира</div>
                    </div>
                    <div className="imageContainer">
                        <img src={second} alt="two"/>
                        <div className="bottomText">Обучение и курсы стрельбы</div>
                    </div>
                    <div className="imageContainer">
                        <img src={third} alt="three"/>
                        <div className="bottomText">Предложения для корпоративов</div>
                    </div>
                    <div className="imageContainer">
                        <img src={fourth} alt="four"/>
                        <div className="bottomText">Подарочные серификаты</div>
                    </div>
                    <div className="imageContainer">
                        <img src={fifth} alt="five"/>
                        <div className="bottomText">Развлечения</div>
                    </div>
                </div>
            </section>
            {admin &&
                <Modal active={modalRedactActive} setActive={setModalRedactActive}>
                    <h1>Изменить изображение слайдера</h1>
                    <form className="modalAdd" onSubmit={handleSubmitRedact}>
                        <div className="leftContainer">
                            <img className="imgAdd" src={imageUrl} alt="foto"/>
                            <label className="labelAdd" style={{cursor: "pointer"}} htmlFor="file">
                                <FontAwesomeIcon icon={faUpload}/>
                            </label>
                            <input className="inputAdd" style={{display: "none"}} type="file" id="file"
                                   onChange={handleFile}/>
                        </div>
                        <div className="rightContainer">
                            <select required className="inputAdd" name="id" onChange={handleSelectRedact}>
                                <option selected disabled>Выберите один из вариантов</option>
                                {sliderImages.map((item) =>
                                    <option key={item.idImage}
                                            value={sliderImages.indexOf(item)}>{sliderImages.indexOf(item) + 1}</option>)}
                            </select>
                            <input required className="inputAdd" type="text" name="title"
                                   placeholder="Введите название"/>
                            <input required className="inputAdd" type="text" name="desc"
                                   placeholder="Введите описание"/>
                            <button className="buttonAdd" onClick={refresh}>Добавить</button>
                        </div>
                    </form>
                </Modal>}
        </main>
    )
}

export default Main