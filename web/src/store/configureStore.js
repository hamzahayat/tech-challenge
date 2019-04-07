import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createReducer from './reducers';

let store;
let persistor;
const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage
};

export const configureStore = () => {
  const reducers = createReducer(history);
  const persistedReducer = persistReducer(persistConfig, reducers);

  const middlewares = Array.prototype.concat(
    [],
    [thunk, routerMiddleware(history)],
    process.env.NODE_ENV === 'development' ? [createLogger()] : []
  );

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares), responsiveStoreEnhancer);

  store = createStore(persistedReducer, enhancer);
  persistor = persistStore(store);
  store.asyncReducers = {};

  return {
    store,
    persistor,
    history
  };
};
