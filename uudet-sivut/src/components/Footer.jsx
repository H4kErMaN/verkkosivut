import Logo from './Logo'
import './Footer.css'

const Footer = ({ company }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <Logo company={company} />
        <p className="footer__blurb">
          Mittauksen ja automaation asiantuntija Mikkelistä. Palvelemme koko
          Suomessa.
        </p>
      </div>

      <div className="footer__grid">
        <div>
          <h4 className="footer__heading">Yritys</h4>
          <p>
            {company.name}
            <br />
            {company.street}
            <br />
            {company.postal}
          </p>
        </div>
        <div>
          <h4 className="footer__heading">Laskutustiedot</h4>
          <p>
            Y-tunnus: {company.businessId}
            <br />
            VAT: {company.vat}
            <br />
            Kotipaikka: {company.domicile}
          </p>
        </div>
        <div>
          <h4 className="footer__heading">Verkkolaskut</h4>
          <p>
            OVT-tunnus: {company.evoucher}
            <br />
            Välittäjä: {company.broker}
          </p>
        </div>
        <div>
          <h4 className="footer__heading">Pankkiyhteys</h4>
          <p>
            {company.bank}
            <br />
            IBAN: {company.iban}
          </p>
        </div>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} {company.name} — Kaikki oikeudet
        pidätetään
      </p>
    </div>
  </footer>
)

export default Footer
