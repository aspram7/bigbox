import { types } from "./types";

const initialState = {
  signUp: null,
  // signUpConfirm: false,
  // token: JSON.parse(localStorage.getItem("token")) || null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        signUp: action.payload.signUp,
      };
    // case types.SIGN_UP_CONFIRM:
    //   return {
    //     ...state,
    //     signUpConfirm: action.payload.signUpConfirm,
    //   };
    case types.SET_USER:
      console.log(JSON.parse(localStorage.getItem("user")), 777);
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default signUpReducer;
