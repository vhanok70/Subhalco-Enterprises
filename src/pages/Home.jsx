
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <p>SUBHALCO ENTERPRISES</p>
          <h1>Building Stronger Industrial Connections</h1>
          <p>
            Your domestic business partner for industrial metals
            and non-ferrous metal products.
          </p>
          <Link to="/products" className="primary-button">
            Explore Our Products
          </Link>
        </div>
      </section>

      <section className="page-section">
        <h2>Welcome to Subhalco Enterprises</h2>
        <p>
          We focus on the domestic trading of industrial metals
          and materials, connecting business requirements with
          suitable product specifications.
        </p>
        <Link to="/about">Discover Our Company →</Link>
      </section>

      <section className="page-section">
        <h2>Our Product Categories</h2>
        <div className="page-grid">
          <article><h3>Aluminium</h3><p>Ingots, billets and alloys.</p></article>
          <article><h3>Copper</h3><p>Copper cathodes and copper materials.</p></article>
          <article><h3>Non-Ferrous Metals</h3><p>Industrial metal products and materials.</p></article>
        </div>
        <Link to="/products">View All Products →</Link>
      </section>
    </main>
  );
}
