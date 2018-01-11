import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import App from './components/App';

// TODO
// Production webpack build scripts
// Cleanup for solid boilerplate
// lazy loading like Angular has

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));