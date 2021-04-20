import { types } from "./types";

const initialState = {
  cartID: localStorage.getItem("id") || null,
  setReduxCartData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ID_TO_REDUX:
      return {
        ...state,
        cartID: action.payload.cartID,
      };
    case types.CART_DATA:
      return {
        ...state,
        setReduxCartData: action.payload.cartData,
      };
    case types.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        setReduxCartData: action.payload.removeItem,
      };

    default:
      return state;
  }
};

export default reducer;
