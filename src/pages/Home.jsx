
import { motion } from "framer-motion";
import {
  Factory,
  Boxes,
  Handshake,
  MapPin,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-background" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <Reveal>
            <span className="hero-tag">
              SUBHALCO ENTERPRISES · INDIA
            </span>

            <h1>
              Industrial metals
              <br />
              for <em>business growth.</em>
            </h1>

            <p>
              A domestic industrial metals and commodities business
              engaged in the commercial purchase and sale of aluminium,
              copper and selected non-ferrous materials.
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="btn-main">
                EXPLORE PRODUCTS <ArrowRight size={16} />
              </Link>

              <Link to="/about" className="btn-light">
                ABOUT SUBHALCO <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="hero-bottom">
          <span>METALS & INDUSTRIAL MATERIALS</span>
          <span>ANDHRA PRADESH · INDIA</span>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight">
          <Factory />
          <div>
            <h3>Industrial Focus</h3>
            <p>Metal and material categories</p>
          </div>
        </div>

        <div className="highlight">
          <Boxes />
          <div>
            <h3>Product Portfolio</h3>
            <p>Aluminium, copper and more</p>
          </div>
        </div>

        <div className="highlight">
          <Handshake />
          <div>
            <h3>Commercial Business</h3>
            <p>Buying and selling of materials</p>
          </div>
        </div>

        <div className="highlight">
          <MapPin />
          <div>
            <h3>Based in Kurnool</h3>
            <p>Andhra Pradesh, India</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-kicker">EXPLORE SUBHALCO</div>
        <h2>Industrial materials. Professional business.</h2>
        <p>
          Discover our company, product categories and industrial
          business activities.
        </p>

        <div className="page-grid">
          <article>
            <h3>About Subhalco</h3>
            <p>Learn about our company and business approach.</p>
            <Link to="/about">ABOUT US →</Link>
          </article>

          <article>
            <h3>Our Products</h3>
            <p>Explore aluminium, copper and non-ferrous metals.</p>
            <Link to="/products">VIEW PRODUCTS →</Link>
          </article>

          <article>
            <h3>Contact Us</h3>
            <p>Discuss your industrial material requirements.</p>
            <Link to="/contact">CONTACT US →</Link>
          </article>
        </div>
      </section>
    </>
  );
}
