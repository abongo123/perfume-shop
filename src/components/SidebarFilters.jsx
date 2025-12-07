import { useEffect } from "react";
import { X } from "lucide-react";

export default function SidebarFilters({
  categories,
  filters,
  setFilters,
  maxPrice,
  show,
  close,
}) {
  // Disable scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  return (
    <>
      {/* Overlay for mobile */}
      {show && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-16 md:top-0 left-0 z-50
          w-64 p-5 max-h-[calc(100vh-4rem)]
          overflow-y-auto bg-[#828c51] text-white
          transform transition-transform duration-300 ease-in-out
          shadow-lg
          ${show ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button onClick={close}>
            <X size={22} />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-white">All Products</h3>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => setFilters({ ...filters, type: "All" })}
              className={`cursor-pointer transition hover:text-yellow-200 ${
                filters.type === "All" ? "underline font-semibold" : ""
              }`}
            >
              All Products
            </li>

            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setFilters({ ...filters, type: cat })}
                className={`cursor-pointer transition hover:text-yellow-200 ${
                  filters.type === cat ? "underline font-semibold" : ""
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Filters */}
        <div>
          <h3 className="font-semibold mb-5 text-yellow-100">Filter By:</h3>

          {/* Price */}
          <div className="mb-6">
            <label className="block text-sm mb-2">
              Kshs 0 – Kshs {filters.price.toLocaleString("en-KE")}
            </label>
            <input
              type="range"
              min="0"
              max={maxPrice || 10000} // fallback in case maxPrice is 0
              step="1"
              value={filters.price}
              onChange={(e) =>
                setFilters({ ...filters, price: Number(e.target.value) })
              }
              className="w-full cursor-pointer accent-yellow-400"
            />
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Minimum Quantity</label>
            <input
              type="number"
              min="0"
              value={filters.quantity}
              onChange={(e) =>
                setFilters({ ...filters, quantity: Number(e.target.value) })
              }
              className="w-full p-2 rounded text-black outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm mb-2">Size (ml)</label>
            <select
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              className="w-full p-2 rounded text-black outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="All">Any</option>
              <option value="30">30ml</option>
              <option value="50">50ml</option>
              <option value="75">75ml</option>
              <option value="100">100ml</option>
            </select>
          </div>
        </div>
      </aside>
    </>
  );
}
