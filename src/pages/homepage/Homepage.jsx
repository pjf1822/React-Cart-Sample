import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";

const Homepage = () => {
  return (
    <div>
      {products.map((product, i) => {
        return <ProductCard product={product} key={product._id} />;
      })}
    </div>
  );
};

export default Homepage;
