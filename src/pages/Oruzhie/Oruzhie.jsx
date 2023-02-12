import {useEffect, useState} from "react";
import translit from "../../makeLink";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Oruzhie = () => {

    const [oruzhie, setOruzhie] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=oruzhie')
                setOruzhie(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    const link = `/uslugi/${translit(oruzhie.gunCatalog || '')}`

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href="/oruzhie-v-tire">Услуги</a></li>
                                <li className="breadcrumb-item"><a href={link}>{oruzhie.gunCatalog}</a></li>
                                <li className="breadcrumb-item active">{oruzhie.title}</li>
                            </ol>
                        </nav>
                        <div className="base-card">
                            {/*<img src={"data:image/" + oruzhie?.url.split('.')[1] + ";base64," + oruzhie?.file} className="float-left p-2" alt={oruzhie.title}/>*/}
                            <h1>{oruzhie.title}</h1>
                            <div className="text-justify">
                                <p align="justify">{oruzhie.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Oruzhie