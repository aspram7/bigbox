import { combineReducers } from "redux";
import cartReducer from "./reducer";
import signUpIdReducer from "./auth/reducer";

export default combineReducers({
  cartReducer,
  signUpIdReducer,
});
