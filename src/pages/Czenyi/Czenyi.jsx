import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

const Czenyi = () => {
    const [costs, setCosts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8040/api/homePage/getPriceCatalog')
                setCosts(response.data)
            } catch (e) {

            }
        })()

    }, [])

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <div className="base-card">
                            <h1>Цены</h1>
                            <div className="text-justify bg-gray text-danger p-3 mt-3 mb-3">
                                <p align="justify">У нас самый большой выбор оружия среди подобных тиров в Минске. Все
                                    новое, пристрелянное. И самые низкие цены на типовую пневматику, страйкбольные
                                    автоматы и пистолеты. Можете проверить! Минимальный бюджет на посетителя: 2 рубля.
                                    Оптимальный (для желающих хорошо отдохнуть): 30-60 руб. на человека. При этом для
                                    настоящих ценителей мы предлагаем редкие, очень интересные вещи по индивидуальным
                                    расценкам. Обязательный инструктаж и начальное для новичков обучение - бесплатно.
                                    Звоните, если что-то не очень понятно.</p>
                            </div>
                            <table className="table table-sm price-table">
                                <tbody>
                                {costs.map((cost) =>
                                    <tr key={cost.nameService} className="tr-href">
                                        <td>{cost.nameService}</td>
                                        <td className="price-cell-price">от&nbsp;{cost.price}&nbsp;руб.</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Czenyi