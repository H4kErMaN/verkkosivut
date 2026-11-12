import { useState } from 'react'
import { useField } from '../hooks/useField'
import './Contact.css'

const Contact = ({ company }) => {
  const name = useField()
  const email = useField('email')
  const message = useField()
  const [status, setStatus] = useState(null)

  const resetForm = () => {
    name.reset()
    email.reset()
    message.reset()
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      setStatus({ type: 'error', text: 'Täytä kaikki kentät.' })
      return
    }

    // Staattisella webhotellilla ei ole palvelinta lomakkeen
    // vastaanottamiseen, joten viesti avataan sähköpostiohjelmaan.
    // Oikeassa toteutuksessa tilalle tulee backend tai lomakepalvelu.
    const subject = encodeURIComponent(`Tarjouspyyntö — ${name.value}`)
    const body = encodeURIComponent(
      `${message.value}\n\n---\n${name.value}\n${email.value}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`

    setStatus({
      type: 'success',
      text: 'Viesti avattiin sähköpostiohjelmaasi. Lähetä se vielä sieltä.',
    })
    resetForm()
  }

  return (
    <section className="section" id="tarjouspyynto">
      <div className="container contact">
        <div className="contact__info">
          <p className="section__label">Yhteystiedot</p>
          <h2 className="section__title">Kerro hankkeestasi</h2>
          <p className="section__lead">
            Vastaamme tarjouspyyntöihin ja kysymyksiin yleensä saman
            arkipäivän aikana.
          </p>

          <div className="contact__details" id="yhteystiedot">
            <p>
              <span className="contact__label">Sähköposti</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <span className="contact__label">Puhelin</span>
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </p>
            <p>
              <span className="contact__label">Yrittäjä</span>
              {company.contactPerson}
            </p>
            <p>
              <span className="contact__label">Osoite</span>
              {company.street}
              <br />
              {company.postal}
            </p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3 className="contact__form-title">Tarjouspyyntö</h3>

          <label className="field">
            <span className="field__label">Nimi</span>
            <input {...name.inputProps} name="nimi" autoComplete="name" />
          </label>

          <label className="field">
            <span className="field__label">Sähköposti</span>
            <input
              {...email.inputProps}
              name="sahkoposti"
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span className="field__label">Viesti</span>
            <textarea
              value={message.value}
              onChange={message.inputProps.onChange}
              name="viesti"
              rows={5}
              placeholder="Kuvaile lyhyesti mitä olet toteuttamassa."
            />
          </label>

          {status && (
            <p
              className={
                status.type === 'error'
                  ? 'contact__status contact__status--error'
                  : 'contact__status contact__status--success'
              }
              role="status"
            >
              {status.text}
            </p>
          )}

          <button type="submit" className="button button--primary">
            Lähetä tarjouspyyntö
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
