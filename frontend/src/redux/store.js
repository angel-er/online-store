import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const bindMiddleware = (middleware) => {
  console.log('Process.env; ', process.env);
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware(middlewares));
sagaMiddleware.run(rootSaga);
export {store};
