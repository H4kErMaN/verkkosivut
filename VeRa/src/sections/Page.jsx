import { abbreviations, feature, fixes } from "../sidedata.js";
import "./Page.css";

function Page() {
    return (
        <>
            <section className="page-section">
                <h2>Mikä on VeRA?</h2>
                <div className="section-content">
                    <p className="väli">
                        VeRA on riskianalyysien laadintatyökalu teollisuuden funktionaalisen
                        turvallisuuden ammattilaisille. Se korvaa Excel- ja Word-pohjaisen
                        työnkulun selainpohjaisella, versiokontrolloidulla järjestelmällä, joka
                        noudattaa SFS-EN ISO 12100 / 14121-2 -menetelmää.
                    </p>
                    <p className="väli">
                        VeRA riskianalyysi on elävä dokumentti: se päivittyy konstruktion
                        muuttuessa, laajenee uusilla riskeillä ja tarkentuu kerros kerrokselta —
                        ilman että versiot hukkuvat tai viittaukset katkeavat.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <h2>Ongelma, jonka VeRA ratkaisee</h2>
                <div className="section-content">
                    <p>
                        Excel- ja Word-pohjaisessa työnkulussa riskianalyysin elävyys on samalla
                        sen heikkous:
                    </p>
                    <ul>
                        {fixes.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p>
                        VeRA korvaa tämän yhtenäisellä, tietokantapohjaisella järjestelmällä.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <h2>Menetelmä ja ominaisuudet</h2>
                <div className="section-content">
                    <p>
                        VeRA noudattaa SFS-EN ISO 12100 / 14121-2 -standardin mukaista
                        riskinarviointimenetelmää:
                    </p>
                    <ul className="coverage-list">
                        {abbreviations.map(({ abbreviation, meaning }) => (
                            <li className="abbreviation-item" key={abbreviation}>
                                <span className="abbreviation-label">{abbreviation}</span>
                                <span className="abbreviation-meaning">{meaning}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        Parametrit yhdistyvät automaattisesti riskiluokaksi (CL). Järjestelmä
                        tuottaa painokelpoiset PDF-raportit suoraan tietokannasta — aina
                        viimeisimmän version mukaisina.
                    </p>
                    <ul className="coverage-list">
                        {feature.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="esittely">
                <h2>Kiinnostaako VeRA?</h2>
                <p>Sovitaan esittely — näytetään miten VeRA toimii käytännössä.</p>
                <a href="https://exuplan.fi/tarjouspyynto.html">Pyydä esittely</a>
            </section>
        </>
    );
}

export default Page;
