import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const Context = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: "SHOWCART", payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: "ADDTOCART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVEITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;
