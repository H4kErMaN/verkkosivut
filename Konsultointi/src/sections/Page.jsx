import { feature, fixes } from "../sidedata.js";
import "./Page.css";

function Page() {
    return (
        <>
            <section className="page-section">
                <h2>Miksi ulkopuolinen asiantuntija?</h2>
                <div className="section-content">
                    <p className="väli">
                        Oman alan tietotaidon lisäksi kannattaa usein käyttää ulkopuolista 
                        asiantuntemusta, kun suunnitellaan tai toteutetaan automaatiota sisältäviä 
                        projekteja. Näin projektiin tulee näkemystä oman organisaation ulkopuolelta, 
                        jolloin lopputuloksesta tulee yleensä toimivampi.
                    </p>
                    <p className="väli">
                        Exuplan voi olla mukana asiakkaan puolen asiantuntijana, kun käynnistetään 
                        ostettua automaatiota sisältävää laitosta tai konetta. Pystymme varmistumaan 
                        toimituksen ja saatavan dokumentaation laadukkuudesta.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <h2>Mitä konsultointi sisältää</h2>
                <div className="section-content">
                    <ul>
                        {fixes.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="page-section">
                <h2>Hyöty asiakkaalle</h2>
                <div className="section-content">
                    <p>
                        Konsultoinnin avulla voidaan varmistaa, että järjestelmä toimii luotettavammin 
                        koko elinkaarensa ajan. Asiakkaan ei tarvitse yksin kantaa vastuuta 
                        monimutkaisten automaatiojärjestelmien vastaanottamisesta — Exuplan on 
                        tukenasi koko prosessin ajan.
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
