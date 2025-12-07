import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-lg font-bold mb-2 text-[#828c51]">
            TEDBEL PERFUMES
          </h2>
          <p className="text-sm text-gray-500">
            Luxury fragrances crafted to match your personality. Long-lasting,
            authentic, and unforgettable.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">
            Email: <span className="text-gray-300">beldinewechuli@gmail.com</span>
          </p>
          <p className="text-sm text-gray-400">
            Phone: <span className="text-gray-300">+254 708 684 738</span>
          </p>
          <p className="text-sm text-gray-400 mb-3">
            Location: <span className="text-gray-300">Nairobi, Kenya</span>
          </p>

          <div className="flex gap-4 mt-2 text-sm">
            <span className="cursor-pointer hover:text-[#828c51] transition">
              Instagram
            </span>
            <span className="cursor-pointer hover:text-[#828c51] transition">
              Facebook
            </span>
            <span className="cursor-pointer hover:text-[#828c51] transition">
              WhatsApp
            </span>
          </div>
        </div>

      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Tedbel Perfumes. All rights reserved.
      </div>
    </footer>
  );
}
