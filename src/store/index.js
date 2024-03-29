import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [
    applyMiddleware(thunk),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []),
];

const enhancer = compose(...middlewares);

const store = (initialState = {}) => {
    return createStore(rootReducer, initialState, enhancer);
};

export default store;
