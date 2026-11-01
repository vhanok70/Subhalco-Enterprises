
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight, ArrowUpRight,
  Phone, Mail, MapPin, Factory, ShieldCheck, Truck,
  Boxes, Package, FileCheck, Handshake, Building2,
  Layers, CheckCircle2
} from "lucide-react";

const PHONE = "+917702310750";
const ALT_PHONE = "+919390100750";
const EMAIL = "info@subhalco.com";
const ADDRESS = "87/1108, Somsitty Nagar, Near Mother Land, Kurnool 518002, Andhra Pradesh, India";

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

const services = [
  [Package, "Metal Products", "Commercial purchase and sale of industrial metal products."],
  [Boxes, "Material Procurement", "Procurement of materials against defined product and grade requirements."],
  [ShieldCheck, "Quality Coordination", "Coordination of specifications, test reports and inspection requirements."],
  [Truck, "Transport Coordination", "Delivery and transport arrangements according to agreed order terms."],
  [FileCheck, "Commercial Documentation", "Coordination of invoices, material details and transaction documents."]
];

const advantages = [
  ["01", "Product-focused business", "Attention to material grades, specifications and industrial applications."],
  ["02", "Commercial clarity", "Clear discussions around price, quantity, payment and delivery terms."],
  ["03", "Business relationships", "Professional engagement with suppliers, manufacturers and industrial buyers."],
  ["04", "Order coordination", "Communication and coordination throughout agreed business transactions."]
];

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
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
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="subhalco">

      {/* TOP CONTACT BAR */}
      <div className="topbar">
        <span>INDUSTRIAL METALS & COMMODITIES · KURNOOL, INDIA</span>
        <div>
          <a href={`tel:${PHONE}`}><Phone size={13}/> +91 77023 10750</a>
          <a href={`mailto:${EMAIL}`}><Mail size={13}/> {EMAIL}</a>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <a className="brand" href="#home">
          <span className="brand-icon">S</span>
          <span className="brand-name">
            <strong>SUBHALCO</strong>
            <small>ENTERPRISES</small>
          </span>
        </a>

        <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X/> : <Menu/>}
        </button>

        <nav className={menu ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={() => setMenu(false)}>Home</a>
          <a href="#about" onClick={() => setMenu(false)}>Company</a>
          <div className="nav-dropdown">
            <a href="#products">Products <ChevronDown size={13}/></a>
            <div className="dropdown-panel">
              {products.map(p => <a key={p.name} href="#products">{p.name}</a>)}
            </div>
          </div>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>

        <a className="header-button" href="#contact">
          SALES ENQUIRY <ArrowUpRight size={15}/>
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-background"/>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <Reveal>
            <span className="hero-tag">SUBHALCO ENTERPRISES · INDIA</span>
            <h1>Industrial metals<br/>for <em>business growth.</em></h1>
            <p>
              A domestic industrial metals and commodities business
              engaged in the commercial purchase and sale of aluminium,
              copper and selected non-ferrous materials.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn-main">EXPLORE PRODUCTS <ArrowRight size={16}/></a>
              <a href="#about" className="btn-light">ABOUT SUBHALCO <ArrowUpRight size={16}/></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-bottom">
          <span>METALS & INDUSTRIAL MATERIALS</span>
          <span>ANDHRA PRADESH · INDIA</span>
        </div>
      </section>

      {/* FOUR COMPANY HIGHLIGHTS */}
      <section className="highlights">
        <div className="highlight">
          <Factory/>
          <div><h3>Industrial Focus</h3><p>Metal and material categories</p></div>
        </div>
        <div className="highlight">
          <Boxes/>
          <div><h3>Product Portfolio</h3><p>Aluminium, copper and more</p></div>
        </div>
        <div className="highlight">
          <Handshake/>
          <div><h3>Commercial Business</h3><p>Buying and selling of materials</p></div>
        </div>
        <div className="highlight">
          <MapPin/>
          <div><h3>Based in Kurnool</h3><p>Andhra Pradesh, India</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-kicker">ABOUT THE COMPANY</div>
        <div className="about-layout">
          <Reveal>
            <div className="about-photo">
              <img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1100" alt="Industrial metal materials"/>
              <div className="photo-label">SUBHALCO ENTERPRISES · INDIA</div>
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>A business built around <em>industrial materials.</em></h2>
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
            <a href="#contact" className="text-button">CONNECT WITH US <ArrowUpRight size={16}/></a>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-kicker">OUR BUSINESS ACTIVITIES</div>
        <Reveal>
          <div className="section-title-row">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2>Our <em>services.</em></h2>
            </div>
            <p>
              Business activities supporting industrial material
              requirements and commercial transactions.
            </p>
          </div>
        </Reveal>
        <div className="service-grid">
          {services.map(([Icon, title, desc], i) => (
            <Reveal key={title}>
              <article className="service-card">
                <span className="card-index">0{i+1}</span>
                <Icon size={34} strokeWidth={1.5}/>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href="#contact">ENQUIRE <ArrowUpRight size={15}/></a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="products section" id="products">
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
          {products.map((p, i) => (
            <Reveal key={p.name}>
              <article className="product-card">
                <div className="product-image">
                  <img src={p.image} alt={p.name}/>
                  <span>0{i+1}</span>
                </div>
                <div className="product-info">
                  <small>{p.grades}</small>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <a href="#contact">SEND AN ENQUIRY <ArrowUpRight size={15}/></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries section">
        <div className="section-kicker">INDUSTRIAL APPLICATIONS</div>
        <Reveal>
          <span className="eyebrow">INDUSTRIES WE SERVE</span>
          <h2>Connected with <em>industry.</em></h2>
          <p className="industry-intro">
            Our product categories are relevant to a range of
            industrial and manufacturing applications.
          </p>
        </Reveal>
        <div className="industry-grid">
          {[
            [Factory, "Foundries & casting"],
            [Building2, "Metal manufacturing"],
            [Truck, "Automotive"],
            [Layers, "Extrusion & fabrication"],
            [Boxes, "Metal processing"],
            [ShieldCheck, "Engineering"]
          ].map(([Icon, name], i) => (
            <div className="industry-item" key={name}>
              <span>0{i+1}</span><Icon size={27}/>
              <strong>{name}</strong><ArrowUpRight size={16}/>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why section">
        <div className="why-image">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200" alt="Industrial manufacturing"/>
        </div>
        <div className="why-content">
          <span className="eyebrow">WHY SUBHALCO</span>
          <h2>Professional business.<br/><em>Clear commitments.</em></h2>
          <p>
            We focus on the essential details of industrial
            material transactions, from product requirements
            to agreed commercial and delivery terms.
          </p>
          {advantages.map(([n, title, desc]) => (
            <div className="advantage" key={n}>
              <span>{n}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
              <CheckCircle2 size={19}/>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS PROCESS */}
      <section className="process section">
        <div className="section-kicker">BUSINESS PROCESS</div>
        <Reveal>
          <span className="eyebrow">HOW WE CONDUCT BUSINESS</span>
          <h2>From requirement <em>to delivery.</em></h2>
          <p className="process-intro">Each order is handled according to its agreed specifications and commercial terms.</p>
        </Reveal>
        <div className="process-grid">
          {[
            ["01","Requirement","Understand the product, grade, quantity and delivery location."],
            ["02","Commercial discussion","Agree on pricing, payment terms and order conditions."],
            ["03","Documentation","Confirm relevant commercial and material documentation."],
            ["04","Order coordination","Coordinate dispatch and delivery as agreed."]
          ].map(([n,t,d]) => (
            <div className="process-item" key={n}>
              <span>{n}</span><h3>{t}</h3><p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="section-kicker">CONTACT SUBHALCO</div>
        <div className="contact-layout">
          <Reveal>
            <span className="eyebrow">SALES & BUSINESS ENQUIRIES</span>
            <h2>Let's discuss <em>business.</em></h2>
            <p>Contact Subhalco Enterprises for product enquiries, purchase requirements and commercial discussions.</p>

            <a className="contact-row" href={`tel:${PHONE}`}>
              <Phone/><span><small>PHONE</small>+91 77023 10750</span>
            </a>
            <a className="contact-row" href={`tel:${ALT_PHONE}`}>
              <Phone/><span><small>ALTERNATE PHONE</small>+91 93901 00750</span>
            </a>
            <a className="contact-row" href={`mailto:${EMAIL}`}>
              <Mail/><span><small>EMAIL</small>{EMAIL}</span>
            </a>
            <div className="contact-row">
              <MapPin/><span><small>OFFICE ADDRESS</small>{ADDRESS}</span>
            </div>
            <a className="whatsapp-button" href={`https://wa.me/${PHONE.replace("+","")}`} target="_blank" rel="noreferrer">
              CONTACT ON WHATSAPP <ArrowUpRight size={16}/>
            </a>
          </Reveal>

          <Reveal>
            <form className="enquiry-form" onSubmit={submit}>
              <h3>SUBMIT YOUR ENQUIRY</h3>
              <p>Share your requirement. Our team can follow up using the contact details you provide.</p>
              <div className="form-pair">
                <input name="name" placeholder="Your name *" value={form.name} onChange={update} required/>
                <input name="company" placeholder="Company name" value={form.company} onChange={update}/>
              </div>
              <div className="form-pair">
                <input name="email" type="email" placeholder="Email address *" value={form.email} onChange={update} required/>
                <input name="phone" placeholder="Phone number" value={form.phone} onChange={update}/>
              </div>
              <select name="product" value={form.product} onChange={update} required>
                <option value="">Select product *</option>
                {products.map(p=><option key={p.name}>{p.name}</option>)}
                <option>Other</option>
              </select>
              <input name="quantity" placeholder="Quantity / MT" value={form.quantity} onChange={update}/>
              <textarea name="message" rows="4" placeholder="Your material requirement..." value={form.message} onChange={update}/>
              <button type="submit" className="submit-button">SEND ENQUIRY <ArrowUpRight size={16}/></button>
              <small>Submitting opens your email application to send the enquiry to {EMAIL}.</small>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-icon">S</span>
              <span className="brand-name"><strong>SUBHALCO</strong><small>ENTERPRISES</small></span>
            </a>
            <p className="footer-description">
              Industrial Metals & Commodities<br/>
              Kurnool, Andhra Pradesh, India.
            </p>
          </div>
          <div className="footer-column">
            <h4>COMPANY</h4>
            <a href="#about">About us</a><a href="#services">Our services</a><a href="#products">Products</a>
          </div>
          <div className="footer-column">
            <h4>PRODUCTS</h4>
            {products.map(p=><a href="#products" key={p.name}>{p.name}</a>)}
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <a href={`tel:${PHONE}`}>+91 77023 10750</a>
            <a href={`tel:${ALT_PHONE}`}>+91 93901 00750</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SUBHALCO ENTERPRISES. ALL RIGHTS RESERVED.</span>
          <span>KURNOOL · ANDHRA PRADESH · INDIA</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
