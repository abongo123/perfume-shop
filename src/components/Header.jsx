import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ IMPORTANT FIX

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart(); // ✅ NOW THIS WORKS

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* ✅ Logo */}
        <h1 className="text-xl font-bold text-[#828c51]">TEDBEL PERFUMES</h1>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center text-sm font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop All</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            {/* ✅ CART ICON WITH BADGE */}
            <li>
              <Link to="/cart" className="relative">
                <ShoppingCart size={24} />

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Navigation */}
      {open && (
        <div className="md:hidden mt-4 px-4 pb-4 bg-white">
          <ul className="flex flex-col space-y-4 text-sm">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setOpen(false)}>Shop All</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

            {/* ✅ Mobile Cart with Badge */}
            <li>
              <Link 
                to="/cart" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                Cart
                {totalItems > 0 && (
                  <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

