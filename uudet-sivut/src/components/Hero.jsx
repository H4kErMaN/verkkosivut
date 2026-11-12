import './Hero.css'

const Hero = ({ stats }) => (
  <section className="hero" id="top">
    <div className="hero__glow" aria-hidden="true" />
    <div className="hero__grid" aria-hidden="true" />

    <div className="container hero__inner">
      <p className="hero__eyebrow">Mittaus · Konenäkö · Automaatio</p>

      <h1 className="hero__title">
        Mittauksen ja automaation asiantuntija
        <span className="hero__title-accent">
          {' '}
          usean vuosikymmenen kokemuksella
        </span>
      </h1>

      <p className="hero__lead">
        Exuplan suunnittelee ja toteuttaa teollisuuden mittaus-, konenäkö- ja
        automaatioratkaisut esiselvityksestä käyttöönottoon — tarvittaessa
        yhteistyökumppaneiden kanssa myös laajoissa hankkeissa.
      </p>

      <div className="hero__actions">
        <a href="#tarjouspyynto" className="button button--primary">
          Pyydä tarjous
        </a>
        <a href="#palvelut" className="button button--ghost">
          Tutustu palveluihin
        </a>
      </div>

      <dl className="hero__stats">
        {stats.map((stat) => (
          <div key={stat.id} className="hero__stat">
            <dt className="hero__stat-value">{stat.value}</dt>
            <dd className="hero__stat-label">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default Hero
