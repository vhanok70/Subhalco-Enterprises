
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Truck,
  Layers,
  Boxes,
  ShieldCheck
} from "lucide-react";

const industries = [
  [Factory, "Foundries & casting"],
  [Building2, "Metal manufacturing"],
  [Truck, "Automotive"],
  [Layers, "Extrusion & fabrication"],
  [Boxes, "Metal processing"],
  [ShieldCheck, "Engineering"]
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

export default function Industries() {
  return (
    <main className="subhalco">
      <section className="industries section">
        <div className="section-kicker">
          INDUSTRIAL APPLICATIONS
        </div>

        <Reveal>
          <span className="eyebrow">INDUSTRIES WE SERVE</span>

          <h2>
            Connected with <em>industry.</em>
          </h2>

          <p className="industry-intro">
            Our product categories are relevant to a range of
            industrial and manufacturing applications.
          </p>
        </Reveal>

        <div className="industry-grid">
          {industries.map(([Icon, name], index) => (
            <div className="industry-item" key={name}>
              <span>0{index + 1}</span>
              <Icon size={27} />
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
