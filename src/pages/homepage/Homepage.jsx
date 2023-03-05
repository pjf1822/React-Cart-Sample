import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";
import "./Homepage.css";
import useDebounce from "../../hooks/useDebounce";

import { CartContext } from "../../context/CartState.js";

const Homepage = () => {
  const { navHeight, searchBar } = useContext(CartContext);

  const debouncedSearchValue = useDebounce(searchBar, 1000);

  return (
    <div style={{ marginTop: navHeight + 20 }}>
      <div className="productsWrapper">
        {products
          .filter((post) => {
            if (searchBar === "") {
              return post;
            } else if (
              post.name
                .toLowerCase()
                .includes(debouncedSearchValue.toLowerCase())
            ) {
              return post;
            }
          })
          .map((product, i) => {
            return <ProductCard product={product} key={product._id} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
