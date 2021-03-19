import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../store/reducers/index";

// Actions
import { fetchCookies } from "../store/actions/cookieActions";
import { fetchBakeries } from "../store/actions/bakeryActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCookies());
store.dispatch(fetchBakeries());

export default store;
