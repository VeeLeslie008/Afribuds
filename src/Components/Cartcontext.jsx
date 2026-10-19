import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Automatically calculate total item count for the Navbar badge
  const cartCount = cartItems.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  function addToCart(dish) {
    setCartItems(function (prev) {
      const existing = prev.find(function (item) {
        return item.id === dish.id;
      });

      if (existing) {
        // If item exists, increase quantity
        return prev.map(function (item) {
          return item.id === dish.id
            ? Object.assign({}, item, { quantity: item.quantity + 1 })
            : item;
        });
      }
      
      // If new, add to cart with quantity 1
      return [...prev, Object.assign({}, dish, { quantity: 1 })];
    });
  }

  function removeFromCart(id) {
    setCartItems(function (prev) {
      return prev.filter(function (item) {
        return item.id !== id;
      });
    });
  }

  function updateQuantity(id, amount) {
    setCartItems(function (prev) {
      return prev.map(function (item) {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          // Prevent quantity from going below 1
          return Object.assign({}, item, { quantity: newQty > 0 ? newQty : 1 });
        }
        return item;
      });
    });
  }

  // Add this new function
  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}