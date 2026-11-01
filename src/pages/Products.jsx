
import { Link } from "react-router-dom";

const products = [
  {
    category: "ALUMINIUM",
    name: "Aluminium Ingots",
    grades: "A7 and ADC12",
    description:
      "Aluminium ingots for industrial applications, casting and manufacturing requirements."
  },
  {
    category: "ALUMINIUM",
    name: "Aluminium Billets",
    grades: "6063",
    description:
      "Aluminium billets for extrusion and other industrial processing applications."
  },
  {
    category: "COPPER",
    name: "Copper Cathodes",
    grades: "Copper cathode",
    description:
      "Copper cathode materials for industrial and metal processing requirements."
  },
  {
    category: "COPPER",
    name: "Copper Millberry",
    grades: "Copper scrap",
    description:
      "Copper scrap material for recycling and secondary metal processing."
  },
  {
    category: "NON-FERROUS METALS",
    name: "Other Metal Materials",
    grades: "Subject to availability",
    description:
      "Additional non-ferrous metal materials based on specific business requirements."
  }
];

export default function Products() {
  return (
    <main className="page">
      <section className="inner-hero">
        <p>OUR PRODUCT PORTFOLIO</p>
        <h1>Industrial Metal Products</h1>
        <p>
          Exploring domestic business requirements across
          aluminium, copper and non-ferrous metals.
        </p>
      </section>

      <section className="page-section">
        <h2>Our Products</h2>
        <p>
          Explore our product categories and their relevant
          industrial applications.
        </p>

        <div className="page-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <strong>{product.grades}</strong>
              <p>{product.description}</p>
              <Link to="/contact">Send an Enquiry →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Looking for a Specific Material?</h2>
        <p>
          Contact our team with your required grade,
          specification and quantity.
        </p>
        <Link to="/contact" className="primary-button">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
