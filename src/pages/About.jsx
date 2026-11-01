
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page">
      <section className="inner-hero">
        <p>ABOUT SUBHALCO</p>
        <h1>Our Company</h1>
        <p>
          A domestic industrial metals trading enterprise
          focused on business relationships and material requirements.
        </p>
      </section>

      <section className="page-section">
        <h2>Who We Are</h2>
        <p>
          Subhalco Enterprises is an India-based sole proprietorship
          engaged in the domestic trading of industrial metals and
          non-ferrous materials.
        </p>
        <p>
          We aim to understand customer requirements, communicate
          product specifications clearly and support professional
          business transactions.
        </p>
      </section>

      <section className="page-section page-grid">
        <article>
          <h3>Our Vision</h3>
          <p>
            To build a trusted presence in India's industrial
            metals trading sector.
          </p>
        </article>

        <article>
          <h3>Our Mission</h3>
          <p>
            To serve industrial material requirements through
            transparent communication and dependable business practices.
          </p>
        </article>
      </section>

      <section className="page-section">
        <h2>Our Business</h2>
        <p>
          Our product interests include aluminium ingots, aluminium
          billets, copper materials and other non-ferrous metals.
        </p>
        <Link to="/products">Explore Our Products →</Link>
      </section>
    </main>
  );
}
