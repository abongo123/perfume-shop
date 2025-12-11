import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopAll from "./Pages/ShopAll";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";

export default function App() {
  return (
    <Router>
      <div
        style={{ background: "linear-gradient(to bottom,#f7c8b3,#FFFFFF,#F2F2F2)" }}
        className="min-h-screen w-full text-gray-900"
      >
        {/* ✅ STATIC HEADER */}
        <Header />

        {/* ✅ MAIN PAGE CONTENT */}
        <div className="max-w-7xl mx-auto pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopAll />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>

        {/* ✅ FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}


