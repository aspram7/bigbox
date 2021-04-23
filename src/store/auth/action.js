import { client } from "../../App";
import { SIGN_UP, SIGN_IN } from "../../GraphQl/queries";

export const signUpId = (firstName, lastName, username, password) => {
  return async (dispatch) => {
    if (client) {
      const signUpId = await client.mutate({
        mutation: SIGN_UP,
        variables: { signUpData: { firstName, lastName, username, password } },
      });
      // localStorage.setItem("signUpId", signUpId.data.userId);
      console.log(signUpId.data.userId, 999);
      dispatch({
        type: "SIGN_UP_ID",
        payload: {
          signUpId: localStorage.getItem("signUpId"),
        },
      });
    }
  };
};

export const signIn = (username, password) => {
  return async (dispatch) => {
    if (client) {
      const signIn = await client.mutate({
        mutation: SIGN_IN,
        variables: { username, password },
      });
      localStorage.setItem("user", signIn.data.signIn.accessToken);
      dispatch({
        type: "SET_USER",
        payload: {
          user: signIn,
        },
      });
    }
  };
};
