
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

export default function About() {
  return (
    <main className="subhalco">
      <section className="about section">
        <div className="section-kicker">ABOUT THE COMPANY</div>

        <div className="about-layout">
          <Reveal>
            <div className="about-photo">
              <img
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1100"
                alt="Industrial metal materials"
              />
              <div className="photo-label">
                SUBHALCO ENTERPRISES · INDIA
              </div>
            </div>
          </Reveal>

          <Reveal>
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              A business built around <em>industrial materials.</em>
            </h2>

            <p className="about-lead">
              Subhalco Enterprises is an India-based business
              operating in the industrial metals and commodities sector.
            </p>

            <p>
              Our business activities include the commercial purchase
              and sale of metal products, with a focus on aluminium,
              copper and selected non-ferrous materials. We engage
              with product requirements, grades, quantities, pricing,
              payment conditions and delivery arrangements.
            </p>

            <p>
              We believe in professional communication, clear
              commercial understanding and responsible business
              practices in every transaction.
            </p>

            <Link to="/contact" className="text-button">
              CONNECT WITH US <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
