import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import mittariKuva from '../assets/mittari-3d.jpg'
import heroKuva from '../assets/hero-mittarit.jpg'
import {
  company,
  gaugesIntro,
  logGauges,
  logGaugesNote,
  lumberGauges,
  lumberGaugesNote,
  sawVisionApps,
  sawlineSteps,
} from '../data/content'
import './Subpage.css'

const GaugeCard = ({ gauge }) => (
  <article className="card">
    <span className="card__tag">{gauge.tag}</span>
    <h3 className="card__name">{gauge.name}</h3>
    <p className="card__description">{gauge.description}</p>
  </article>
)

const MittaritPage = () => (
  <>
    <a className="skip-link" href="#sisalto">
      Siirry sisältöön
    </a>

    <Header company={company} home="index.html" current="mittarit" />

    <main id="sisalto">
      <PageHero
        label="Mekaaninen metsäteollisuus"
        title="Mittarit"
        lead={gaugesIntro}
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

      <section className="section" id="tukkimittarit">
        <div className="container">
          <p className="section__label">Tukki- ja pelkkamittarit</p>
          <h2 className="section__title">Kaksi mittaria linjan nopeuden mukaan</h2>

          <div className="cards">
            {logGauges.map((gauge) => (
              <GaugeCard key={gauge.id} gauge={gauge} />
            ))}
          </div>

          <p className="note">{logGaugesNote}</p>

          <figure className="figure">
            <div className="figure__media">
              <img
                src={mittariKuva}
                alt="Tukkimittarin 3D-malli: runko, kamerat ja lasertasot"
              />
            </div>
            <figcaption className="figure__caption">
              Tukkimittarin 3D-malli. Kuvassa näkyvät mittauskehikko,
              kameroiden sijoitus ja lasertasojen kulmat.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="sahatavara">
        <div className="container">
          <p className="section__label">Sahatavaran mittaus</p>
          <h2 className="section__title">
            Dimensiolajittelulaitoksille valmistamme
          </h2>

          <div className="cards">
            {lumberGauges.map((gauge) => (
              <GaugeCard key={gauge.id} gauge={gauge} />
            ))}
          </div>

          <p className="note">{lumberGaugesNote}</p>
        </div>
      </section>

      <section className="section" id="konenakosovellukset">
        <div className="container">
          <p className="section__label">Konenäkösovellukset</p>
          <h2 className="section__title">
            Videokuvaan perustuvia ratkaisuja tuotannon eri vaiheisiin
          </h2>

          <ul className="speclist">
            {sawVisionApps.map((sovellus) => (
              <li key={sovellus}>{sovellus}</li>
            ))}
          </ul>

          <p className="note">
            Lue lisää <a href="konenako.html">konenäköratkaisuista</a>.
          </p>
        </div>
      </section>

      <section className="section" id="sahalinjat">
        <div className="container">
          <p className="section__label">Sahalinjojen suunnittelu ja toteutus</p>
          <h2 className="section__title">
            Hoidamme myös linjan toteutuksen vaiheet
          </h2>

          <ol className="scope">
            {sawlineSteps.map((vaihe, index) => (
              <li key={vaihe.id} className="scope__item">
                <span className="scope__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="scope__title">{vaihe.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="cta">
        <div className="container cta">
          <div>
            <h2 className="section__title">Mitä linjallasi mitataan?</h2>
            <p className="section__lead">
              Kerro linjan nopeus ja mitattava kohde, niin ehdotamme sopivaa
              mittaria — tai koko linjan toteutusta.
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

export default MittaritPage
