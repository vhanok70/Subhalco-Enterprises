
import { Link } from "react-router-dom";
import {
  Factory,
  Car,
  Building2,
  Zap,
  Cog,
  Recycle
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Metal Manufacturing",
    description:
      "Industrial metal processing, casting and manufacturing operations."
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Metal components and materials used in automotive manufacturing."
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Aluminium and other metals used in construction-related applications."
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Copper and aluminium materials used in electrical applications."
  },
  {
    icon: Cog,
    title: "Engineering",
    description:
      "Metal materials for engineering, machinery and industrial components."
  },
  {
    icon: Recycle,
    title: "Metal Recycling",
    description:
      "Secondary metal materials for recycling and recovery operations."
  }
];

export default function Industries() {
  return (
    <main className="page">
      <section className="inner-hero">
        <p>INDUSTRIES WE SERVE</p>
        <h1>Supporting Industrial Sectors</h1>
        <p>
          Industrial materials for diverse manufacturing,
          engineering and processing requirements.
        </p>
      </section>

      <section className="page-section">
        <h2>Industry Applications</h2>
        <p>
          Our product categories are relevant to a range of
          industrial sectors, depending on material specifications
          and application requirements.
        </p>

        <div className="page-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.title}>
                <Icon size={34} />
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section">
        <h2>Discuss Your Material Requirements</h2>
        <p>
          Contact us with your industry, material grade and
          required specifications.
        </p>
        <Link to="/contact" className="primary-button">
          Make an Enquiry
        </Link>
      </section>
    </main>
  );
}
