import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";

const LuchshieStrelki = () => {
    const [shooters, setShooters] = useState([])

    useEffect(() => {
        // (async () => {
        //     try {
        //         const response = await axios.get('')
        //         setImages(response.data)
        //     } catch (e) {
        //
        //     }
        // })()
        setShooters(
            [{
                "id": 1,
                "title": "Первая",
                "url": "https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg",
                "name": "Алексей",
                "quantity": 5,
                "quality": "20%"
            },
                {
                    "id": 2,
                    "title": "Вторая",
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg",
                    "name": "Антон",
                    "quantity": 7,
                    "quality": "40%"
                },
                {
                    "id": 3,
                    "title": "Третья",
                    "url": "https://tir-centr.by/assets/cache_image/lazernoe/ak74/1_250x250_040.jpg",
                    "name": "Андрей",
                    "quantity": 9,
                    "quality": "60%"
                }])
    }, [])


    return (
        <>
            <Navbar/>
            <section className="shooters-list bg-white">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item active">Лучшие стрелки</li>
                        </ol>
                    </nav>
                    <h2>Лучшие стрелки</h2>
                    <div className="row">
                        {shooters.map((shooter) =>
                            <div className="col-lg-4 col-md-6" key={shooter.id}>
                                <div className="card">
                                    <img className="card-img-top mx-auto d-block"
                                         src={shooter.url}
                                         alt={shooter.title}/>
                                    <div className="card-body">
                                        <p className="card-title card-desc">{shooter.name}</p>
                                        <p className="card-desc">Количество выстрелов: {shooter.quantity}</p>
                                        <p className="card-desc">Процент попаданий: {shooter.quality}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default LuchshieStrelki