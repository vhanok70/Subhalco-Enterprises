
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Phone,
  Mail
} from "lucide-react";

const PHONE = "+917702310750";
const EMAIL = "info@subhalco.com";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <>
      <div className="topbar">
        <span>
          INDUSTRIAL METALS & COMMODITIES · KURNOOL, INDIA
        </span>

        <div>
          <a href={`tel:${PHONE}`}>
            <Phone size={13} /> +91 77023 10750
          </a>

          <a href={`mailto:${EMAIL}`}>
            <Mail size={13} /> {EMAIL}
          </a>
        </div>
      </div>

      <header className="header">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-icon">S</span>

          <span className="brand-name">
            <strong>SUBHALCO</strong>
            <small>ENTERPRISES</small>
          </span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>

        <nav className={menu ? "nav nav-open" : "nav"}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            Company
          </NavLink>

          <div className="nav-dropdown">
            <Link to="/products">
              Products <ChevronDown size={13} />
            </Link>

            <div className="dropdown-panel">
              <Link to="/products" onClick={closeMenu}>
                Aluminium Ingots
              </Link>
              <Link to="/products" onClick={closeMenu}>
                Aluminium Billets
              </Link>
              <Link to="/products" onClick={closeMenu}>
                Copper Products
              </Link>
              <Link to="/products" onClick={closeMenu}>
                Non-Ferrous Metals
              </Link>
            </div>
          </div>

          <NavLink to="/industries" onClick={closeMenu}>
            Industries
          </NavLink>

          <NavLink to="/quality" onClick={closeMenu}>
            Quality
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <Link className="header-button" to="/contact">
          SALES ENQUIRY <ArrowUpRight size={15} />
        </Link>
      </header>
    </>
  );
}
