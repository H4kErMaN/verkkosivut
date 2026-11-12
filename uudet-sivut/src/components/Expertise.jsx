import './Expertise.css'

const steps = [
  {
    id: 'maarittely',
    title: 'Määrittely',
    text: 'Käydään tarve läpi, kartoitetaan vaatimukset ja rajataan työ.',
  },
  {
    id: 'toteutus',
    title: 'Toteutus',
    text: 'Suunnittelu, laitevalinnat ja ohjelmistot — tarvittaessa kumppaneiden kanssa.',
  },
  {
    id: 'kayttoonotto',
    title: 'Käyttöönotto',
    text: 'Asennus, kalibrointi ja käyttäjien perehdytys tuotantoympäristössä.',
  },
  {
    id: 'tuki',
    title: 'Tuki',
    text: 'Ylläpito ja jatkokehitys silloin kun tuotanto muuttuu.',
  },
]

const Expertise = () => (
  <section className="section" id="osaaminen">
    <div className="container expertise">
      <div className="expertise__intro">
        <p className="section__label">Osaaminen</p>
        <h2 className="section__title">Koneohjaukset logiikalla</h2>
        <p className="section__lead">
          Exuplan toteuttaa eri aloille sopivia logiikkaohjelmistoja. Laajojen
          hankkeiden toteutuksessa käytämme tarvittaessa apuna
          yhteistyökumppaneitamme. Meillä on myös kokemusta kiinteistöjen
          ohjauksista nykyaikaisen logiikka- ja anturiteknologian avulla.
        </p>
        <a href="#tarjouspyynto" className="button button--ghost">
          Keskustellaan hankkeestasi
        </a>
      </div>

      <ol className="expertise__steps">
        {steps.map((step, index) => (
          <li key={step.id} className="expertise__step">
            <span className="expertise__number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="expertise__step-title">{step.title}</h3>
              <p className="expertise__step-text">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default Expertise
