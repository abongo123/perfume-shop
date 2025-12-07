import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cartQty: item.cartQty + 1 }
            : item
        );
      }

      return [...prev, { ...product, cartQty: 1 }];
    });
  }

  // ✅ Remove Single Item
  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // ✅ Update Quantity
  function updateQuantity(id, qty) {
    if (qty < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQty: qty } : item
      )
    );
  }

  // ✅ ✅ ✅ CLEAR CART (THIS WAS MISSING)
  function clearCart() {
    setCart([]);
  }

  // ✅ Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0
  );

  // ✅ Total Items (for cart badge)
  const totalItems = cart.reduce(
    (sum, item) => sum + item.cartQty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,     // ✅ NOW EXPOSED
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
