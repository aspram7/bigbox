import { types } from "./types";

const initialState = {
  signUpId: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const signUpIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP_ID:
      return {
        ...state,
        signUpId: action.payload.signUpId,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default signUpIdReducer;
