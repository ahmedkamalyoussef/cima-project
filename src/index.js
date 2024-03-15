import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import { Store } from './Redux/Store';
import { Provider } from 'react-redux';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);
 