import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "./hooks/react-auth0-spa";
import Config from "./auth0_config.json";
import History from "./utils/history";

const onRedirectCallback = (appState) => {
  History.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
}

ReactDOM.render(
  <Auth0Provider
    domain={Config.domain}
    client_id={Config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={Config.audience}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
