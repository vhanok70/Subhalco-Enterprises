
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const PHONE = "+917702310750";
const ALT_PHONE = "+919390100750";
const EMAIL = "info@subhalco.com";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-icon">S</span>
            <span className="brand-name">
              <strong>SUBHALCO</strong>
              <small>ENTERPRISES</small>
            </span>
          </Link>

          <p className="footer-description">
            Industrial Metals & Commodities
            <br />
            Kurnool, Andhra Pradesh, India.
          </p>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <Link to="/about">About us</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h4>PRODUCTS</h4>
          <Link to="/products">Aluminium Ingots</Link>
          <Link to="/products">Aluminium Billets</Link>
          <Link to="/products">Copper Products</Link>
          <Link to="/products">Non-Ferrous Metals</Link>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>
          <a href={`tel:${PHONE}`}>+91 77023 10750</a>
          <a href={`tel:${ALT_PHONE}`}>+91 93901 00750</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <Link to="/contact">
            Send an Enquiry <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} SUBHALCO ENTERPRISES.
          ALL RIGHTS RESERVED.
        </span>

        <span>KURNOOL · ANDHRA PRADESH · INDIA</span>

        <Link to="/">BACK TO HOME ↑</Link>
      </div>
    </footer>
  );
}
