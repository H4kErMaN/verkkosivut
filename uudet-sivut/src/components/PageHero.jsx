import './PageHero.css'

// Alasivujen yhteinen yläosa. Etusivun Hero on isompi; tämä on sama
// tyyli matalampana, jotta alasivuilla päästään nopeammin asiaan.
const PageHero = ({ label, title, lead, children }) => (
  <section className="page-hero" id="top">
    <div className="page-hero__glow" aria-hidden="true" />

    <div className="container page-hero__inner">
      <nav className="page-hero__crumbs" aria-label="Murupolku">
        <a href="index.html">Etusivu</a>
        <span aria-hidden="true">/</span>
        <span>{title}</span>
      </nav>

      <p className="section__label">{label}</p>
      <h1 className="page-hero__title">{title}</h1>
      <p className="page-hero__lead">{lead}</p>

      {children}
    </div>
  </section>
)

export default PageHero
