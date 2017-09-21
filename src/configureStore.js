import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

export default function configureStore (preloadedState, history) {
  const middlewares = [thunk, logger];
  if (history) {
    middlewares.push(routerMiddleware(history));
  }
  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store;
}
