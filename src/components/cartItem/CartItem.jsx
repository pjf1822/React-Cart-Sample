import { useContext } from "react";
import { CartContext } from "../../context/CartState.js";
import { NumericFormat } from "react-number-format";
import "./CartItem.css";
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />

      <div className="CartItem__contentWrapper">
        <div className="CartItem__name">{item.name}</div>
        <div className="CartItem__numberWrapper">
          <NumericFormat
            allowLeadingZeros
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <button
          className="CartItem__buttonHidden"
          onClick={() => removeItem(item._id)}
        >
          Remove
        </button>
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
