import { useState } from 'react'
import Logo from './Logo'
import './Header.css'

const links = [
  { href: '#palvelut', label: 'Palvelut' },
  { href: '#osaaminen', label: 'Osaaminen' },
  { href: '#yhteystiedot', label: 'Yhteystiedot' },
]

const Header = ({ company }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={closeMenu}>
          <Logo company={company} />
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="paavalikko"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__toggle-bars" aria-hidden="true" />
          {menuOpen ? 'Sulje' : 'Valikko'}
        </button>

        <nav
          id="paavalikko"
          className={menuOpen ? 'header__nav header__nav--open' : 'header__nav'}
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#tarjouspyynto"
                className="button button--primary header__cta"
                onClick={closeMenu}
              >
                Pyydä tarjous
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
