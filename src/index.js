import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton';
//As we are using Autho we can use domain and client id
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Login/>
      <LogoutButton/>
        <App />
      </Auth0Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
