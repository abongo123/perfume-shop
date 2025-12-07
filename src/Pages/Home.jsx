import { Link } from "react-router-dom";
import perfume1 from "../assets/perfume1.jpg";
import perfume2 from "../assets/perfume2.jpg";
import perfume3 from "../assets/perfume3.jpg";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom,#f7c8b3,#FFFFFF,#F2F2F2)",
      }}
      className="px-6 py-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Luxury Fragrances
        </h1>

        <p className="text-sm md:text-base mb-6 text-gray-600">
          Premium perfumes crafted for elegance, confidence and long-lasting impression.
        </p>

        <Link to="/shop">
          <button className="bg-[#828c51] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#6f7845] hover:text-white transition">
            Shop Now
          </button>
        </Link>
      </div>
      {/* Product preview cards */}
<div className="mt-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
    Featured Perfumes
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        name: "Rose Elegance",
        price: 3500,
        type: "Floral",
        image: perfume1,
      },
      {
        name: "Ocean Breeze",
        price: 4200,
        type: "Fresh",
        image: perfume2,
      },
      {
        name: "Midnight Oud",
        price: 5800,
        type: "Woody",
        image: perfume3,
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl border border-[#F2F2F2] shadow-md overflow-hidden group hover:shadow-xl transition"
      >
        {/* Image */}
        <div className="h-56 overflow-hidden relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 left-3 bg-[#828c51] text-black text-xs px-3 py-1 rounded-full">
            {item.type}
          </span>
        </div>

        {/* Info */}
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>

          <p className="text-sm text-gray-600 mb-2">
            Premium long-lasting fragrance
          </p>

          <p className="font-bold mb-3">
            Kshs {item.price.toLocaleString()}
          </p>

          <Link to="/shop">
            <button className="w-full bg-[#828c51] text-black py-2 rounded-md font-semibold hover:bg-[#6f7845] hover:text-white transition">
              View Product
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Why Choose Us */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Long Lasting</h3>
            <p className="text-sm text-gray-600">
              Our fragrances last all day with rich premium oils.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Authentic</h3>
            <p className="text-sm text-gray-600">
              100% original designer and niche fragrances.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Affordable Luxury</h3>
            <p className="text-sm text-gray-600">
              Premium quality at competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
