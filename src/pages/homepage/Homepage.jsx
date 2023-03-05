import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";
import "./Homepage.css";

import { CartContext } from "../../context/CartState.js";

const Homepage = () => {
  const { navHeight, searchBar } = useContext(CartContext);

  console.log(
    products
      .filter((post) => {
        if (searchBar === "") {
          //if query is empty
          return post;
        } else if (post.name.toLowerCase().includes(searchBar.toLowerCase())) {
          //returns filtered array
          return post;
        }
      })
      .map((post, index) => (
        <div className="box" key={index}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ))
  );
  {
  }
  return (
    <div style={{ marginTop: navHeight + 20 }}>
      <div className="productsWrapper">
        {products
          .filter((post) => {
            if (searchBar === "") {
              return post;
            } else if (
              post.name.toLowerCase().includes(searchBar.toLowerCase())
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
