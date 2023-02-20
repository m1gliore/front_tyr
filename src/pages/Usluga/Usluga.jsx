import {useEffect, useState} from "react";
import {transliterate} from "../../myLibrary";
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

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
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