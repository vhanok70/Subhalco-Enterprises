
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="brand footer-logo">
            <span className="brand-mark">S</span>
            <span>
              <strong>SUBHALCO</strong>
              <small>ENTERPRISES</small>
            </span>
          </Link>

          <p>
            A domestic industrial metals trading enterprise
            focused on aluminium, copper and non-ferrous materials.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h3>Product Categories</h3>
          <Link to="/products">Aluminium Ingots</Link>
          <Link to="/products">Aluminium Billets</Link>
          <Link to="/products">Copper Cathodes</Link>
          <Link to="/products">Copper Millberry</Link>
          <Link to="/products">Non-Ferrous Metals</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Information</h3>

          <p>
            <Phone size={17} />
            <a href="tel:+917702310750">+91 77023 10750</a>
          </p>

          <p>
            <Mail size={17} />
            <a href="mailto:info@subhalco.com">
              info@subhalco.com
            </a>
          </p>

          <p>
            <MapPin size={17} />
            87/1108, Somsitty Nagar, Near Mother Land,
            Kurnool – 518002, Andhra Pradesh, India.
          </p>

          <Link to="/contact" className="footer-enquiry">
            Send an Enquiry <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Subhalco Enterprises.
          All Rights Reserved.
        </p>
        <p>India</p>
      </div>
    </footer>
  );
}
