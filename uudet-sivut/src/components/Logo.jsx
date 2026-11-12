import './Logo.css'

// Alkuperäinen PNG-logo on mustalla tekstillä eikä erotu tummalta
// taustalta, joten tunnus ladotaan tekstinä. Punainen korostus on
// X-kirjaimessa, jonka läpi logon kaari alkuperäisessä kulkee.
const Logo = ({ company }) => (
  <span className="logo" aria-label={`${company.name} ${company.tagline}`}>
    <span className="logo__name">
      E<span className="logo__x">X</span>UPLAN
    </span>
    <span className="logo__tagline">{company.tagline}</span>
  </span>
)

export default Logo
