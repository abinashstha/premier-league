import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const loggingMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(thunk, loggingMiddleware);
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      middleware
    )
  );
  return store;
};

export default configureStore;
