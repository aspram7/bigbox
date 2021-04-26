import { combineReducers } from "redux";
import cartReducer from "./reducer";
import signUpReducer from "./auth/reducer";

export default combineReducers({
  cartReducer,
  signUpReducer,
});
