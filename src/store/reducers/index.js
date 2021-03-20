import { combineReducers } from "redux";
import bakeryReducer from "./bakeryReducer";
import cookieReducer from "./cookieReducer";

const rootReducer = combineReducers({
  bakeries: bakeryReducer,
  cookies: cookieReducer,
});

export default rootReducer;
