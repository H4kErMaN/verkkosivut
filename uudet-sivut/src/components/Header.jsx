import { useState } from 'react'
import Logo from './Logo'
import { subpages } from '../data/content'
import './Header.css'

// home = polku etusivulle. Etusivulla '' (ankkurit toimivat suoraan),
// alasivulla 'index.html' (ankkuri vaatii sivun nimen).
// current = sivun tunnus, jolla valikon kohta merkitään aktiiviseksi.
const navLinks = (home) => [
  { id: 'palvelut', href: `${home}#palvelut`, label: 'Palvelut' },
  ...subpages,
  { id: 'osaaminen', href: `${home}#osaaminen`, label: 'Osaaminen' },
  { id: 'yhteystiedot', href: `${home}#yhteystiedot`, label: 'Yhteystiedot' },
]

const Header = ({ company, home = '', current = 'etusivu' }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const links = navLinks(home)

  return (
    <header className="header">
      <div className="container header__inner">
        <a
          href={home === '' ? '#top' : home}
          className="header__brand"
          onClick={closeMenu}
        >
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
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={current === link.id ? 'header__link--active' : undefined}
                  aria-current={current === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${home}#tarjouspyynto`}
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
