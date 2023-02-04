import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Tyr = () => {
    const currentTyr = useLocation().search.split('=')[1]
    const currentPath = useLocation().pathname + useLocation().search
    const [tyrs, setTyrs] = useState([])
    const [categories, setCategories] = useState([])
    const [guns, setGuns] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=${currentTyr}`)
                setTyrs(response.data)
                setCategories(response.data)
                setGuns(response.data.imageResponseSet)
                console.log(response.data)
            } catch (e) {

            }
        })()

    }, [currentTyr])

    return (
        <>
            <Navbar/>
            <main role="main">
                {tyrs.map((tyr) =>
                    <section className="category">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                    <li className="breadcrumb-item"><a href="/oruzhie-v-tire">Тир</a></li>
                                    <li className="breadcrumb-item active">{tyr.nameCatalog}</li>
                                </ol>
                            </nav>
                            <div key={tyr.idServiceCatalog} className="category-card">
                                <h1>{tyr.nameCatalog}</h1>
                                <div className="row">
                                    <div className="col-lg">
                                        <div className="category-image-container">
                                            <img
                                                src={"data:image/" + tyr.imageResponseSet.url.split('.')[1] + ";base64," + tyr.imageResponseSet.file}
                                                className="img-fluid" alt={tyr.nameCatalog}/>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <ul className="list-unstyled summary">
                                            <li className="media mt-3">
                                                <img className="align-self-center mr-3"
                                                     alt={tyr.imageResponseSet.gunResponse.firstIconTitle}
                                                     src="https://tir-centr.by/assets/images/categories/Icons_1.png"/>
                                                <div className="media-body">
                                                    <h3>{tyr.imageResponseSet.gunResponse.firstIconTitle}</h3>
                                                    <p>{tyr.imageResponseSet.gunResponse.firstIconDesc}</p>
                                                </div>
                                            </li>
                                            <li className="media mt-3">
                                                <img className="align-self-center mr-3"
                                                     alt={tyr.imageResponseSet.gunResponse.secondIconTitle}
                                                     src="https://tir-centr.by/assets/images/categories/Icons_4.png"/>
                                                <div className="media-body">
                                                    <h3>{tyr.imageResponseSet.gunResponse.secondIconTitle}</h3>
                                                    <p>{tyr.imageResponseSet.gunResponse.secondIconDesc}</p>
                                                </div>
                                            </li>
                                            <li className="media mt-3">
                                                <img className="align-self-center mr-3"
                                                     alt={tyr.imageResponseSet.gunResponse.thirdIconTitle}
                                                     src="https://tir-centr.by/assets/images/categories/Icons_3.png"/>
                                                <div className="media-body">
                                                    <h3>{tyr.imageResponseSet.gunResponse.thirdIconTitle}</h3>
                                                    <p>{tyr.imageResponseSet.gunResponse.thirdIconDesc}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-justify">
                                        <noindex><a href={currentPath + "#guns"}>Перейти к списку</a><br/><br/>
                                        </noindex>
                                        <p align='justify'>
                                            {tyr.description}
                                        </p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                        <noindex><a name="guns"></a></noindex>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)}
                {categories.map((category) =>
                    <section key={category.idServiceCatalog}
                             className={"models-list " + (category.idServiceCatalog % 2 === 0 ? "bg-gray" : "bg-white")}>
                        <div className="container">
                            <h2>{category.imageResponseSet.gunResponse.gunType}</h2>
                            <div className="row">
                                {guns.map((gun) =>
                                    <div key={gun.gunResponse.idGun} className="col-lg-4 col-md-6">
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block"
                                                 src={"data:image/" + gun.url.split('.')[1] + ";base64," + gun.file}
                                                 alt={gun.alt}/>
                                            <div className="card-body">
                                                <p className="card-title">{gun.gunResponse.name}</p>
                                                <p className="card-text">{gun.gunResponse.description}</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="row">
                                                    <div className="col">
                                                        от <span
                                                        className="price">{gun.gunResponse.price} руб.</span> / {gun.gunResponse.quantity} выстр.
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <a href={"/" + gun.gunResponse.v}
                                                           className="btn btn-red" role="button">Подробнее</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </section>)}
            </main>
            <Footer/>
        </>
    )
}

export default Tyr