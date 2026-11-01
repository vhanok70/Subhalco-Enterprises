
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const advantages = [
  [
    "01",
    "Product-focused business",
    "Attention to material grades, specifications and industrial applications."
  ],
  [
    "02",
    "Commercial clarity",
    "Clear discussions around price, quantity, payment and delivery terms."
  ],
  [
    "03",
    "Business relationships",
    "Professional engagement with suppliers, manufacturers and industrial buyers."
  ],
  [
    "04",
    "Order coordination",
    "Communication and coordination throughout agreed business transactions."
  ]
];

const process = [
  [
    "01",
    "Requirement",
    "Understand the product, grade, quantity and delivery location."
  ],
  [
    "02",
    "Commercial discussion",
    "Agree on pricing, payment terms and order conditions."
  ],
  [
    "03",
    "Documentation",
    "Confirm relevant commercial and material documentation."
  ],
  [
    "04",
    "Order coordination",
    "Coordinate dispatch and delivery as agreed."
  ]
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

export default function Quality() {
  return (
    <main className="subhalco">

      <section className="why section">
        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200"
            alt="Industrial manufacturing"
          />
        </div>

        <div className="why-content">
          <span className="eyebrow">WHY SUBHALCO</span>

          <h2>
            Professional business.
            <br />
            <em>Clear commitments.</em>
          </h2>

          <p>
            We focus on the essential details of industrial
            material transactions, from product requirements
            to agreed commercial and delivery terms.
          </p>

          {advantages.map(([number, title, description]) => (
            <div className="advantage" key={number}>
              <span>{number}</span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

              <CheckCircle2 size={19} />
            </div>
          ))}
        </div>
      </section>

      <section className="process section">
        <div className="section-kicker">BUSINESS PROCESS</div>

        <Reveal>
          <span className="eyebrow">
            HOW WE CONDUCT BUSINESS
          </span>

          <h2>
            From requirement <em>to delivery.</em>
          </h2>

          <p className="process-intro">
            Each order is handled according to its agreed
            specifications and commercial terms.
          </p>
        </Reveal>

        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <div className="process-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <ShieldCheck size={38} />
        <h2>Clear business communication</h2>
        <p>
          Product specifications, inspection information
          and supporting documentation are considered
          according to the requirements of each transaction.
        </p>

        <Link to="/contact" className="text-button">
          DISCUSS YOUR REQUIREMENTS <ArrowRight size={16} />
        </Link>
      </section>

    </main>
  );
}
