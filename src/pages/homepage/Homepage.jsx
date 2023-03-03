import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";

import { CartContext } from "../../context/CartState.js";

const Homepage = () => {
  const { navHeight } = useContext(CartContext);

  return (
    <div style={{ marginTop: navHeight }}>
      {products.map((product, i) => {
        return <ProductCard product={product} key={product._id} />;
      })}
    </div>
  );
};

export default Homepage;
