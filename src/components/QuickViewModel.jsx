import { X, Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/wishlistContext";

export default function QuickViewModal({ product, close }) {
  const { addToCart } = useCart(); // ✅ Cart context
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // ✅ Wishlist context
  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.some((item) => item.id === product.id)
  );

  const handleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      setIsInWishlist(false);
    } else {
      addToWishlist(product);
      setIsInWishlist(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-6 w-11/12 max-w-md relative"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />

        {/* TITLE & PRICE */}
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500 mt-1">
          {product.size}ml • Kshs {product.price.toLocaleString("en-KE")}
        </p>

        {/* RATINGS */}
        <div className="flex items-center gap-1 text-yellow-400 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className="fa-solid fa-star text-sm"></i>
          ))}
          <span className="text-gray-600 text-sm ml-2">(24 reviews)</span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm text-gray-600">
          {product.description || "A premium long-lasting niche fragrance made with high-quality oils."}
        </p>

        {/* WISHLIST BUTTON */}
        <button
          onClick={handleWishlist}
          className={`
            mt-4 flex items-center gap-2 py-2 px-4 rounded-md border w-full justify-center transition
            ${isInWishlist ? "border-red-500 text-red-500" : "border-gray-400 text-gray-700"}
          `}
        >
          <Heart
            size={18}
            className={`transition ${isInWishlist ? "fill-red-500 text-red-500" : ""}`}
          />
          {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
        </button>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-[#828c51] hover:bg-[#6f7845] text-white px-4 py-2 rounded-md transition"
        >
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
}

