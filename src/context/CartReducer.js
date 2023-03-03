const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    case "SHOW_HIDE_CART": {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case "REMOVE_ITEM": {
      const firstItemMatch = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      state.cartItems.splice(firstItemMatch, 1);

      return {
        ...state,
        cartItems: state.cartItems,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
