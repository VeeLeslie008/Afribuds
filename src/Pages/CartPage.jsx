import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/Cartcontext';
import CheckoutModal from '../Components/CheckOutModal';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  
  // State for the modal
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const getPrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(String(priceStr).replace(/[^0-9.]/g, '')) || 0;
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + (getPrice(item.price) * item.quantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-page__container cart-page__empty">
          <i className="fa-solid fa-basket-shopping cart-page__empty-icon"></i>
          <h2 className="cart-page__empty-title">Your cart is empty</h2>
          <p className="cart-page__empty-text">Looks like you haven't added any dishes yet.</p>
          <Link to="/menu" className="cart-page__empty-btn">Explore the Menu</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-page__container">
        <h1 className="cart-page__title">Your Order</h1>

        <div className="cart-page__layout">
          <div className="cart-page__items">
            {cartItems.map((item) => {
              const itemTotal = getPrice(item.price) * item.quantity;
              return (
                <div key={item.id} className="cart-page__item">
                  <img src={item.image} alt={item.name} className="cart-page__item-img" />
                  <div className="cart-page__item-info">
                    <h3 className="cart-page__item-name">{item.name}</h3>
                    <p className="cart-page__item-price">{item.price}</p>
                  </div>
                  <div className="cart-page__item-actions">
                    <div className="cart-page__qty">
                      <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="cart-page__item-total">
                      ${itemTotal.toFixed(2)}
                    </div>
                    <button type="button" className="cart-page__remove" onClick={() => removeFromCart(item.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="cart-page__summary">
            <h2 className="cart-page__summary-title">Order Summary</h2>
            <div className="cart-page__summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-page__summary-row">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="cart-page__summary-total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Trigger Modal Here */}
            <button 
              type="button" 
              className="cart-page__checkout-btn"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Proceed to Checkout
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </aside>
        </div>
      </div>

      {/* Render the Modal outside the layout */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        total={subtotal}
        cartItems={cartItems}
        clearCart={clearCart}
      />
    </section>
  );
}

export default CartPage;