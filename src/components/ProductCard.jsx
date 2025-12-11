import { useState } from "react";
import { useCart } from "../context/CartContext";
import QuickViewModal from "./QuickViewModel"; // make sure file name matches

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showQuickView, setShowQuickView] = useState(false);

  const BASE_URL = import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://my-backend.vercel.app";

  return (
    <>
      <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={`${BASE_URL}${product.image}`}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
            <button
              onClick={() => setShowQuickView(true)}
              className="bg-white text-black text-sm px-4 py-2 rounded-md font-semibold"
            >
              Quick View
            </button>
          </div>

          {product.badge && (
            <span className="absolute top-2 left-2 bg-[#828c51] text-black text-xs px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
          <p className="text-gray-600 text-sm">
            Kshs {product.price.toLocaleString("en-KE")}
          </p>
          <p className="text-xs text-gray-500">Size: {product.size}ml</p>

          <button
            onClick={() => addToCart(product)}
            className="w-full mt-3 bg-[#828c51] text-black py-2 rounded-md text-sm font-semibold hover:opacity-90 transition active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {showQuickView && (
        <QuickViewModal
          product={product} // ✅ pass only product
          close={() => setShowQuickView(false)}
        />
      )}
    </>
  );
}


