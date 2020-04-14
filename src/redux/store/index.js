import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../../api/share';
import reducers from './root.reducer';

const middlewares = [promiseMiddleware, thunk.withExtraArgument(api)];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
