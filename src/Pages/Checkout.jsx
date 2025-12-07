import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const [loading, setLoading] = useState(false); // ✅ loading state
  const [success, setSuccess] = useState(false); // ✅ success state

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.location) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true); // start loading

    // ✅ simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        clearCart();
        setSuccess(false);
        navigate("/");
      }, 2500); // show success animation 2.5s
    }, 1500); // simulate 1.5s "processing" delay
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">

      {/* ✅ SUCCESS MODAL */}
      {success && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl flex flex-col items-center space-y-4">
            <svg
              className="w-20 h-20 text-green-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-2xl font-bold">Order Placed!</h2>
            <p className="text-gray-600 text-center">
              Thank you for your purchase. Redirecting to home...
            </p>
          </div>
        </div>
      )}

      {/* CUSTOMER FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5 relative"
      >
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 rounded-xl">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#828c51] rounded-full animate-spin"></div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            disabled={loading} // prevent typing during loading
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Delivery Location</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-[#828c51] text-white py-3 rounded-md font-semibold hover:bg-[#6f7845] transition flex justify-center items-center`}
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-black rounded-full animate-spin"></div>
          ) : (
            "Place Order"
          )}
        </button>
      </form>

      {/* ORDER SUMMARY */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm">Qty: {item.cartQty}</p>
              </div>
              <p className="font-semibold">
                Kshs {(item.price * item.cartQty).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>Kshs {total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
