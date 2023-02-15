import {useEffect, useState} from "react";
import transliterate from "../../makeLink";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Usluga = () => {

    const [usluga, setUsluga] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getServiceCatalogBy?catalog=usluga')
                setUsluga(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    const link = `/uslugi/${transliterate(usluga.serviceCatalog || '', true)}`

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href={link}>{usluga.serviceCatalog}</a></li>
                                <li className="breadcrumb-item active">{usluga.title}</li>
                            </ol>
                        </nav>
                        <div className="base-card">
                            {/*<img src={"data:image/" + usluga?.url.split('.')[1] + ";base64," + usluga?.file} className="float-left p-2" alt={usluga.title}/>*/}
                            <h1>{usluga.title}</h1>
                            <div className="text-justify">
                                <p align="justify">{usluga.desc}</p>
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