
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu, X, ArrowUpRight, ArrowRight, Phone, Mail, MapPin,
  Factory, ShieldCheck, Boxes, Truck, Globe2, CheckCircle2,
  Building2, Package, FileCheck, Handshake, ChevronRight
} from "lucide-react";

const phone1 = "+917702310750";
const phone2 = "+919390100750";
const email = "info@subhalco.com";
const address = "87/1108, Somsitty Nagar, Near Mother Land, Kurnool 518002, Andhra Pradesh, India";

const products = [
  {
    name: "Aluminium Ingots",
    grades: "A7 / ADC12",
    description: "Aluminium grades for foundries, die casting and industrial manufacturing.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900"
  },
  {
    name: "Aluminium Billets",
    grades: "6063",
    description: "Aluminium billet materials for extrusion and fabrication applications.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900"
  },
  {
    name: "Copper Products",
    grades: "Cathodes / Millberry",
    description: "Copper materials for industrial processing and electrical applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900"
  },
  {
    name: "Non-Ferrous Metals",
    grades: "Selected grades and scrap",
    description: "Selected non-ferrous materials for commercial and industrial requirements.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900"
  }
];

const services = [
  [Package, "Industrial Material Supply", "Commercial supply of selected metal products and materials."],
  [Boxes, "Product Procurement", "Identification and procurement of materials against defined requirements."],
  [ShieldCheck, "Quality & Inspection Coordination", "Coordination of specifications, test reports and inspection requirements."],
  [Truck, "Logistics Coordination", "Coordination of transport and delivery arrangements for agreed orders."],
  [FileCheck, "Trade Documentation", "Commercial documentation and transaction-related paperwork."],
  [Handshake, "Business Partnerships", "Professional engagement with manufacturers, suppliers and industrial buyers."]
];

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fade}
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
    name: "", company: "", email: "", phone: "",
    product: "", quantity: "", message: ""
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Business Enquiry - Subhalco Enterprises");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.product}\nQuantity: ${form.quantity}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const nav = [
    ["Home", "#home"], ["About Us", "#about"],
    ["Services", "#services"], ["Products", "#products"],
    ["Contact", "#contact"]
  ];

  return (
    <main className="site">
      <div className="topbar">
        <span>INDUSTRIAL METALS & COMMODITIES</span>
        <div>
          <a href={`tel:${phone1}`}><Phone size={13}/> +91 77023 10750</a>
          <a href={`mailto:${email}`}><Mail size={13}/> {email}</a>
        </div>
      </div>

      <header className="header">
        <a href="#home" className="brand">
          <span className="brand-symbol">S</span>
          <span><b>SUBHALCO</b><small>ENTERPRISES</small></span>
        </a>
        <nav className={menuOpen ? "navigation open" : "navigation"}>
          {nav.map(([name, link]) => (
            <a key={name} href={link} onClick={() => setMenuOpen(false)}>{name}</a>
          ))}
        </nav>
        <a href="#contact" className="header-cta">GET IN TOUCH <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo"/>
        <div className="hero-shade"/>
        <div className="hero-content">
          <Reveal>
            <span className="hero-label">SUBHALCO ENTERPRISES · KURNOOL, INDIA</span>
            <h1>Industrial metals.<br/><span>Business built on trust.</span></h1>
            <p>
              A business engaged in the commercial buying and
              selling of industrial metals and non-ferrous materials,
              serving the requirements of India's industrial sector.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn-primary">EXPLORE OUR PRODUCTS <ArrowUpRight size={17}/></a>
              <a href="#about" className="btn-outline">DISCOVER OUR COMPANY <ArrowRight size={16}/></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-foot"><span>INDUSTRIAL MATERIALS & METALS</span><span>ANDHRA PRADESH · INDIA</span></div>
      </section>

      <section className="trust-strip">
        <div><b>01</b><span>Industrial metals</span></div>
        <div><b>02</b><span>Commercial supply</span></div>
        <div><b>03</b><span>Domestic business</span></div>
        <div><b>04</b><span>Business relationships</span></div>
      </section>

      <section className="section about" id="about">
        <div className="section-label">01 / WHO WE ARE</div>
        <div className="about-grid">
          <Reveal>
            <span className="eyebrow">ABOUT SUBHALCO ENTERPRISES</span>
            <h2>A business focused on <em>industrial materials.</em></h2>
          </Reveal>
          <Reveal>
            <p className="lead">
              Subhalco Enterprises is an India-based industrial metals
              and commodities business headquartered in Kurnool,
              Andhra Pradesh.
            </p>
            <p>
              Our business activities focus on the commercial purchase
              and sale of selected metal products, including aluminium,
              copper and other non-ferrous materials. We work with
              product specifications, grades, quantities, commercial
              terms and delivery requirements for each transaction.
            </p>
            <a className="text-link" href="#contact">CONNECT WITH SUBHALCO <ArrowUpRight size={16}/></a>
          </Reveal>
        </div>
        <div className="about-banner">
          <img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1400" alt="Industrial aluminium materials"/>
          <div><span>OUR BUSINESS</span><h3>Materials that support<br/>industrial progress.</h3></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-label">02 / WHAT WE DO</div>
        <Reveal>
          <div className="section-heading">
            <div><span className="eyebrow">OUR BUSINESS SERVICES</span><h2>Our areas of <em>operation.</em></h2></div>
            <p>Commercial activities and related services supporting industrial material requirements.</p>
          </div>
        </Reveal>
        <div className="service-grid">
          {services.map(([Icon, title, desc], i) => (
            <Reveal key={title}>
              <article className="service-card">
                <span className="service-number">0{i+1}</span>
                <Icon size={31} strokeWidth={1.5}/>
                <h3>{title}</h3><p>{desc}</p>
                <a href="#contact">ENQUIRE <ArrowUpRight size={15}/></a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section products" id="products">
        <div className="section-label">03 / PRODUCT CATEGORIES</div>
        <Reveal>
          <div className="section-heading">
            <div><span className="eyebrow">OUR PORTFOLIO</span><h2>Industrial metal <em>products.</em></h2></div>
            <p>Product grades and availability are discussed and confirmed for each business requirement.</p>
          </div>
        </Reveal>
        <div className="product-grid">
          {products.map((p, i) => (
            <Reveal key={p.name}>
              <article className="product-card">
                <div className="product-photo">
                  <img src={p.image} alt={p.name}/>
                  <span>0{i+1}</span>
                </div>
                <div className="product-copy">
                  <small>{p.grades}</small><h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <a href="#contact">PRODUCT ENQUIRY <ArrowUpRight size={16}/></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section sectors">
        <div className="section-label">04 / INDUSTRIES</div>
        <Reveal>
          <span className="eyebrow">INDUSTRIES WE CATER TO</span>
          <h2>Supporting a range of <em>industrial sectors.</em></h2>
        </Reveal>
        <div className="sector-grid">
          {[
            [Factory,"Foundries & casting"],
            [Building2,"Metal manufacturing"],
            [Truck,"Automotive industry"],
            [Boxes,"Metal processing"],
            [Globe2,"Engineering & fabrication"],
            [ShieldCheck,"Electrical applications"]
          ].map(([Icon, name], i) => (
            <div className="sector" key={name}><span>0{i+1}</span><Icon/><b>{name}</b><ChevronRight/></div>
          ))}
        </div>
      </section>

      <section className="recognition">
        <div className="recognition-inner">
          <Reveal>
            <span className="eyebrow">OUR BUSINESS COMMITMENT</span>
            <h2>Professional conduct.<br/><em>Transparent transactions.</em></h2>
            <p>
              We place importance on clear product specifications,
              agreed commercial terms, appropriate documentation
              and communication throughout each transaction.
            </p>
            <a href="#contact" className="btn-primary">DISCUSS A REQUIREMENT <ArrowUpRight size={16}/></a>
          </Reveal>
          <div className="commitment-list">
            {[
              "Clear product and grade details",
              "Defined commercial terms",
              "Relevant transaction documentation",
              "Coordinated delivery arrangements"
            ].map((item) => <div key={item}><CheckCircle2/><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-label">05 / CONTACT US</div>
        <div className="contact-grid">
          <Reveal>
            <span className="eyebrow">LET'S DO BUSINESS</span>
            <h2>Connect with <em>Subhalco.</em></h2>
            <p>For product enquiries, purchase requirements and business discussions, contact our office.</p>
            <a className="contact-line" href={`tel:${phone1}`}><Phone/><span><small>PHONE / WHATSAPP</small>+91 77023 10750</span></a>
            <a className="contact-line" href={`tel:${phone2}`}><Phone/><span><small>ALTERNATE NUMBER</small>+91 93901 00750</span></a>
            <a className="contact-line" href={`mailto:${email}`}><Mail/><span><small>EMAIL</small>{email}</span></a>
            <div className="contact-line"><MapPin/><span><small>OFFICE ADDRESS</small>{address}</span></div>
            <a className="whatsapp" href={`https://wa.me/${phone1.replace("+","")}`} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <ArrowUpRight size={16}/></a>
          </Reveal>

          <Reveal>
            <form className="enquiry-form" onSubmit={submit}>
              <h3>BUSINESS ENQUIRY</h3>
              <div className="form-two">
                <input name="name" placeholder="Your name *" value={form.name} onChange={update} required/>
                <input name="company" placeholder="Company name" value={form.company} onChange={update}/>
              </div>
              <div className="form-two">
                <input name="email" type="email" placeholder="Email address *" value={form.email} onChange={update} required/>
                <input name="phone" placeholder="Phone number" value={form.phone} onChange={update}/>
              </div>
              <select name="product" value={form.product} onChange={update} required>
                <option value="">Select product *</option>
                {products.map(p=><option key={p.name}>{p.name}</option>)}
                <option>Other</option>
              </select>
              <input name="quantity" placeholder="Required quantity (MT)" value={form.quantity} onChange={update}/>
              <textarea name="message" rows="4" placeholder="Tell us about your requirement..." value={form.message} onChange={update}/>
              <button className="btn-primary" type="submit">SEND ENQUIRY <ArrowUpRight size={16}/></button>
              <small>Submitting opens your email application to send the enquiry to Subhalco Enterprises.</small>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand"><span className="brand-symbol">S</span><span><b>SUBHALCO</b><small>ENTERPRISES</small></span></a>
          <p>Industrial Metals & Commodities<br/>Kurnool, Andhra Pradesh, India</p>
          <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#products">Products</a><a href="#contact">Contact</a></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SUBHALCO ENTERPRISES. ALL RIGHTS RESERVED.</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </footer>
    </main>
  );
}
