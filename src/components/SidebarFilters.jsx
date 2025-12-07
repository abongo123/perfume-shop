import { X } from "lucide-react";

export default function SidebarFilters({
  categories,
  filters,
  setFilters,
  maxPrice,
  show,
  close,
}) {
  return (
    <>
      {show && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
      <aside
        className={`
          fixed md:static top-16 md:top-0 left-0 z-40
          w-64 p-5 max-h-[calc(100vh-4rem)]
          overflow-y-auto 
          transform transition-transform duration-300
          ${show ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        style={{ backgroundColor: "#828c51", color: "white" }}
      >
        <div className="md:hidden flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button onClick={close}>
            <X size={22} />
          </button>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-black">
            All Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => setFilters({ ...filters, type: "All" })}
              className={`cursor-pointer transition hover:text-black ${
                filters.type === "All" ? "underline text-white" : ""
              }`}
            >
              All Products
            </li>

            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setFilters({ ...filters, type: cat })}
                className={`cursor-pointer transition hover:text-black ${
                  filters.type === cat
                    ? "underline text-white"
                    : ""
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-5 text-[#828c51]">
            Filter By:
          </h3>
          <div className="mb-6">
            <label className="block text-sm mb-2">
              Kshs 0 – Kshs{" "}
              {filters.price.toLocaleString("en-KE")}
            </label>
            <input
              type="range"
              min="0"
              max={maxPrice}
              step="1"
              value={filters.price}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  price: Number(e.target.value),
                })
              }
              className="w-full cursor-pointer accent-black"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">
              Minimum Quantity
            </label>
            <input
              type="number"
              min="0"
              value={filters.quantity}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  quantity: Number(e.target.value),
                })
              }
              className="w-full p-2 rounded text-black outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">
              Size (ml)
            </label>
            <select
              value={filters.size}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  size: e.target.value,
                })
              }
              className="w-full p-2 rounded text-black outline-none"
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
