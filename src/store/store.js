import { createStore } from "redux";

const initialState = {
  setReduxCartData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_DATA":
      return {
        ...state,
        setReduxCartData: action.payload.cartData,
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        setReduxCartData: action.payload.cartData,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
