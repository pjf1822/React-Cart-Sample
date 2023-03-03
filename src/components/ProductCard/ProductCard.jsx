import { useContext } from "react";
import { CartContext } from "../../context/CartState.js";
import { NumericFormat } from "react-number-format";

import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <div className="productCard_contentWrapper">
          <h4 className="ProductCard__name">{product.name}</h4>
          <div className="ProductCard__price">
            <h5>
              <NumericFormat
                allowLeadingZeros
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </h5>
          </div>
          <button
            className="ProductCard__button"
            onClick={() => addToCart(product)}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
