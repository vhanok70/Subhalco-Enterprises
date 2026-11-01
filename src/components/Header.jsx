
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>
            <strong>SUBHALCO</strong>
            <small>ENTERPRISES</small>
          </span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <NavLink to="/" end className={navClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass} onClick={closeMenu}>
            About Us
          </NavLink>

          <div className="nav-dropdown">
            <NavLink to="/products" className={navClass} onClick={closeMenu}>
              Products <ChevronDown size={14} />
            </NavLink>
            <div className="dropdown-menu">
              <Link to="/products" onClick={closeMenu}>Aluminium</Link>
              <Link to="/products" onClick={closeMenu}>Copper</Link>
              <Link to="/products" onClick={closeMenu}>Non-Ferrous Metals</Link>
            </div>
          </div>

          <NavLink to="/industries" className={navClass} onClick={closeMenu}>
            Industries
          </NavLink>

          <NavLink to="/quality" className={navClass} onClick={closeMenu}>
            Quality
          </NavLink>

          <NavLink to="/contact" className="nav-contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
