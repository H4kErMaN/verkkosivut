import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import {
  company,
  visionCases,
  visionIntro,
  visionScope,
} from '../data/content'
import './Subpage.css'

const CaseCard = ({ item }) => (
  <article className="card">
    <span className="card__tag">{item.tag}</span>
    <h3 className="card__name">{item.name}</h3>
    <p className="card__description">{item.description}</p>
  </article>
)

const KonenakoPage = () => (
  <>
    <a className="skip-link" href="#sisalto">
      Siirry sisältöön
    </a>

    <Header company={company} home="index.html" current="konenako" />

    <main id="sisalto">
      <PageHero label="Palvelut" title="Konenäkö" lead={visionIntro}>
        <div className="page-hero__actions">
          <a href="index.html#tarjouspyynto" className="button button--primary">
            Pyydä tarjous
          </a>
          <a href="index.html#palvelut" className="button button--ghost">
            Kaikki palvelut
          </a>
        </div>
      </PageHero>

      <section className="section" id="sovelluskohteet">
        <div className="container">
          <p className="section__label">Sovelluskohteet</p>
          <h2 className="section__title">
            Mihin konenäköä käytetään tuotannossa
          </h2>
          <p className="section__lead">
            Sama järjestelmä voi sekä tarkastaa laadun että mitata kappaleen —
            laajuus ratkaistaan aina kohteen mukaan.
          </p>

          <div className="cards">
            {visionCases.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="toteutus">
        <div className="container">
          <p className="section__label">Toteutus</p>
          <h2 className="section__title">Kartoituksesta tuotantoon</h2>

          <ol className="scope">
            {visionScope.map((item, index) => (
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
            <h2 className="section__title">Onko sinulla tarkastettavaa?</h2>
            <p className="section__lead">
              Kerro mitä kappaletta tarkastetaan tai mitataan ja millä
              tahdilla linja käy, niin katsotaan sopiva toteutus.
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

export default KonenakoPage
