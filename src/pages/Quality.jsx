
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  FileCheck,
  Microscope,
  ShieldCheck
} from "lucide-react";

const qualityItems = [
  {
    icon: ClipboardCheck,
    title: "Product Specifications",
    description:
      "Clear communication of material grade, composition, dimensions and other applicable specifications."
  },
  {
    icon: Microscope,
    title: "Material Verification",
    description:
      "Review of available material test reports and inspection information, where applicable."
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description:
      "Attention to relevant commercial documents and supporting material records."
  },
  {
    icon: ShieldCheck,
    title: "Business Transparency",
    description:
      "Clear communication about product details, availability, pricing and transaction requirements."
  }
];

export default function Quality() {
  return (
    <main className="page">
      <section className="inner-hero">
        <p>QUALITY & STANDARDS</p>
        <h1>Clarity in Every Specification</h1>
        <p>
          A structured approach to material information,
          verification and commercial documentation.
        </p>
      </section>

      <section className="page-section">
        <h2>Our Quality Approach</h2>
        <p>
          We believe that clear product information and
          appropriate documentation are important for
          professional industrial metal transactions.
        </p>

        <div className="page-grid">
          {qualityItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="quality-card" key={item.title}>
                <Icon size={34} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section">
        <h2>Material Information</h2>
        <p>
          Product grades, specifications, inspection reports
          and supporting documents are subject to the
          particular material and transaction.
        </p>
        <Link to="/products">Explore Our Products →</Link>
      </section>

      <section className="page-section">
        <h2>Have a Product Requirement?</h2>
        <p>
          Contact us to discuss specifications and
          documentation requirements.
        </p>
        <Link to="/contact" className="primary-button">
          Contact Subhalco
        </Link>
      </section>
    </main>
  );
}
