import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.scss'
import {AuthContextProvider} from './AuthContext/authContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);