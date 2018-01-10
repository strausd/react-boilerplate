import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { counter } from '../reducers/baseReducer';

export default () => {
    const store = createStore(
        counter,
        applyMiddleware(thunk)
    );
    return store;   
}