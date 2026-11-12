import './Services.css'

const ServiceCard = ({ service }) => (
  <article className="service">
    <h3 className="service__title">{service.title}</h3>
    <p className="service__description">{service.description}</p>
    <ul className="service__points">
      {service.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
)

const Services = ({ services }) => (
  <section className="section" id="palvelut">
    <div className="container">
      <p className="section__label">Palvelut</p>
      <h2 className="section__title">
        Koko ketju anturista valmiiseen järjestelmään
      </h2>
      <p className="section__lead">
        Toteutamme kokonaisuuksia ja yksittäisiä osia sen mukaan, mitä hanke
        vaatii. Kerro tarpeesi, niin katsotaan yhdessä toimivin ratkaisu.
      </p>

      <div className="services">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
)

export default Services
