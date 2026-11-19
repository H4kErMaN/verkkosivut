import { tuotteet } from "../sidedata.js";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div>
                    <p>
                        Mittauksen ja automaation asiantuntija usean vuosikymmenen
                        kokemuksella.
                    </p>
                </div>

                <div>
                    <h2>Tuotteet</h2>
                    <ul>
                        {tuotteet.map(({ label, href }) => (
                            <li key={label}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Yhteystiedot</h2>
                    <ul className="contact-list">
                        <li>esa.kuvaja@exuplan.fi</li>
                        <li>+358 40 8227743</li>
                        <li><a href="https://www.exuplan.fi/">www.exuplan.fi</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Exuplan — Y-tunnus 2761330-9</p>
                <p>Mikkeli, Finland</p>
            </div>
        </footer>
    );
}

export default Footer;