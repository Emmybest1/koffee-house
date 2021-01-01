import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './root.reducer';

const middlewares = [reduxThunk];
process.env.NODE_ENV === 'development' && middlewares.push(logger);

const composeEnhancers = composeWithDevTools({
  name: 'redux',
  trace: true,
  realtime: true,
  traceLimit: 20,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
