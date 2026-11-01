
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Menu, X, Factory, Layers3,
  Zap, Building2, Truck, Boxes, Mail, Phone,
  MapPin, CheckCircle2, Globe2
} from "lucide-react";

const products = [
  {
    number: "01",
    name: "Aluminium Ingots",
    grades: "A7 / ADC12",
    description: "Primary and secondary aluminium grades for casting and industrial applications.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900"
  },
  {
    number: "02",
    name: "Aluminium Billets",
    grades: "6063",
    description: "Aluminium billet products for extrusion and downstream manufacturing.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900"
  },
  {
    number: "03",
    name: "Copper Products",
    grades: "Cathodes / Millberry",
    description: "Copper materials for industrial processing and electrical applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900"
  },
  {
    number: "04",
    name: "Non-Ferrous Metals",
    grades: "Selected grades and scrap",
    description: "A range of non-ferrous metal materials for commercial and industrial use.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900"
  }
];

const industries = [
  [Factory, "Metal manufacturing"],
  [Truck, "Automotive"],
  [Zap, "Electrical"],
  [Layers3, "Extrusion & fabrication"],
  [Boxes, "Foundries & casting"],
  [Building2, "Engineering"]
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 }
  }
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
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
    setForm({ ...form, [e.target.name]: e.target.value });
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

    // Replace this placeholder with your official company email.
    window.location.href =
      `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  const navItems = [
    ["Company", "#company"],
    ["Products", "#products"],
    ["Industries", "#industries"],
    ["Business", "#business"]
  ];

  return (
    <main className="website">

      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">S</span>
          <span className="logo-type">
            <strong>SUBHALCO</strong>
            <small>ENTERPRISES</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map(([label, link]) => (
            <a key={label} href={link} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="mobile-contact" href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          CONTACT US <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <Reveal>
            <div className="hero-kicker">
              <span></span> INDUSTRIAL MATERIALS & METALS
            </div>

            <h1>
              Materials for
              <br />
              <span>modern industry.</span>
            </h1>

            <p className="hero-description">
              Subhalco Enterprises is an India-based business
              engaged in the commercial supply and sale of
              industrial metals and non-ferrous materials.
            </p>

            <div className="hero-actions">
              <a href="#products" className="button-dark">
                VIEW OUR PRODUCTS <ArrowUpRight size={17} />
              </a>
              <a href="#company" className="button-text">
                ABOUT THE COMPANY <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1400"
              alt="Industrial metal production"
            />
            <div className="image-caption">
              <span>SUBHALCO ENTERPRISES</span>
              <span>INDUSTRIAL METALS</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>INDIA</span>
          <span>INDUSTRIAL METALS & COMMODITIES</span>
          <span>01 / 04</span>
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="section-topline">
          <span>01 — COMPANY OVERVIEW</span>
          <span>ABOUT SUBHALCO</span>
        </div>

        <div className="company-grid">
          <Reveal>
            <h2>
              An independent
              <br />
              <span>industrial enterprise.</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="company-lead">
              Subhalco Enterprises operates in the industrial
              metals and commodities sector, with a focus on
              commercial buying and selling of metal materials.
            </p>
            <p className="company-copy">
              Our business is centred on understanding material
              grades, specifications, quantities and commercial
              requirements. We aim to conduct business through
              clear communication, professional documentation
              and responsible commercial practices.
            </p>
            <a href="#business" className="inline-link">
              OUR BUSINESS APPROACH <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-topline">
          <span>02 — PRODUCT PORTFOLIO</span>
          <span>INDUSTRIAL MATERIALS</span>
        </div>

        <Reveal className="products-heading">
          <div>
            <h2>Our product portfolio</h2>
            <p>
              Industrial metals and material categories for
              commercial and manufacturing requirements.
            </p>
          </div>
          <span className="portfolio-note">PRODUCT RANGE / 2026</span>
        </Reveal>

        <div className="product-grid">
          {products.map((product) => (
            <Reveal key={product.number}>
              <article className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-number">{product.number}</span>
                </div>
                <div className="product-details">
                  <span className="product-grade">{product.grades}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="#contact">
                    PRODUCT ENQUIRY <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="section-topline">
          <span>03 — INDUSTRY APPLICATIONS</span>
          <span>SECTORS</span>
        </div>

        <Reveal>
          <h2>
            Serving industrial
            <br />
            <span>material requirements.</span>
          </h2>
          <p className="industries-intro">
            Our product categories are relevant to a range of
            industrial and manufacturing applications.
          </p>
        </Reveal>

        <div className="industry-grid">
          {industries.map(([Icon, name], index) => (
            <Reveal key={name}>
              <div className="industry-item">
                <span>0{index + 1}</span>
                <Icon size={25} strokeWidth={1.5} />
                <h3>{name}</h3>
                <ArrowUpRight className="industry-arrow" size={17} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="business-section" id="business">
        <div className="section-topline">
          <span>04 — BUSINESS OPERATIONS</span>
          <span>OUR APPROACH</span>
        </div>

        <div className="business-grid">
          <Reveal>
            <h2>
              Commercial business.
              <br />
              <span>Clear execution.</span>
            </h2>
            <p>
              We approach each transaction with attention to
              product specifications, commercial terms and
              agreed delivery requirements.
            </p>
          </Reveal>

          <div className="business-list">
            {[
              ["01", "Product selection", "Material grades and specifications."],
              ["02", "Commercial terms", "Pricing, quantity and payment conditions."],
              ["03", "Documentation", "Relevant commercial and material documents."],
              ["04", "Order fulfilment", "Delivery arrangements as agreed for each order."]
            ].map(([number, title, description]) => (
              <Reveal key={number}>
                <div className="business-row">
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <CheckCircle2 size={19} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-topline">
          <span>05 — BUSINESS PRINCIPLES</span>
          <span>HOW WE OPERATE</span>
        </div>

        <Reveal>
          <h2>Built around sound business practices.</h2>
        </Reveal>

        <div className="principles-grid">
          {[
            [CheckCircle2, "Commercial clarity", "Clear understanding of specifications and agreed terms."],
            [Boxes, "Product knowledge", "Attention to grades, material details and applications."],
            [Globe2, "Business relationships", "Professional engagement with industrial customers and suppliers."],
            [Building2, "Responsible operations", "A practical approach to documentation and order requirements."]
          ].map(([Icon, title, description]) => (
            <Reveal key={title}>
              <div className="principle-card">
                <Icon size={25} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-topline">
          <span>06 — CONTACT</span>
          <span>BUSINESS ENQUIRIES</span>
        </div>

        <div className="contact-grid">
          <Reveal>
            <h2>
              Let's discuss
              <br />
              <span>your requirement.</span>
            </h2>
            <p>
              For product enquiries, commercial discussions
              and business opportunities, contact Subhalco
              Enterprises.
            </p>

            <div className="contact-detail">
              <Mail size={19} />
              <div>
                <small>EMAIL</small>
                <span>info@subhalco.com</span>
              </div>
            </div>

            <div className="contact-detail">
              <Phone size={19} />
              <div>
                <small>PHONE / WHATSAPP</small>
                <span>+917702310750</span>
              </div>
            </div>

            <div className="contact-detail">
              <MapPin size={19} />
              <div>
                <small>BUSINESS LOCATION</small>
                <span>India</span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form className="contact-form" onSubmit={sendEnquiry}>
              <h3>SUBMIT A BUSINESS ENQUIRY</h3>

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
                <option value="">Select material</option>
                {products.map((p) => (
                  <option key={p.name} value={p.name}>{p.name}</option>
                ))}
                <option value="Other">Other</option>
              </select>

              <input
                name="quantity"
                placeholder="Quantity / MT"
                value={form.quantity}
                onChange={updateForm}
              />

              <textarea
                name="message"
                placeholder="Material specifications and enquiry details"
                value={form.message}
                onChange={updateForm}
                rows="4"
              />

              <button type="submit" className="button-dark">
                SUBMIT ENQUIRY <ArrowUpRight size={17} />
              </button>
              <small className="form-note">
                Official company email must be configured before enquiries can be received.
              </small>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="logo footer-logo">
            <span className="logo-mark">S</span>
            <span className="logo-type">
              <strong>SUBHALCO</strong>
              <small>ENTERPRISES</small>
            </span>
          </a>

          <p>
            Industrial metals and commodities.
            <br />
            Commercial business. Professional standards.
          </p>

          <a href="#home" className="back-top">
            BACK TO TOP <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SUBHALCO ENTERPRISES</span>
          <span>INDIA</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </footer>

    </main>
  );
}
