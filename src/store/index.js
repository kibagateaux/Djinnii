import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducers from '../reducers';
// import {branchRoutingMiddleware} from './middleware';
const storeMiddleware = applyMiddleware(reduxThunk, reduxLogger)(createStore);
const store = storeMiddleware(reducers);
export default store;