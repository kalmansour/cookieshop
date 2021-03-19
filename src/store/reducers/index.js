import { combineReducers } from "redux";
import cookieReducer from "./cookieReducer";
import bakeryReducer from "./bakeryReducer";

const rootReducer = combineReducers({
  bakeries: bakeryReducer,
  cookies: cookieReducer,
});

export default rootReducer;
