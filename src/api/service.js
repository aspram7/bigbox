import { useLazyQuery, useMutation } from "@apollo/client";
import { CREATE_CART, ADD_ITEM_TO_CART, CART_QUERY } from "../GraphQl/queries";

export const useQueries = () => {
  const [setCreateCart, { data: createCartId }] = useMutation(CREATE_CART);

  const [setItemToCart, { data: cartItemData }] = useMutation(ADD_ITEM_TO_CART, {
    variables: {
      cartId: localStorage.getItem("id"),
    },
  });

  const [getCartData, { data: cartData }] = useLazyQuery(CART_QUERY, {
    variables: { cartId: localStorage.getItem("id") },
    fetchPolicy: "no-cache",
  });

  const [removeItemFromCart] = useLazyQuery(CART_QUERY);

  return {
    setCreateCart,
    createCartId,
    setItemToCart,
    cartItemData,
    getCartData,
    cartData,
    removeItemFromCart,
  };
};
