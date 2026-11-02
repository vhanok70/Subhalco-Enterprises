
import React, { useState } from "react";

const products = [
  {
    name: "Aluminium Ingots",
    grade: "A7 / ADC12",
    category: "Aluminium",
    description:
      "Primary and alloy aluminium ingots for casting, manufacturing and industrial processing.",
  },
  {
    name: "Aluminium Billets",
    grade: "6063",
    category: "Aluminium",
    description:
      "Aluminium billets for extrusion, profiles, fabrication and industrial applications.",
  },
  {
    name: "Copper Cathodes",
    grade: "Refined Copper",
    category: "Copper",
    description:
      "Copper cathode requirements for electrical, processing and manufacturing applications.",
  },
  {
    name: "Copper Millberry",
    grade: "Copper Scrap",
    category: "Copper",
    description:
      "Copper Millberry scrap for recycling, refining and industrial material recovery.",
  },
  {
    name: "Other Non-Ferrous Metals",
    grade: "Subject to Enquiry",
    category: "Other Metals",
    description:
      "Selected industrial metal and scrap requirements assessed on an individual basis.",
  },
];

const industries = [
  "Foundries & Die Casting",
  "Extrusion & Fabrication",
  "Electrical & Engineering",
  "Metal Processing",
  "Automotive Components",
  "Industrial Manufacturing",
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Share the product, grade, quantity, destination and commercial requirements.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "We clarify material specifications and assess the scope of the enquiry.",
  },
  {
    number: "03",
    title: "Discuss",
    description:
      "Availability, pricing, documentation and logistics are discussed as applicable.",
  },
  {
    number: "04",
    title: "Coordinate",
    description:
      "Next steps are coordinated based on mutually agreed terms and verification.",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #172b45;
  background: #ffffff;
  font-synthesis: none;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body { margin: 0; }

button, input, select, textarea {
  font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

button { cursor: pointer; }

.site {
  overflow: clip;
}

.container {
  width: min(100% - 80px, 1240px);
  margin: auto;
}

/* TOP BAR */

.topbar {
  background: #10233c;
  color: #e2e9f1;
  font-size: 11px;
}

.topbar-inner {
  min-height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.topbar a:hover {
  color: #d3b57c;
}

/* HEADER */

.header {
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e6ebef;
}

.header-inner {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.logo-icon {
  width: 44px;
  height: 48px;
  background: #142b49;
  color: #d4b679;
  display: grid;
  place-items: center;
  font: 800 29px 'Manrope', sans-serif;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-text strong {
  font: 800 19px 'Manrope', sans-serif;
  letter-spacing: .07em;
}

.logo-text small {
  color: #b3945d;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .28em;
  margin-top: 3px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav a {
  font-size: 13px;
  font-weight: 700;
  color: #34445b;
}

.nav a:hover {
  color: #ae8e58;
}

.header-btn,
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  background: #142b49;
  color: white;
  padding: 17px 23px;
  border: none;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .08em;
  transition: .2s;
}

.header-btn:hover,
.btn-primary:hover {
  background: #25476e;
  transform: translateY(-2px);
}

.menu-btn {
  display: none;
  background: transparent;
  border: none;
  font-size: 27px;
  color: #142b49;
}

/* HERO */

.hero {
  background: #f5f7f9;
}

.hero-grid {
  display: grid;
  grid-template-columns: 52% 48%;
  min-height: 590px;
}

.hero-content {
  padding: 85px 55px 70px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  color: #a98b56;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .19em;
  text-transform: uppercase;
}

.hero h1 {
  font: 800 clamp(40px, 4.4vw, 65px)/1.15 'Manrope', sans-serif;
  letter-spacing: -.055em;
  margin: 25px 0;
}

.hero h1 span {
  color: #b3945d;
}

.hero p {
  color: #647287;
  font-size: 15px;
  line-height: 1.95;
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 27px;
  margin-top: 29px;
  flex-wrap: wrap;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .06em;
}

.hero-bottom {
  display: flex;
  gap: 35px;
  margin-top: 65px;
  padding-top: 20px;
  border-top: 1px solid #dce2e8;
  font-size: 11px;
  color: #65758a;
}

.hero-image {
  position: relative;
  min-height: 590px;
  background: #23344b;
}

.hero-image img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  filter: saturate(.6);
}

.hero-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(12, 30, 52, .75),
    transparent 55%
  );
}

.image-label {
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 1;
  color: white;
  font-size: 11px;
  letter-spacing: .15em;
}

/* MATERIAL STRIP */

.material-strip {
  border-bottom: 1px solid #e6eaee;
}

.material-inner {
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.material-inner strong {
  font-size: 11px;
  color: #8a97a7;
  letter-spacing: .1em;
}

.material-list {
  display: flex;
  gap: 28px;
  font-size: 11px;
  font-weight: 800;
  color: #344860;
}

/* COMMON SECTIONS */

.section {
  padding: 110px 0;
}

.section-label {
  font-size: 11px;
  color: #b29460;
  font-weight: 800;
  letter-spacing: .18em;
}

.section-title {
  font: 800 clamp(32px, 3.7vw, 52px)/1.22 'Manrope', sans-serif;
  letter-spacing: -.055em;
  margin: 20px 0 30px;
}

.section-title span {
  color: #ad8d59;
}

.section-description {
  font-size: 14px;
  color: #68778b;
  line-height: 1.95;
}

/* ABOUT */

.about-grid {
  display: grid;
  grid-template-columns: 27% 1fr;
  gap: 35px;
}

.about-index {
  color: #b29460;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .12em;
}

.about-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
}

.about-lead {
  font: 700 21px/1.65 'Manrope', sans-serif;
  color: #253c58;
}

.about-columns p:not(.about-lead) {
  color: #68778b;
  font-size: 14px;
  line-height: 1.95;
}

/* PRODUCTS */

.products-section {
  background: #f3f5f7;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 45px;
  margin-bottom: 35px;
}

.section-heading .section-description {
  max-width: 370px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 30px;
}

.filter-btn {
  padding: 13px 19px;
  border: 1px solid #d8dfe6;
  background: transparent;
  color: #596a80;
  font-size: 11px;
  font-weight: 800;
}

.filter-btn.active {
  background: #142b49;
  border-color: #142b49;
  color: white;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.product-card {
  background: white;
  border: 1px solid #e5e9ee;
  transition: .25s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(18, 40, 68, .08);
}

.product-visual {
  height: 170px;
  background: linear-gradient(135deg, #213d5e, #12243b);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px;
  color: white;
}

.product-visual small {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  color: #d7bd8b;
}

.product-visual strong {
  font: 800 30px 'Manrope', sans-serif;
  letter-spacing: -.05em;
}

.product-card:nth-child(2n) .product-visual {
  background: linear-gradient(135deg, #43566b, #203751);
}

.product-card:nth-child(3n) .product-visual {
  background: linear-gradient(135deg, #8b7655, #27384c);
}

.product-body {
  padding: 28px;
}

.product-body h3 {
  font: 800 21px 'Manrope', sans-serif;
  letter-spacing: -.035em;
  margin: 0 0 9px;
}

.product-grade {
  color: #aa8a56;
  font-size: 12px;
  font-weight: 800;
}

.product-body p {
  font-size: 13px;
  line-height: 1.85;
  color: #69788b;
  min-height: 74px;
}

.product-body a {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e8ecf0;
  padding-top: 20px;
  margin-top: 25px;
  font-size: 11px;
  font-weight: 800;
}

.product-body a span {
  color: #b3945d;
  font-size: 18px;
}

/* INDUSTRIES */

.industries-section {
  background: #142b49;
  color: white;
}

.industries-grid {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 80px;
  align-items: center;
}

.industries-section .section-title {
  color: white;
}

.industries-section .section-description {
  color: #bac6d3;
}

.industry-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #40536a;
  border-left: 1px solid #40536a;
}

.industry-item {
  padding: 25px;
  min-height: 130px;
  border-right: 1px solid #40536a;
  border-bottom: 1px solid #40536a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.industry-item small {
  color: #d5b77c;
}

.industry-item strong {
  font-size: 14px;
}

/* PROCESS */

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-left: 1px solid #dfe5eb;
  border-top: 1px solid #dfe5eb;
}

.process-card {
  min-height: 250px;
  padding: 28px;
  border-right: 1px solid #dfe5eb;
  border-bottom: 1px solid #dfe5eb;
}

.process-number {
  font-size: 13px;
  font-weight: 800;
  color: #b3945d;
}

.process-card h3 {
  font: 800 18px 'Manrope', sans-serif;
  margin-top: 60px;
}

.process-card p {
  font-size: 13px;
  color: #69798b;
  line-height: 1.85;
}

/* CALL TO ACTION */

.cta-section {
  background: #e9edf2;
  padding: 60px 0;
}

.cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.cta-inner h2 {
  font: 800 32px 'Manrope', sans-serif;
  letter-spacing: -.05em;
}

/* CONTACT */

.contact-grid {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 85px;
}

.contact-details {
  margin-top: 35px;
}

.contact-detail {
  padding: 19px 0;
  border-top: 1px solid #e4e9ee;
}

.contact-detail small {
  display: block;
  color: #b3945d;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  margin-bottom: 10px;
}

.contact-detail a,
.contact-detail p {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.8;
  margin: 0;
}

.contact-form {
  padding: 38px;
  background: #f4f6f8;
}

.contact-form h3 {
  font: 800 25px 'Manrope', sans-serif;
  margin: 0 0 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-form label {
  display: block;
  margin-bottom: 19px;
  font-size: 11px;
  font-weight: 800;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  display: block;
  width: 100%;
  margin-top: 9px;
  padding: 14px;
  background: white;
  border: 1px solid #dce3e9;
  outline: none;
  color: #243951;
  font-size: 13px;
  border-radius: 0;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: #b3945d;
}

.contact-form textarea {
  resize: vertical;
}

.form-note {
  color: #8793a1;
  font-size: 11px;
  line-height: 1.7;
}

.form-submit {
  width: 100%;
}

/* FOOTER */

.footer {
  background: #0f223a;
  color: white;
  padding: 65px 0 25px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding-bottom: 65px;
}

.footer .logo-icon {
  background: #d0b078;
  color: #10243c;
}

.footer .logo-text small {
  color: #d0b078;
}

.footer p {
  color: #acb9c8;
  font-size: 13px;
  line-height: 1.9;
  margin-top: 25px;
}

.footer-links {
  display: flex;
  gap: 90px;
}

.footer-links div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-links strong {
  color: #d0b078;
  font-size: 11px;
  letter-spacing: .12em;
}

.footer-links a {
  color: #bac5d2;
  font-size: 13px;
}

.footer-bottom {
  border-top: 1px solid #34465e;
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #a3b0c0;
  font-size: 10px;
  letter-spacing: .08em;
}

/* RESPONSIVE */

@media (max-width: 1050px) {
  .container {
    width: min(100% - 48px, 1240px);
  }

  .nav { gap: 17px; }

  .header-btn { display: none; }

  .industries-grid,
  .contact-grid { gap: 40px; }
}

@media (max-width: 800px) {
  .header-inner { height: 74px; }

  .menu-btn { display: block; }

  .nav {
    display: none;
    position: absolute;
    top: 74px;
    left: 0;
    right: 0;
    background: white;
    padding: 20px 25px;
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0 15px 25px rgba(0,0,0,.1);
  }

  .nav.open { display: flex; }

  .nav a {
    padding: 12px;
    border-bottom: 1px solid #edf0f3;
  }

  .hero-grid,
  .industries-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding: 65px 0;
  }

  .hero-image {
    min-height: 330px;
  }

  .section { padding: 75px 0; }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-heading {
    display: block;
  }
}

@media (max-width: 560px) {
  .container {
    width: min(100% - 36px, 1240px);
  }

  .topbar-inner > span { display: none; }

  .topbar-inner {
    justify-content: center;
  }

  .logo-text strong { font-size: 16px; }

  .hero h1 { font-size: 39px; }

  .hero-bottom,
  .material-inner,
  .cta-inner,
  .footer-top,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .material-inner {
    padding: 25px 0;
  }

  .material-list {
    flex-wrap: wrap;
    gap: 15px;
  }

  .about-columns,
  .product-grid,
  .industry-list,
  .process-grid,
  .form-row {
    grid-template-columns: 1fr;
  }

  .product-body p {
    min-height: auto;
  }

  .contact-form {
    padding: 24px;
  }

  .footer-links {
    gap: 50px;
  }
}
`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All Products");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    material: "",
    quantity: "",
    message: "",
  });

  const categories = [
    "All Products",
    "Aluminium",
    "Copper",
    "Other Metals",
  ];

  const visibleProducts =
    category === "All Products"
      ? products
      : products.filter((p) => p.category === category);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const sendEnquiry = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Material Enquiry - ${form.material}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Material: ${form.material}
Quantity: ${form.quantity}

Requirement:
${form.message}`
    );

    window.location.href =
      `mailto:info@subhalco.com?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <style>{css}</style>

      {/* TOP BAR */}

      <div className="topbar">
        <div className="container topbar-inner">
          <span>INDUSTRIAL METALS & MATERIALS · INDIA</span>
          <a href="mailto:info@subhalco.com">
            info@subhalco.com
          </a>
        </div>
      </div>

      {/* HEADER */}

      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-icon">S</span>

            <span className="logo-text">
              <strong>SUBHALCO</strong>
              <small>ENTERPRISES</small>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>Company</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#industries" onClick={closeMenu}>Industries</a>
            <a href="#approach" onClick={closeMenu}>Our Approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="header-btn">
            ENQUIRE NOW ↗
          </a>

          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main>

        {/* HERO */}

        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                INDUSTRIAL METALS TRADING
              </span>

              <h1>
                Materials for industry.
                <br />
                <span>Relationships for business.</span>
              </h1>

              <p>
                Subhalco Enterprises is an Indian industrial
                metals trading business focused on aluminium,
                copper and selected non-ferrous materials.
                Clear requirements. Practical commercial
                conversations.
              </p>

              <div className="hero-buttons">
                <a href="#products" className="btn-primary">
                  EXPLORE OUR PRODUCTS ↗
                </a>

                <a href="#about" className="text-link">
                  ABOUT OUR COMPANY →
                </a>
              </div>

              <div className="hero-bottom">
                <span>01 / MATERIAL-FOCUSED TRADING</span>
                <span>02 / DOMESTIC BUSINESS ENQUIRIES</span>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=85"
                alt="Industrial fabrication environment"
              />

              <span className="image-label">
                SUBHALCO / INDUSTRIAL MATERIALS
              </span>
            </div>
          </div>
        </section>

        {/* MATERIAL STRIP */}

        <div className="material-strip">
          <div className="container material-inner">
            <strong>FOCUSED ON INDUSTRIAL REQUIREMENTS</strong>

            <div className="material-list">
              <span>ALUMINIUM</span>
              <span>•</span>
              <span>COPPER</span>
              <span>•</span>
              <span>NON-FERROUS METALS</span>
            </div>
          </div>
        </div>

        {/* ABOUT */}

        <section className="section" id="about">
          <div className="container about-grid">
            <div className="about-index">
              01 / COMPANY
            </div>

            <div>
              <span className="section-label">WHO WE ARE</span>

              <h2 className="section-title">
                Built around the needs of
                <br />
                <span>industrial trade.</span>
              </h2>

              <div className="about-columns">
                <p className="about-lead">
                  A focused trading business with an emphasis
                  on clarity, specifications and responsive
                  communication.
                </p>

                <div>
                  <p>
                    Based in Kurnool, Andhra Pradesh,
                    Subhalco Enterprises works with business
                    enquiries for industrial metals and
                    raw materials across India.
                  </p>

                  <p>
                    Our approach starts with understanding
                    the required grade, quantity, commercial
                    terms and destination before discussing
                    available supply options.
                  </p>

                  <a href="#approach" className="text-link">
                    OUR WORKING APPROACH ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}

        <section
          className="section products-section"
          id="products"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  02 / OUR PRODUCTS
                </span>

                <h2 className="section-title">
                  Industrial metals.
                  <br />
                  <span>Clearly defined.</span>
                </h2>
              </div>

              <p className="section-description">
                Explore our material categories.
                Grades, availability, pricing and delivery
                terms are confirmed for each enquiry.
              </p>
            </div>

            <div className="filter-bar">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`filter-btn ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {visibleProducts.map((product, index) => (
                <article
                  className="product-card"
                  key={product.name}
                >
                  <div className="product-visual">
                    <small>{product.category.toUpperCase()}</small>
                    <strong>
                      {product.grade}
                    </strong>
                  </div>

                  <div className="product-body">
                    <h3>{product.name}</h3>

                    <span className="product-grade">
                      {product.grade}
                    </span>

                    <p>{product.description}</p>

                    <a
                      href="#contact"
                      onClick={() =>
                        setForm((previous) => ({
                          ...previous,
                          material: product.name,
                        }))
                      }
                    >
                      ENQUIRE ABOUT THIS PRODUCT
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}

        <section
          className="section industries-section"
          id="industries"
        >
          <div className="container industries-grid">
            <div>
              <span className="section-label">
                03 / INDUSTRIES
              </span>

              <h2 className="section-title">
                Materials that support
                <br />
                <span>everyday industry.</span>
              </h2>

              <p className="section-description">
                Industrial metals are essential across
                production, fabrication, engineering
                and processing applications.
              </p>
            </div>

            <div className="industry-list">
              {industries.map((industry, index) => (
                <div className="industry-item" key={industry}>
                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                  <strong>{industry}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}

        <section className="section" id="approach">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  04 / OUR APPROACH
                </span>

                <h2 className="section-title">
                  Simple process.
                  <br />
                  <span>Clear next steps.</span>
                </h2>
              </div>

              <p className="section-description">
                Effective trading begins with precise
                information and transparent discussion
                of requirements.
              </p>
            </div>

            <div className="process-grid">
              {steps.map((step) => (
                <div className="process-card" key={step.number}>
                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <span className="section-label">
                LET'S TALK BUSINESS
              </span>

              <h2>Have a material requirement?</h2>

              <p className="section-description">
                Send your specifications for review.
              </p>
            </div>

            <a href="#contact" className="btn-primary">
              SEND AN ENQUIRY ↗
            </a>
          </div>
        </section>

        {/* CONTACT */}

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <span className="section-label">
                05 / CONTACT
              </span>

              <h2 className="section-title">
                Let's discuss
                <br />
                <span>your requirement.</span>
              </h2>

              <p className="section-description">
                For product, grade, quantity or
                commercial enquiries, contact us
                using the details below.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <small>EMAIL</small>
                  <a href="mailto:info@subhalco.com">
                    info@subhalco.com
                  </a>
                </div>

                <div className="contact-detail">
                  <small>PHONE</small>
                  <a href="tel:+917702310750">
                    +91 77023 10750
                  </a>
                </div>

                <div className="contact-detail">
                  <small>ALTERNATE / WHATSAPP</small>
                  <a
                    href="https://wa.me/919390100750"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 93901 00750 ↗
                  </a>
                </div>

                <div className="contact-detail">
                  <small>BUSINESS ADDRESS</small>
                  <p>
                    87/1108, Somsitty Nagar,
                    Near Mother Land,
                    <br />
                    Kurnool – 518002,
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={sendEnquiry}
            >
              <h3>Business Enquiry</h3>

              <div className="form-row">
                <label>
                  Your Name *
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Full name"
                    required
                  />
                </label>

                <label>
                  Company
                  <input
                    name="company"
                    value={form.company}
                    onChange={updateForm}
                    placeholder="Company name"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="name@company.com"
                    required
                  />
                </label>

                <label>
                  Phone
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="+91"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Material Required *
                  <select
                    name="material"
                    value={form.material}
                    onChange={updateForm}
                    required
                  >
                    <option value="">Select material</option>

                    {products.map((product) => (
                      <option
                        key={product.name}
                        value={product.name}
                      >
                        {product.name}
                      </option>
                    ))}

                    <option value="Other">Other</option>
                  </select>
                </label>

                <label>
                  Quantity (MT)
                  <input
                    name="quantity"
                    value={form.quantity}
                    onChange={updateForm}
                    placeholder="e.g. 10 MT"
                  />
                </label>
              </div>

              <label>
                Requirement Details
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  placeholder="Grade, destination, expected delivery and other details"
                  rows={5}
                />
              </label>

              <button
                type="submit"
                className="btn-primary form-submit"
              >
                PREPARE EMAIL ENQUIRY ↗
              </button>

              <p className="form-note">
                This opens your email application with
                the enquiry details. It does not submit
                information to a website server.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a href="#home" className="logo">
                <span className="logo-icon">S</span>

                <span className="logo-text">
                  <strong>SUBHALCO</strong>
                  <small>ENTERPRISES</small>
                </span>
              </a>

              <p>
                Industrial metals trading.
                <br />
                Focused on the details that matter.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <strong>COMPANY</strong>
                <a href="#about">About Us</a>
                <a href="#approach">Our Approach</a>
                <a href="#industries">Industries</a>
              </div>

              <div>
                <strong>EXPLORE</strong>
                <a href="#products">Products</a>
                <a href="#contact">Enquiries</a>
                <a href="mailto:info@subhalco.com">
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} SUBHALCO ENTERPRISES.
              ALL RIGHTS RESERVED.
            </span>

            <span>KURNOOL · ANDHRA PRADESH · INDIA</span>

            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
