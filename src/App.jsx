
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X,
  ShieldCheck, Globe2, Boxes, Factory,
  Truck, Layers3, Zap, Building2, Mail,
  Phone, MapPin, CheckCircle2
} from "lucide-react";

const products = [
  {
    name: "Aluminium Ingots",
    grade: "A7 / ADC12",
    description: "Aluminium materials for industrial casting and manufacturing.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900"
  },
  {
    name: "Aluminium Billets",
    grade: "6063",
    description: "Billets for extrusion, fabrication and industrial applications.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900"
  },
  {
    name: "Copper Products",
    grade: "Cathodes / Millberry",
    description: "Copper sourcing for industrial and electrical applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900"
  },
  {
    name: "Non-Ferrous Metals",
    grade: "Scrap / Other Grades",
    description: "Sourcing support for selected non-ferrous metal categories.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900"
  }
];

const industries = [
  [Factory, "Manufacturing"],
  [Truck, "Automotive"],
  [Zap, "Electrical & Power"],
  [Layers3, "Engineering"],
  [Boxes, "Metal Processing"],
  [Building2, "Infrastructure"]
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

function Section({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    product: "",
    quantity: "",
    message: ""
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendEnquiry = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Business Enquiry - Subhalco Enterprises"
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Product: ${form.product}
Quantity: ${form.quantity}

Message:
${form.message}`
    );

    window.location.href =
      `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="website">

      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">S</span>
          <span>
            <strong>SUBHALCO</strong>
            <small>ENTERPRISES</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {["About", "Products", "Industries", "Approach"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="mobile-link">
            Contact Us
          </a>
        </nav>

        <a href="#contact" className="nav-button">
          LET'S TALK <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}

      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <Section>
            <span className="eyebrow">
              INDUSTRIAL METALS & COMMODITY TRADING
            </span>

            <h1>
              Connecting Industry.
              <br />
              <span>Delivering Metal Solutions.</span>
            </h1>

            <p>
              Your sourcing partner for aluminium, copper and
              non-ferrous metals. Building business connections
              through reliable communication and coordinated
              supply solutions.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="primary-button">
                EXPLORE PRODUCTS <ArrowUpRight />
              </a>

              <a href="#about" className="secondary-button">
                DISCOVER SUBHALCO <ArrowRight />
              </a>
            </div>
          </Section>
        </div>

        <div className="hero-bottom">
          <span>INDIA | INDUSTRIAL METALS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about section" id="about">
        <Section>
          <span className="eyebrow dark">WHO WE ARE</span>

          <div className="about-grid">
            <h2>
              Trade built on
              <span> clarity and trust.</span>
            </h2>

            <div>
              <p className="large-text">
                Subhalco Enterprises is an India-based industrial
                metals trading business focused on connecting
                buyers with relevant sourcing opportunities.
              </p>

              <p>
                We work around product specifications, grades,
                quantities and delivery requirements to coordinate
                practical supply conversations between businesses.
              </p>

              <a href="#approach" className="text-link">
                HOW WE WORK <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Section>
      </section>

      {/* PRODUCTS */}

      <section className="products section" id="products">
        <Section>
          <span className="eyebrow">OUR PRODUCT PORTFOLIO</span>

          <div className="section-heading">
            <h2>
              Materials that
              <span> move industry.</span>
            </h2>

            <p>
              Explore our metal product categories.
              Availability and specifications are confirmed
              against individual requirements.
            </p>
          </div>
        </Section>

        <div className="product-grid">
          {products.map((product, index) => (
            <Section key={product.name}>
              <article className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span>0{index + 1}</span>
                  <a href="#contact">
                    <ArrowUpRight />
                  </a>
                </div>

                <div className="product-info">
                  <small>{product.grade}</small>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <a href="#contact">
                    ENQUIRE NOW <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            </Section>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="industries section" id="industries">
        <Section>
          <span className="eyebrow dark">INDUSTRIES WE SUPPORT</span>

          <h2>
            Connected to the
            <span> industries of tomorrow.</span>
          </h2>

          <p className="industry-description">
            Understanding different industrial requirements
            and connecting businesses with relevant metal
            sourcing opportunities.
          </p>
        </Section>

        <div className="industry-grid">
          {industries.map(([Icon, name], index) => (
            <Section key={name}>
              <div className="industry-card">
                <small>0{index + 1}</small>
                <Icon size={30} />
                <h3>{name}</h3>
                <ArrowUpRight className="industry-arrow" />
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* APPROACH */}

      <section className="approach section" id="approach">
        <Section>
          <span className="eyebrow">OUR APPROACH</span>

          <h2>
            A clear process.
            <br />
            <span>A stronger partnership.</span>
          </h2>

          <p className="approach-description">
            Every successful supply conversation starts with
            understanding the requirement.
          </p>
        </Section>

        <div className="steps">
          {[
            ["01", "Understand", "Review product, grade, quantity and destination."],
            ["02", "Coordinate", "Identify relevant sourcing and supply options."],
            ["03", "Align", "Discuss commercial terms, logistics and documentation."],
            ["04", "Follow Through", "Coordinate communication through the agreed process."]
          ].map(([number, title, description]) => (
            <Section key={number}>
              <div className="step">
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ArrowUpRight />
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* WHY SUBHALCO */}

      <section className="why section">
        <Section>
          <span className="eyebrow dark">WHY SUBHALCO</span>

          <h2>
            Business is better
            <br />
            when the details <span>are clear.</span>
          </h2>
        </Section>

        <div className="why-grid">
          {[
            [ShieldCheck, "Requirement-led", "We begin with your exact material and specification."],
            [Globe2, "Sourcing perspective", "We explore supply opportunities relevant to your needs."],
            [Boxes, "Product focus", "A portfolio across aluminium, copper and selected metals."],
            [CheckCircle2, "Clear communication", "Straightforward commercial discussions and coordination."]
          ].map(([Icon, title, description]) => (
            <Section key={title}>
              <div className="why-card">
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="cta">
        <Section>
          <span>HAVE A MATERIAL REQUIREMENT?</span>
          <h2>
            Let's make the
            <br />
            next connection.
          </h2>
          <a href="#contact" className="primary-button">
            START AN ENQUIRY <ArrowUpRight />
          </a>
        </Section>
      </section>

      {/* CONTACT */}

      <section className="contact section" id="contact">
        <Section>
          <span className="eyebrow">GET IN TOUCH</span>

          <h2>
            Tell us what
            <br />
            you <span>need.</span>
          </h2>

          <p>
            Share your material specifications and business
            requirements with our team.
          </p>

          <div className="contact-item">
            <Mail />
            <div>
              <small>EMAIL</small>
              <span>Add your official company email</span>
            </div>
          </div>

          <div className="contact-item">
            <Phone />
            <div>
              <small>PHONE / WHATSAPP</small>
              <span>Add your business number</span>
            </div>
          </div>

          <div className="contact-item">
            <MapPin />
            <div>
              <small>LOCATION</small>
              <span>India</span>
            </div>
          </div>
        </Section>

        <Section>
          <form className="contact-form" onSubmit={sendEnquiry}>
            <h3>BUSINESS ENQUIRY</h3>

            <div className="form-row">
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateForm}
                required
              />

              <input
                name="company"
                placeholder="Company name"
                value={form.company}
                onChange={updateForm}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Business email"
              value={form.email}
              onChange={updateForm}
              required
            />

            <select
              name="product"
              value={form.product}
              onChange={updateForm}
              required
            >
              <option value="">Select product</option>
              {products.map(p => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option>Other</option>
            </select>

            <input
              name="quantity"
              placeholder="Required quantity (MT)"
              value={form.quantity}
              onChange={updateForm}
            />

            <textarea
              name="message"
              placeholder="Tell us about your requirement..."
              value={form.message}
              onChange={updateForm}
              rows="4"
            />

            <button type="submit" className="primary-button">
              SEND ENQUIRY <ArrowUpRight />
            </button>

            <small>
              Email placeholder must be replaced before publishing.
            </small>
          </form>
        </Section>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">S</span>
          <span>
            <strong>SUBHALCO</strong>
            <small>ENTERPRISES</small>
          </span>
        </a>

        <p>
          Industrial metals sourcing, trading
          and supply coordination.
        </p>

        <a href="#home">BACK TO TOP ↑</a>

        <div className="copyright">
          © {new Date().getFullYear()} SUBHALCO ENTERPRISES.
          ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
}
