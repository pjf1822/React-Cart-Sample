import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";

const Homepage = () => {
  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default Homepage;
