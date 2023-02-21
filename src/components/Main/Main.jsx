import './styles.css'
import {faPen, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import Modal from "../Modal/Modal";
import defaultImg from "../../images/default-store-350x350.jpg";
import first from "../../images/1.jpg";
import second from "../../images/2.jpg";
import third from "../../images/3.jpg";
import fourth from "../../images/4.jpg";
import fifth from "../../images/5.jpg";
import {useNavigate} from "react-router-dom";
import {publicRequest, userRequest} from "../../requestMethods";
import {isAdmin} from "../../myLibrary";

const Main = () => {
    const [currentSlider, setCurrentSlider] = useState({})
    const [sliderImages, setSliderImages] = useState([])
    const [modalRedactActive, setModalRedactActive] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(defaultImg)
    const admin = isAdmin()
    const [encodedImage, setEncodedImage] = useState("")
    const navigate = useNavigate()

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await publicRequest.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=home')
                setSliderImages(response.data.imageResponseSet)
            } catch (e) {
                alert(e)
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
                alert('Error: ', error)
            }
        }
    }, [file])

    sliderImages.sort((a, b) => {
        return a.idImage - b.idImage
    })

    const handleSubmitRedact = async (event) => {
        event.preventDefault()
        try {
            const id = event.target.id.value
            const idImage = sliderImages[id].idImage
            const title = event.target.title.value
            const description = event.target.desc.value
            const myJson = {
                idImage,
                url: file?.name,
                file: encodedImage,
                title,
                description
            }
            await userRequest.put('http://localhost:8040/api/homePage/updateImageInGallery', myJson).then(() => navigate(0))
        } catch (e) {
            alert(e)
        }
    }

    const handleSelectRedact = (event) => {
        event.preventDefault()
        setCurrentSlider(sliderImages[event.target.value])
        const selectedImage = sliderImages[event.target.value]
        const selectedImageUrl = "data:image/" + selectedImage.url.split('.')[1] + ";base64," + selectedImage.file
        setImageUrl(selectedImageUrl)
    }

    return (
        <main role="main">
            {admin &&
                <FontAwesomeIcon className="action fa-2x" icon={faPen} onClick={() => {
                    setModalRedactActive(true)
                    setImageUrl(defaultImg)
                }}/>}
            <section className="review">
                <div className="mainGallery">
                    <a href="/uslugi/type?catalog=Uslugi%20tira">
                        <div className="imageContainer">
                            <img style={{width: "450px", height: "300px"}} src={first} alt="one"/>
                            <div className="bottomText">Услуги тира</div>
                        </div>
                    </a>
                    <a href="/uslugi/type?catalog=Obuchenie%20i%20kursyy%20strelqqbyy">
                        <div className="imageContainer">
                            <img style={{width: "450px", height: "300px"}} src={second} alt="two"/>
                            <div className="bottomText">Обучение и курсы стрельбы</div>
                        </div>
                    </a>
                    <a href="/uslugi/type?catalog=Predlozhenie%20dlya%20korporativa">
                        <div className="imageContainer">
                            <img style={{width: "450px", height: "300px"}} src={third} alt="three"/>
                            <div className="bottomText">Предложения для корпоративов</div>
                        </div>
                    </a>
                    <a href="/uslugi/type?catalog=Podarochnyye%20sertifikatyy">
                        <div className="imageContainer">
                            <img style={{width: "450px", height: "300px"}} src={fourth} alt="four"/>
                            <div className="bottomText">Подарочные сертификаты</div>
                        </div>
                    </a>
                    <a href="/uslugi/type?catalog=Razvlecheniya">
                        <div className="imageContainer">
                            <img style={{width: "450px", height: "300px"}} src={fifth} alt="five"/>
                            <div className="bottomText">Развлечения</div>
                        </div>
                    </a>
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
                                <option selected disabled value="">Выберите один из вариантов</option>
                                {sliderImages.map((item) =>
                                    <option key={item.idImage}
                                            value={sliderImages.indexOf(item)}>{sliderImages.indexOf(item) + 1}</option>)}
                            </select>
                            <input className="inputAdd" type="text" name="title" placeholder="Введите название"
                                   value={currentSlider?.title}
                                   onChange={event => setCurrentSlider(sliderImages[event.target.value])}/>
                            <input className="inputAdd" type="text" name="desc" placeholder="Введите описание"
                                   value={currentSlider?.description}
                                   onChange={event => setCurrentSlider(sliderImages[event.target.value])}/>
                            <button className="buttonAdd">Изменить</button>
                        </div>
                    </form>
                </Modal>}
        </main>
    )
}

export default Main