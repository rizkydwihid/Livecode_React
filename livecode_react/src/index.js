import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRoute from './AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from './Store';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById("root");
const render = Componet =>
ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
    <Componet />
    </BrowserRouter>
    </Provider>,
    rootEl
);
render(AppRoute);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
