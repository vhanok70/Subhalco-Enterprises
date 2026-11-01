
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from "lucide-react";

const phone = "+917702310750";
const email = "info@subhalco.com";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const company = form.get("company");
    const product = form.get("product");
    const quantity = form.get("quantity");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Business Enquiry - ${product}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nProduct: ${product}\nQuantity: ${quantity}\nMessage: ${message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="page">
      <section className="inner-hero">
        <p>GET IN TOUCH</p>
        <h1>Let's Discuss Your Requirements</h1>
        <p>
          Contact Subhalco Enterprises for industrial metal
          product enquiries and business discussions.
        </p>
      </section>

      <section className="page-section contact-layout">
        <div>
          <h2>Contact Information</h2>

          <div className="contact-card">
            <Phone />
            <div>
              <h3>Phone</h3>
              <a href={`tel:${phone}`}>+91 77023 10750</a>
              <br />
              <a href="tel:+919390100750">+91 93901 00750</a>
            </div>
          </div>

          <div className="contact-card">
            <Mail />
            <div>
              <h3>Email</h3>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div className="contact-card">
            <MapPin />
            <div>
              <h3>Business Address</h3>
              <p>
                87/1108, Somsitty Nagar,
                Near Mother Land,
                Kurnool – 518002,
                Andhra Pradesh, India.
              </p>
            </div>
          </div>

          <a
            className="primary-button"
            href={`https://wa.me/${phone.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        <div className="contact-form-card">
          <h2>Send an Enquiry</h2>

          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input name="name" required placeholder="Enter your name" />

            <label>Company Name</label>
            <input name="company" placeholder="Enter company name" />

            <label>Product Required</label>
            <select name="product" required defaultValue="">
              <option value="" disabled>Select a product</option>
              <option>Aluminium Ingots A7</option>
              <option>Aluminium Ingots ADC12</option>
              <option>Aluminium Billets 6063</option>
              <option>Copper Cathodes</option>
              <option>Copper Millberry</option>
              <option>Other Non-Ferrous Metals</option>
            </select>

            <label>Required Quantity</label>
            <input name="quantity" placeholder="Enter quantity" />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Describe your requirements"
            />

            <button type="submit" className="primary-button">
              Submit Enquiry
            </button>
          </form>
          <p className="form-note">
            Submitting opens your email application to send the enquiry.
          </p>
        </div>
      </section>
    </main>
  );
}
