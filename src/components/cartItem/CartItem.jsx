import { useContext } from "react";
import { CartContext } from "../../context/CartState.js";
import { NumericFormat } from "react-number-format";
import "./CartItem.css";
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div>
        {item.name}{" "}
        <NumericFormat
          allowLeadingZeros
          value={item.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
