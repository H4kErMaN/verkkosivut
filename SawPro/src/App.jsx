import * as React from "react";
import Header from "./components/Header.jsx";
import { browserBenefits, features } from "./sidedata.js";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <div className="hero">
                    <h1>SawPro</h1>
                    <p className="hero-lead">
                        Sahateollisuuden tuotannonhallintajärjestelmä — koko tuotantoketju
                        yhdessä selkeässä työkalussa.
                    </p>
                </div>

                <section className="page-section">
                    <h2>Mikä on SawPro?</h2>
                    <div className="section-content">
                        <p>
                            SawPro on sahateollisuuden tarpeisiin alusta loppuun suunniteltu tuotannonhallintajärjestelmä,
                            joka kattaa koko tuotantoketjun asiakkaista sopimuksiin, varastosta laskutukseen ja edelleen
                            kattavaan raportointiin. Järjestelmä yhdistää sen, mikä yleensä joutuu hajaantumaan useiden
                            eri ohjelmien välille — yksi selkeä työkalu, joka pitää koko sahan toiminnan hallinnassa.
                        </p>
                    </div>
                </section>

                <section className="page-section">
                    <h2>Mitä SawPro kattaa</h2>
                    <div className="section-content">
                        <ul className="coverage-list">
                            {features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="page-section">
                    <h2>Selainpohjainen — toimii kaikkialla</h2>
                    <div className="section-content">
                        <p>
                            Sovellus toimii selainpohjaisesti, joten käyttö onnistuu sekä toimiston työasemilta että
                            hallin tableteilta — ilman erillistä asennusta. Päivitykset tulevat automaattisesti eikä
                            IT-ylläpitoa tarvita laitteiden osalta.
                        </p>
                        <ul className="coverage-list">
                            {browserBenefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;
