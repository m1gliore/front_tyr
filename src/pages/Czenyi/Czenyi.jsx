import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Czenyi = () => {
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
                                <tr className="tr-href" tr-href="https://tir-centr.by/oruzhie-v-tire/pnevmatika">
                                    <td>Пневматический тир (10 выстрелов)</td>
                                    <td className="price-cell-price">от&nbsp;4&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/oruzhie-v-tire/strajkbol">
                                    <td>Страйкбольный тир (20 выстрелов)</td>
                                    <td className="price-cell-price">от&nbsp;6&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/oruzhie-v-tire/lazernoe">
                                    <td>Лазерный тир (15 выстрелов)</td>
                                    <td className="price-cell-price">от&nbsp;2&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/osnovnyie-uslugi-tira/pristrelka-strajkbolnogo-privoda">
                                    <td>Пристрелка страйкбольного привода</td>
                                    <td className="price-cell-price">от&nbsp;9&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/osnovnyie-uslugi-tira/pristrelka-pnevmatiki">
                                    <td>Пристрелка пневматики</td>
                                    <td className="price-cell-price">от&nbsp;9&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/osnovnyie-uslugi-tira/arenda-tira-v-minske">
                                    <td>Аренда тира (со своим оружием), 30 минут</td>
                                    <td className="price-cell-price">от&nbsp;25&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/osnovnyie-uslugi-tira/izmerenie-dulnoj-energii">
                                    <td>Измерение дульной энергии</td>
                                    <td className="price-cell-price">от&nbsp;10&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/obuchenie-i-kursyi-strelbyi">
                                    <td>Обучение и курсы стрельбы</td>
                                    <td className="price-cell-price">от&nbsp;90&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/obuchenie-i-kursyi-strelbyi/sorevnovaniya-po-strelbe">
                                    <td>Соревнования по стрельбе (чел.)</td>
                                    <td className="price-cell-price">от&nbsp;10&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/uslugi/yuridicheskim-liczam">
                                    <td>Юридическим лицам (корпоративы, тимбилдинг), на человека</td>
                                    <td className="price-cell-price">от&nbsp;30&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/razvlecheniya-dlya-vsej-semi">
                                    <td>Семейный досуг и ДР, на человека</td>
                                    <td className="price-cell-price">от&nbsp;30&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/uslugi/podarochnyie-sertifikatyi">
                                    <td>Подарочные сертификаты</td>
                                    <td className="price-cell-price">от&nbsp;30&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/uslugi/poznanie-i-razvitie">
                                    <td>Экскурсии и лекции, музей оружия (от 2 ч., до 5 чел.)</td>
                                    <td className="price-cell-price">от&nbsp;40&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/uslugi/standartnyie-paketyi">
                                    <td>Стандартные пакеты услуг (при затруднениях с выбором, на человека)</td>
                                    <td className="price-cell-price">от&nbsp;10&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/osnovnyie-uslugi-tira/vyiezdnoj-tir-–-minsk-i-minskaya-oblast">
                                    <td>Выездной тир</td>
                                    <td className="price-cell-price">от&nbsp;40&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/osnovnyie-uslugi-tira/shimming-i-remont">
                                    <td>Шимминг и ремонт приводов</td>
                                    <td className="price-cell-price">от&nbsp;55&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/obuchenie-i-kursyi-strelbyi/sekcziya-strelbyi-dlya-detej">
                                    <td>Детская секция стрельбы (8 занятий)</td>
                                    <td className="price-cell-price">от&nbsp;240&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href"
                                    tr-href="https://tir-centr.by/uslugi/yuridicheskim-liczam/podgotovka-k-sorevnovaniyam-po-strelbe,-trenirovka-–-dlya-yuridicheskix-licz">
                                    <td>Юридическим лицам - подготовка к соревнованиям по стрельбе</td>
                                    <td className="price-cell-price">от&nbsp;190&nbsp;руб.</td>
                                </tr>
                                <tr className="tr-href" tr-href="https://tir-centr.by/oruzhie-v-tire/signalnoe-oruzhie">
                                    <td>Сигнальное оружие (1 выстрел)</td>
                                    <td className="price-cell-price">от&nbsp;3&nbsp;руб.</td>
                                </tr>
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