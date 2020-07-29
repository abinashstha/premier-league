import { createStore, applyMiddleware, axiosMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const loggingMiddleware = (store) => (next) => (action) => {
  // console.info('%cINFO:', 'color: yellow', `Dispatching a ${action.type} action with payload:`, action.payload);
  const result = next(action);
  // console.info('%cNext State:','color: cyan', store.getState());
  return result;
};

const configureStore = (initialState = {}) => {
  // const client = axios.create({
  //   baseURL: 'http://192.168.0.29',
  //       responseType: 'json'
  //   });
  //   return createStore(rootReducer,initialState, applyMiddleware(axiosMiddleware(client)));

  const middleware = applyMiddleware(thunk, loggingMiddleware);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      middleware
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default configureStore;
