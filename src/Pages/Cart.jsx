import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0
  );

  return (
    <div
      className="min-h-screen px-6 py-16" >
      <div className="max-w-6xl mx-auto text-gray">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Your Cart</h1>
         {cart.length === 0 ? (
          <div className="text-center">
            <p className="mb-6 text-gray-900">Your cart is empty.</p>
            <Link to="/shop">
              <button className="bg-[#828c51] text-black px-6 py-3 rounded font-semibold hover:bg-[#6f7845] hover:text-white transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 bg-white/10 p-4 rounded-xl shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-28 h-28 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-900">
                      {item.type} • {item.size}ml
                    </p>
                    <p className="font-bold mt-1">
                      Kshs {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.cartQty - 1)
                        }
                        disabled={item.cartQty === 1}
                        className="px-3 py-1 bg-[#828c51] text-black rounded font-bold disabled:opacity-50">
                        −
                      </button>

                      <span className="font-semibold">
                        {item.cartQty}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.cartQty + 1)
                        }
                        className="px-3 py-1 bg-[#828c51] text-black rounded font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 text-sm">Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-md h-fit">
              <h3 className="text-xl font-semibold mb-6">
                Order Summary
              </h3>

              <div className="flex justify-between mb-4 text-sm">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>Total</span>
                <span>Kshs {total.toLocaleString()}</span>
              </div>

              <Link to="/checkout">
              <button className="bg-[#828c51] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#6f7845] transition text-center mb-4">Proceed to Checkout</button>
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-red-400 border border-red-400 py-2 rounded hover:bg-red-400 hover:text-white transition">
                Clear Cart
              </button>

              <Link to="/shop">
                <p className="text-center mt-4 underline text-sm text-gray-900">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


