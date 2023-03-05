import { useReducer, createContext } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

export const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    navHeight: 0,
    searchBar: "",
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

  const ourSearchFunction = (query) => {
    dispatch({ type: "SEARCH_BAR", payload: query });
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
        ourSearchFunction,
        searchBar: state.searchBar,
        navHeight: state.navHeight,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
