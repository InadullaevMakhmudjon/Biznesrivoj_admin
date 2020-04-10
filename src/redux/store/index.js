import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './root.reducer';

const middlewares = [promiseMiddleware, thunk];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
