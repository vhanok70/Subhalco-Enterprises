
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight
} from "lucide-react";

const PHONE = "+917702310750";
const ALT_PHONE = "+919390100750";
const EMAIL = "info@subhalco.com";

const ADDRESS =
  "87/1108, Somsitty Nagar, Near Mother Land, Kurnool 518002, Andhra Pradesh, India";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: ""
  });

  function update(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function submit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      "Business Enquiry - Subhalco Enterprises"
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Product: ${form.product}
Quantity: ${form.quantity}

Message:
${form.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="subhalco">
      <section className="contact section">
        <div className="section-kicker">
          CONTACT SUBHALCO
        </div>

        <div className="contact-layout">
          <Reveal>
            <span className="eyebrow">
              SALES & BUSINESS ENQUIRIES
            </span>

            <h2>
              Let's discuss <em>business.</em>
            </h2>

            <p>
              Contact Subhalco Enterprises for product enquiries,
              purchase requirements and commercial discussions.
            </p>

            <a className="contact-row" href={`tel:${PHONE}`}>
              <Phone />
              <span>
                <small>PHONE</small>
                +91 77023 10750
              </span>
            </a>

            <a className="contact-row" href={`tel:${ALT_PHONE}`}>
              <Phone />
              <span>
                <small>ALTERNATE PHONE</small>
                +91 93901 00750
              </span>
            </a>

            <a className="contact-row" href={`mailto:${EMAIL}`}>
              <Mail />
              <span>
                <small>EMAIL</small>
                {EMAIL}
              </span>
            </a>

            <div className="contact-row">
              <MapPin />
              <span>
                <small>OFFICE ADDRESS</small>
                {ADDRESS}
              </span>
            </div>

            <a
              className="whatsapp-button"
              href={`https://wa.me/${PHONE.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              CONTACT ON WHATSAPP
              <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <Reveal>
            <form
              className="enquiry-form"
              onSubmit={submit}
            >
              <h3>SUBMIT YOUR ENQUIRY</h3>

              <p>
                Share your requirement. We can follow up
                using the contact details you provide.
              </p>

              <div className="form-pair">
                <input
                  name="name"
                  placeholder="Your name *"
                  value={form.name}
                  onChange={update}
                  required
                />

                <input
                  name="company"
                  placeholder="Company name"
                  value={form.company}
                  onChange={update}
                />
              </div>

              <div className="form-pair">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  value={form.email}
                  onChange={update}
                  required
                />

                <input
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={update}
                />
              </div>

              <select
                name="product"
                value={form.product}
                onChange={update}
                required
              >
                <option value="">Select product *</option>
                <option>Aluminium Ingots A7</option>
                <option>Aluminium Ingots ADC12</option>
                <option>Aluminium Billets 6063</option>
                <option>Copper Cathodes</option>
                <option>Copper Millberry</option>
                <option>Non-Ferrous Metals</option>
                <option>Other</option>
              </select>

              <input
                name="quantity"
                placeholder="Quantity / MT"
                value={form.quantity}
                onChange={update}
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your material requirement..."
                value={form.message}
                onChange={update}
              />

              <button
                type="submit"
                className="submit-button"
              >
                SEND ENQUIRY
                <ArrowUpRight size={16} />
              </button>

              <small>
                Submitting opens your email application to send
                the enquiry to {EMAIL}.
              </small>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
