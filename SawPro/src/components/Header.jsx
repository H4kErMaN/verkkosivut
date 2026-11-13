import * as React from "react";
import { navigationLinks } from "../sidedata.js";

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuButton = React.useRef(null);

    React.useEffect(() => {
        if (!menuOpen) return undefined;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                menuButton.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [menuOpen]);

    return (
        <header className="site-header">
            <a href="https://exuplan.fi/index.html" aria-label="Exuplan - etusivu">
            </a>
            <button
                ref={menuButton}
                className="menu-toggle"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="main-nav"
                onClick={() => setMenuOpen((open) => !open)}
            >
                {menuOpen ? "Sulje" : "Valikko"}
            </button>
            <nav
                id="main-nav"
                className={menuOpen ? "is-open" : ""}
                aria-label="Päänavigaatio"
            >
                {navigationLinks.map(({ label, href }) => (
                    <a href={href} key={label} onClick={() => setMenuOpen(false)}>
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;