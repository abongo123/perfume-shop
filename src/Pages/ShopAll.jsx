import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";

export default function ShopAll() {
  const categories = ["Floral", "Woody", "Fresh", "Citrus"];
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    type: "All",
    price: 0,
    quantity: 0,
    size: "All",
  });

  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const highest = Math.max(...data.map((p) => p.price));
        setMaxPrice(highest);
        setFilters((prev) => ({ ...prev, price: highest }));
      });
  }, []);

  // Filter products
  let filteredProducts = products.filter((product) => {
    const matchType = filters.type === "All" || product.type === filters.type;
    const matchPrice = product.price <= filters.price;
    const matchQty = product.quantity >= filters.quantity;
    const matchSize = filters.size === "All" || product.size === Number(filters.size);
    return matchType && matchPrice && matchQty && matchSize;
  });

  // Sort products
  if (sort === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

  function clearFilters() {
    setFilters({ type: "All", price: maxPrice, quantity: 0, size: "All" });
  }

  return (
    <div
      className="flex min-h-screen pt-24"
      style={{ background: "linear-gradient(to bottom,#f7c8b3,#FFFFFF,#F2F2F2)" }}
    >
      {/* MOBILE FILTER BUTTON */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setShowFilters(true)}
          className="bg-black text-white px-6 py-2 rounded-full shadow-md"
        >
          ☰ Filters
        </button>
      </div>

      {/* SIDEBAR */}
      <SidebarFilters
        categories={categories}
        filters={filters}
        setFilters={setFilters}
        maxPrice={maxPrice}
        show={showFilters}
        close={() => setShowFilters(false)}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {/* TOP BAR */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* BREADCRUMB */}
          <div className="text-sm text-gray-600">
            <Link to="/" className="underline mr-2">Home</Link> / 
            <span className="ml-2">All Products</span>
          </div>

          {/* SORT + CLEAR */}
          <div className="flex items-center gap-4">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border p-2 rounded-md text-sm"
            >
              <option value="default">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>

            <button
              onClick={clearFilters}
              className="border border-[#828c51] text-[#828c51] px-3 py-1 text-sm rounded-md hover:bg-[#828c51] hover:text-white transition"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* PRODUCT COUNT */}
        <p className="text-sm mb-4 text-gray-600">
          Showing {filteredProducts.length} products
        </p>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white border border-[#F2F2F2] shadow-md rounded-lg">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 space-y-3">
              <p>No products match your filters.</p>
              <button onClick={clearFilters} className="underline text-sm">
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
