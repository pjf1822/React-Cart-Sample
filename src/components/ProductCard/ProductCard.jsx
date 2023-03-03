import { useContext } from "react";
import { CartContext } from "../../context/CartState.js";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h2>{product.name}</h2>

      <button
        className="ProductCard__button"
        onClick={() => addToCart(product)}
      >
        Add to basket
      </button>
    </div>
  );
};

export default ProductCard;
