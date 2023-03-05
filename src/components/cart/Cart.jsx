import { useContext } from "react";
import { CartContext } from "../../context/CartState.js";
import CartItem from "../cartItem/CartItem";
import { NumericFormat } from "react-number-format";

import "./Cart.css";
const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  return (
    <div style={{ backgroundColor: "yellow" }}>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4 style={{ fontSize: 17 }}>Cart is Empty</h4>
            ) : (
              <ul style={{ paddingLeft: 0 }}>
                {cartItems.map((item, i) => (
                  <CartItem key={`${item}${i}`} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>

            <div style={{ marginLeft: 5 }}>
              <NumericFormat
                allowLeadingZeros
                value={cartItems
                  .reduce((amount, item) => item.price + amount, 0)
                  .toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
