import { client } from "../../App";
import { SIGN_UP, SIGN_IN, SIGN_UP_CONFIRM } from "../../GraphQl/queries";

export const signUp = (firstName, lastName, username, password) => {
  return async (dispatch) => {
    if (client) {
      const signUp = await client.mutate({
        mutation: SIGN_UP,
        variables: { signUpData: { firstName, lastName, username, password } },
      });
      dispatch({
        type: "SIGN_UP",
        payload: {
          signUp: signUp.data.signUp,
        },
      });
    }
  };
};

// export const signUpConfirmCode = (username, confirmationCode, userId) => {
//   return async (dispatch) => {
//     if (client) {
//       const signUpConfirmCode = await client.mutate({
//         mutation: SIGN_UP_CONFIRM,
//         variables: {
//           username,
//           confirmationCode,
//           userId,
//         },
//       });
//       dispatch({
//         type: "SIGN_UP_CONFIRM",
//         payload: {
//           signUpConfirm: signUpConfirmCode,
//         },
//       });
//     }
//   };
// };

export const signIn = (username, password) => {
  return async (dispatch) => {
    if (client) {
      const signIn = await client.mutate({
        mutation: SIGN_IN,
        variables: { username, password },
      });
      localStorage.setItem("token", signIn.data.signIn.accessToken);
      dispatch({
        type: "SET_USER",
        payload: {
          signIn,
        },
      });
    }
  };
};
