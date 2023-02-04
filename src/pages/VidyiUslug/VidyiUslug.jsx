import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const VidyiUslug = () => {
    const currentService = useLocation().search.split('=')[1]
    const currentPath = useLocation().pathname
    const [services, setServices] = useState([])
    const [serviceNames, setServiceNames] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=' + currentService)
                setServices(response.data)
                setServiceNames(response.data.imageResponseSet)
                console.log(response.data)
            } catch (e) {

            }
        })()
    }, [currentService])

    return (
        <>
            <Navbar/>
            <main role="main">

                <section key={services.idServiceCatalog} className="service-part">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/uslugi">Услуги</a></li>
                                <li className="breadcrumb-item active">{services.nameCatalog}</li>
                            </ol>
                        </nav>
                        <h1>{services.nameCatalog}</h1>
                        <div className="row">
                            <div className="col-12 text-justify">
                            </div>
                            {serviceNames.map((serviceName) =>
                                <div key={serviceName.serviceResponse.idService} className="col-lg-6 service-card">
                                    <div className="row inner">
                                        <div className="col-4">
                                            <img
                                                src={"data:image/" + serviceName.url.split('.')[1] + ";base64," + serviceName.file}
                                                className="img-fluid"
                                                alt={serviceName.serviceResponse.name}/>
                                        </div>
                                        <div className="col">
                                            <h2>{serviceName.serviceResponse.name}</h2>
                                            <p>{serviceName.serviceResponse.description}</p>
                                            <a className="btn btn-red" href={currentPath + "/" + serviceName.serviceResponse.name}
                                               role="button">Подробнее</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default VidyiUslug