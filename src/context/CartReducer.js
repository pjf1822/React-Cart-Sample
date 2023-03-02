const CartReducer = (state, action) => {
  switch (action.type) {
    case "SHOWCART": {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case "ADDTOCART": {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case "REMOVEITEM": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
