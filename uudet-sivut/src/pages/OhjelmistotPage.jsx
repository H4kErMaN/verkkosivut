import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import heroKuva from '../assets/hero-ohjelmistot.jpg'
import {
  company,
  softwareIntro,
  softwareScope,
  softwareTools,
} from '../data/content'
import './Subpage.css'

const ToolCard = ({ tool }) => (
  <article className="card">
    <span className="card__tag">{tool.tag}</span>
    <h3 className="card__name">{tool.name}</h3>
    <p className="card__description">{tool.description}</p>
  </article>
)

const OhjelmistotPage = () => (
  <>
    <a className="skip-link" href="#sisalto">
      Siirry sisältöön
    </a>

    <Header company={company} home="index.html" current="ohjelmistot" />

    <main id="sisalto">
      <PageHero
        label="Palvelut"
        title="Ohjelmistot"
        lead={softwareIntro}
        photo={heroKuva}
      >
        <div className="page-hero__actions">
          <a href="index.html#tarjouspyynto" className="button button--primary">
            Pyydä tarjous
          </a>
          <a href="index.html#palvelut" className="button button--ghost">
            Kaikki palvelut
          </a>
        </div>
      </PageHero>

      <section className="section" id="tyokalut">
        <div className="container">
          <p className="section__label">Kehitystyökalut</p>
          <h2 className="section__title">
            Käytämme muun muassa näitä ohjelmistoja
          </h2>
          <p className="section__lead">
            Työkalu valitaan kohteen mukaan — sama järjestelmä voi sisältää
            sekä työasemasovelluksen että koneen logiikkaohjelman.
          </p>

          <div className="cards">
            {softwareTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="toteutus">
        <div className="container">
          <p className="section__label">Toteutus</p>
          <h2 className="section__title">Mitä ohjelmistot tekevät</h2>

          <ol className="scope">
            {softwareScope.map((item, index) => (
              <li key={item.id} className="scope__item">
                <span className="scope__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="scope__title">{item.title}</h3>
                  <p className="scope__text">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="cta">
        <div className="container cta">
          <div>
            <h2 className="section__title">Onko sinulla ohjelmistotarve?</h2>
            <p className="section__lead">
              Kerro lyhyesti mitä mitataan tai ohjataan, niin katsotaan
              toimivin toteutus. Vastaamme tarjouspyyntöihin nopeasti.
            </p>
          </div>
          <a href="index.html#tarjouspyynto" className="button button--primary">
            Pyydä tarjous
          </a>
        </div>
      </section>
    </main>

    <Footer company={company} />
  </>
)

export default OhjelmistotPage
