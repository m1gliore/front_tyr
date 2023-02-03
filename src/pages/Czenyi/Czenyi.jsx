import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";

const Czenyi = () => {
    const [prices, setPrices] = useState([])

    useEffect(() => {
        // (async () => {
        //     try {
        //         const response = await axios.get('')
        //         setImages(response.data)
        //     } catch (e) {
        //
        //     }
        // })()
        setPrices(
            [{
                "id": 1,
                "title": "Пневматический тир (10 выстрелов)",
                "quantity": 4
            },
                {
                    "id": 2,
                    "title": "Страйкбольный тир (20 выстрелов)",
                    "quantity": 6
                },
                {
                    "id": 3,
                    "title": "Лазерный тир (15 выстрелов)",
                    "quantity": 2
                },
                {
                    "id": 4,
                    "title": "Пристрелка страйкбольного привода",
                    "quantity": 9
                },
                {
                    "id": 5,
                    "title": "Пристрелка пневматики",
                    "quantity": 9
                },
                {
                    "id": 6,
                    "title": "Аренда тира (со своим оружием), 30 минут",
                    "quantity": 25
                }
            ])
    }, [])

    return (
        <>
            <Navbar/>
            <main role="main">
                <section className="base">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Главная</a></li>
                                <li className="breadcrumb-item active">Цены</li>
                            </ol>
                        </nav>
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
                                {prices.map((price) =>
                                    <tr className="tr-href">
                                        <td>{price.title}</td>
                                        <td className="price-cell-price">от&nbsp;{price.quantity}&nbsp;руб.</td>
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