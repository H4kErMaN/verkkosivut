import logoKuva from '../assets/exuplan-logo-valkoinen.png'
import './Logo.css'

// Alkuperäinen logo on mustalla tekstillä, joten siitä on tehty
// vaalea versio tummaa taustaa varten (src/assets). Punainen kaari ja
// Measuring Automation -alateksti ovat alkuperäisen mukaiset.
const Logo = ({ company }) => (
  <img
    className="logo"
    src={logoKuva}
    alt={`${company.name} — ${company.tagline}`}
    width="633"
    height="187"
  />
)

export default Logo
