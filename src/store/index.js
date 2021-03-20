import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Combined Reducer
import rootReducer from "../store/reducers/index";

// Actions
import { fetchCookies } from "../store/actions/cookieActions";
import { fetchBakeries } from "../store/actions/bakeryActions";
import { checkForToken } from "../store/actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCookies());
store.dispatch(fetchBakeries());
store.dispatch(checkForToken());

export default store;
