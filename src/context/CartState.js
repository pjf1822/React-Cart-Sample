import { useReducer, createContext } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

export const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    navHeight: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: "SHOW_HIDE_CART" });
  };

  const setNavHeight = (height) => {
    dispatch({ type: "SET_NAV_HEIGHT", payload: height });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        setNavHeight,
        navHeight: state.navHeight,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
