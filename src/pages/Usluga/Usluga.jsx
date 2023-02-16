import {useEffect, useState} from "react";
import transliterate from "../../makeLink";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";

const Usluga = () => {

    const currentPath = useLocation().pathname
    const [usluga, setUsluga] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:8040/api/homePage/getOneService/${transliterate(currentPath,true)}`)
                setUsluga(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [currentPath])

    const link = `/uslugi/${transliterate(usluga.serviceCatalog || '',false)}`

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/uslugi">Услуги</a></li>
                                <li className="breadcrumb-item"><a href={link}>{usluga?.serviceResponse.name}</a></li>
                                <li className="breadcrumb-item active">{usluga.title}</li>
                            </ol>
                        </nav>
                        <div className="base-card">
                            <img src={"data:image/" + usluga?.url.split('.')[1] + ";base64," + usluga?.file} className="float-left p-2" alt={usluga?.serviceResponse.name}/>
                            <h1>{usluga?.serviceResponse.name}</h1>
                            <div className="text-justify">
                                <p align="justify">{usluga.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Usluga