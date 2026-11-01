
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";

import "./styles.css";

function Layout() {
  return (
    <div className="subhalco">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
