import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

      {/* IMAGE WRAPPER */}
      <div className="relative w-full h-56 overflow-hidden">
        {/* PRODUCT IMAGE */}
        <img
          src={`http://localhost:5000${product.image}`} // backend URL
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* QUICK VIEW OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <button className="bg-white text-black text-sm px-4 py-2 rounded-md font-semibold">
            Quick View
          </button>
        </div>

        {/* OPTIONAL BADGE */}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-[#828c51] text-black text-xs px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* PRODUCT INFO */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>

        <p className="text-gray-600 text-sm">
          Kshs {product.price.toLocaleString("en-KE")}
        </p>

        <p className="text-xs text-gray-500">Size: {product.size}ml</p>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-3 bg-[#828c51] text-black py-2 rounded-md text-sm font-semibold hover:opacity-90 transition active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
