import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthenReducer from './reducers';

const rootReducer = combineReducers({ AuthenReducer });

const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;