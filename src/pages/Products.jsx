
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Aluminium Ingots",
    grades: "A7 · ADC12",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900",
    text: "Aluminium ingots for foundries, casting and industrial manufacturing."
  },
  {
    name: "Aluminium Billets",
    grades: "6063",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900",
    text: "Billet materials for extrusion and downstream industrial applications."
  },
  {
    name: "Copper Products",
    grades: "Cathodes · Millberry",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900",
    text: "Copper materials for industrial processing and electrical applications."
  },
  {
    name: "Non-Ferrous Metals",
    grades: "Selected grades · Scrap",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900",
    text: "Selected non-ferrous metal materials for commercial requirements."
  }
];

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

export default function Products() {
  return (
    <main className="subhalco">
      <section className="products section">
        <div className="section-kicker">OUR PRODUCT RANGE</div>

        <Reveal>
          <div className="section-title-row">
            <div>
              <span className="eyebrow">PRODUCT CATEGORIES</span>
              <h2>Materials for <em>industry.</em></h2>
            </div>

            <p>
              Selected metal products and grades for commercial,
              processing and manufacturing requirements.
            </p>
          </div>
        </Reveal>

        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal key={product.name}>
              <article className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span>0{index + 1}</span>
                </div>

                <div className="product-info">
                  <small>{product.grades}</small>
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>

                  <Link to="/contact">
                    SEND AN ENQUIRY <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
