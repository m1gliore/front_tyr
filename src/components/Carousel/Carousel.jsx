import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import {publicRequest} from "../../requestMethods";

const Carousel = () => {

    const [sliderImages, setSliderImages] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await publicRequest.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=home')
                setSliderImages(response.data.imageResponseSet)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#mainCarousel" data-bs-slide-to="1" className=""></li>
                <li data-bs-target="#mainCarousel" data-bs-slide-to="2" className=""></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block"
                         src={"data:image/" + sliderImages[0]?.url.split('.')[1] + ";base64," + sliderImages[0]?.file}
                         alt="one"/>
                    <div className="caption">
                        <p className="carousel-item-title">{sliderImages[0]?.title}</p>
                        <p className="carousel-item-description">{sliderImages[0]?.description}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block"
                         src={"data:image/" + sliderImages[1]?.url.split('.')[1] + ";base64," + sliderImages[1]?.file}
                         alt="two"/>
                    <div className="caption">
                        <p className="carousel-item-title">{sliderImages[1]?.title}</p>
                        <p className="carousel-item-description">{sliderImages[1]?.description}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block"
                         src={"data:image/" + sliderImages[2]?.url.split('.')[1] + ";base64," + sliderImages[2]?.file}
                         alt="three"/>
                    <div className="caption">
                        <p className="carousel-item-title">{sliderImages[2]?.title}</p>
                        <p className="carousel-item-description">{sliderImages[2]?.description}</p>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#mainCarousel" role="button" data-bs-slide="prev">
                <FontAwesomeIcon icon={faAngleLeft} className="fa-5x" aria-hidden="true"/>
            </a>
            <a className="carousel-control-next" href="#mainCarousel" role="button" data-bs-slide="next">
                <FontAwesomeIcon icon={faAngleRight} className="fa-5x" aria-hidden="true"/>
            </a>
        </div>
    )
}

export default Carousel