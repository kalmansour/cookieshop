import { combineReducers } from "redux";
import bakeryReducer from "./bakeryReducer";
import cookieReducer from "./cookieReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  bakeryReducer,
  cookieReducer,
  authReducer,
});

export default rootReducer;
