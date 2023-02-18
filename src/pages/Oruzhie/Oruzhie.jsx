import {useEffect, useState} from "react";
import {transliterate} from "../../myLibrary";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";

const Oruzhie = () => {

    const currentPath = useLocation().pathname.split('/')[2]
    const [oruzhie, setOruzhie] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:8040/api/homePage/getOneGun/${transliterate(currentPath,true)}`)
                setOruzhie(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [currentPath])

    const link = `/oruzhie-v-tire/type?catalog=${transliterate(oruzhie.urlTyr || '',false)}`

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item"><a href={link}>{transliterate(oruzhie?.urlTyr || '',true)}</a></li>
                                <li className="breadcrumb-item active">{oruzhie?.gunResponse?.name}</li>
                            </ol>
                        </nav>
                        <div className="base-card">
                            <img src={"data:image/" + oruzhie?.url?.split('.')[1] + ";base64," + oruzhie?.file} className="float-left p-2" alt={oruzhie?.gunResponse?.name}/>
                            <h1>{oruzhie?.gunResponse?.name}</h1>
                            <div className="text-justify">
                                <p align="justify">{oruzhie?.gunResponse?.description}</p>
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