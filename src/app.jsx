import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import App from './components/App';

import './styles/styles.scss';

localStorage.getItem('test');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
