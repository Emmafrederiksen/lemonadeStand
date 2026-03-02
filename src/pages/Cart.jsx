import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../redux/cartSlice";

import "./Cart.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>Cart 🛒</h1>

      {cartItems.length === 0 && (
        <div className="empty-cart">
          <p>Your cart is empty 🍋</p>
        </div>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div key={item.idDrink} className="drink-card">
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="drink-image"
                />

                <div className="drink-content">
                  <h3>{item.strDrink}</h3>

                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.idDrink))}>
                      –
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(addToCart(item))}>
                      +
                    </button>
                  </div>

                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.idDrink))}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2>Checkout Summary</h2>
            <p>Total items: {totalItems}</p>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}