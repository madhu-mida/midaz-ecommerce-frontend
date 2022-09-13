import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";

import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-3gjs06dq.us.auth0.com"
          clientId="jSuIHPYKrX90R7eEHaE67H8fMbJBXHkt"
          redirectUri={`${window.location.protocol}//${window.location.host}/account`}
        >
          <App />
        </Auth0Provider>
      </Provider>,
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
