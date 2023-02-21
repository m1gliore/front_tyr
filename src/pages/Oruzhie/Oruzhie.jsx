import {useEffect, useState} from "react";
import {transliterate} from "../../myLibrary";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../../requestMethods";

const Oruzhie = () => {

    const currentPath = useLocation().pathname.split('/')[2]
    const [oruzhie, setOruzhie] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await publicRequest.get(`http://localhost:8040/api/homePage/getOneGun/${transliterate(currentPath, true)}`)
                setOruzhie(response.data)
            } catch (e) {
                alert(e)
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
                            <img src={"data:image/" + oruzhie?.url?.split('.')[1] + ";base64," + oruzhie?.file}
                                 className="float-left p-2" alt={oruzhie?.gunResponse?.name}/>
                            <h1>{oruzhie?.gunResponse?.name}</h1>
                            <div className="text-justify">
                                <p align="justify">{oruzhie?.gunResponse?.description}</p>
                            </div>
                            <h1>{oruzhie?.gunResponse?.firstIconTitle}</h1>
                            <div className="text-justify">
                                <p align="justify">{oruzhie?.gunResponse?.firstIconDesc}</p>
                            </div>
                            <h1>{oruzhie?.gunResponse?.secondIconTitle}</h1>
                            <div className="text-justify">
                                <p align="justify">{oruzhie?.gunResponse?.secondIconDesc}</p>
                            </div>
                            <h1>{oruzhie?.gunResponse?.thirdIconTitle}</h1>
                            <div className="text-justify">
                                <p align="justify">{oruzhie?.gunResponse?.thirdIconDesc}</p>
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