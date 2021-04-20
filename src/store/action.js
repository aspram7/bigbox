import { client } from "../App";
import {
  CREATE_CART,
  ADD_ITEM_TO_CART,
  CART_QUERY,
  REMOVE_ITEM_FROM_CART,
} from "../GraphQl/queries";

export const createCart = () => {
  return async (dispatch) => {
    if (client) {
      const createCartId = await client.mutate({
        mutation: CREATE_CART,
      });
      localStorage.setItem("id", createCartId.data.createCart);
      dispatch({
        type: "ADD_ID_TO_REDUX",
        payload: {
          cartID: localStorage.getItem("id"),
        },
      });
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    if (client) {
      const cartData = await client.query({
        query: CART_QUERY,
        variables: { cartId: localStorage.getItem("id") },
        fetchPolicy: "no-cache",
      });
      dispatch({
        type: "CART_DATA",
        payload: {
          cartData: cartData.data.cart.items,
        },
      });
    }
  };
};

export const setItemToCart = (id, quantity) => {
  return async (dispatch) => {
    if (client) {
      const cartItemData = await client.mutate({
        mutation: ADD_ITEM_TO_CART,
        variables: {
          cartId: localStorage.getItem("id"),
          itemData: {
            productId: id,
            quantity: quantity,
          },
        },
      });
      dispatch({
        type: "CART_DATA",
        payload: {
          cartData: cartItemData.data.addItemToCart.items,
        },
      });
    }
  };
};

export const removeItemFromCart = (id) => {
  return async (dispatch) => {
    if (client) {
      const removeItem = await client.mutate({
        mutation: REMOVE_ITEM_FROM_CART,
        variables: {
          cartId: localStorage.getItem("id"),
          itemId: id,
        },
      });
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: {
          removeItem: removeItem.data.removeItemFromCart.items,
        },
      });
    }
  };
};
