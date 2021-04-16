import { createStore } from "redux";

const initialState = {
  cartID: localStorage.getItem("id") || null,
  setReduxCartData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ID_TO_REDUX":
      return {
        ...state,
        cartID: action.payload.cartID,
      };
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
