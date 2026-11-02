"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, CheckCircle, Clock, Award, Shield } from "lucide-react";

export default function SubhalcoPortal() {
  const [form, setForm] = useState({ product: "Aluminium", email: "", message: "" });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Quote Request: ${form.product}`);
    const body = encodeURIComponent(`Product: ${form.product}\nEmail: ${form.email}\nRequirements:\n${form.message}`);
    window.location.href = `mailto:info@subhalco.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* TOP BAR */}
      <div className="bg-blue-950 text-slate-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Industrial Metals & Materials — Delivering Across India</span>
          <div className="flex gap-6">
            <a href="mailto:info@subhalco.com" className="flex items-center gap-2 hover:text-white"><Mail size={14} /> info@subhalco.com</a>
            <a href="tel:+917702310750" className="flex items-center gap-2 hover:text-white"><Phone size={14} /> +91 77023 10750</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 text-amber-500 font-bold text-2xl flex items-center justify-center">S</div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-blue-950 tracking-wide">SUBHALCO</span>
              <span className="text-[10px] font-bold text-amber-600 tracking-[0.2em] uppercase">Enterprises</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-amber-600 transition">About Us</a>
            <a href="#products" className="hover:text-amber-600 transition">Our Products</a>
            <a href="#certificates" className="hover:text-amber-600 transition">Certifications</a>
            <a href="#contact" className="hover:text-amber-600 transition">Contact Us</a>
          </nav>

          <a href="#quote" className="bg-amber-500 hover:bg-amber-600 text-blue-950 text-sm font-bold py-2.5 px-6 rounded transition shadow-md">
            GET A QUOTE
          </a>
        </div>
      </header>

      {/* HERO SECTION WITH QUOTE FORM */}
      <section className="relative bg-blue-900 py-16 md:py-24">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000')] bg-cover bg-center mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-amber-400 font-bold tracking-widest text-sm uppercase">Delivering Pan-India</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 mb-6">
              Your Trusted Aluminium, Copper & Brass Partner
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Reliable metal sourcing and supply backed by industry expertise. Subhalco Enterprises serves customers with products selected for dependable quality and practical applications.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded"><Shield size={18} className="text-amber-400"/> Quality Assured</div>
              <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded"><Clock size={18} className="text-amber-400"/> Rapid Dispatch</div>
            </div>
          </div>

          {/* Quick Quote Form (Like NFC Solution) */}
          <div className="bg-white p-8 rounded-lg shadow-xl" id="quote">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Request a Quick Quote</h3>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Choose Product Type *</label>
                <select 
                  className="w-full border border-slate-300 p-3 rounded text-sm focus:ring-2 focus:ring-blue-900 outline-none"
                  value={form.product}
                  onChange={(e) => setForm({...form, product: e.target.value})}
                >
                  <option>Aluminium Ingots / Billets</option>
                  <option>Copper Cathodes / Scrap</option>
                  <option>Brass Products</option>
                  <option>Other Non-Ferrous</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Email Address *</label>
                <input 
                  type="email" required placeholder="yourname@company.com" 
                  className="w-full border border-slate-300 p-3 rounded text-sm focus:ring-2 focus:ring-blue-900 outline-none"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Message / Requirements</label>
                <textarea 
                  rows={3} placeholder="Quantity, Grade, Destination..."
                  className="w-full border border-slate-300 p-3 rounded text-sm focus:ring-2 focus:ring-blue-900 outline-none"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded transition">
                SEND ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* METRICS / TRUST STRIP */}
      <section className="bg-amber-500 text-blue-950 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-blue-950/20">
          <div>
            <div className="text-3xl font-extrabold mb-1">Quality</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Material Focus</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold mb-1">50+</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Business Clients</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold mb-1">100+</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Tons Monthly Volume</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold mb-1">3-5 Days</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Delivery Pan India</div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS & CERTIFICATIONS */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950">Documents & Certifications</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4"></div>
            <p className="text-slate-600">Access Subhalco Enterprises' business registrations and compliance credentials.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "GST Registration", sub: "Goods & Services Tax" },
              { title: "MSME / Udyam", sub: "Ministry of Micro, Small & Medium Enterprises" },
              { title: "IEC Certificate", sub: "Import Export Code Registration" }
            ].map((cert) => (
              <div key={cert.title} className="border border-slate-200 p-6 rounded-lg hover:shadow-lg transition flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded text-blue-900"><Award size={24} /></div>
                <div>
                  <h3 className="font-bold text-blue-950 mb-1">{cert.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{cert.sub}</p>
                  <button className="text-sm text-amber-600 font-bold flex items-center gap-1 hover:text-blue-900">
                    <Download size={14} /> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-slate-400 py-12 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">SUBHALCO ENTERPRISES</h3>
            <p className="text-sm mb-4">Your trusted partner for high-quality non-ferrous products. We provide premium solutions to businesses across India, ensuring reliability and excellence.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Registered Office</h3>
            <p className="text-sm flex items-start gap-2"><MapPin size={16} className="mt-1 flex-shrink-0 text-amber-500"/> 87/1108, Somsitty Nagar, Near Mother Land, Kurnool – 518002, Andhra Pradesh</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm flex items-center gap-2 mb-2"><Phone size={16} className="text-amber-500"/> +91 77023 10750</p>
            <p className="text-sm flex items-center gap-2 mb-2"><Phone size={16} className="text-amber-500"/> +91 93901 00750 (WhatsApp)</p>
            <p className="text-sm flex items-center gap-2"><Mail size={16} className="text-amber-500"/> info@subhalco.com</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
