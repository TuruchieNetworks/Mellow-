import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import theme from './theme';
import { createStore } from 'fluxible-js';
import App from './App';
import reportWebVitals from './reportWebVitals';

InitializeStore({
  initialStore: {
    authUser: null
  },
  persist: {
    syncStorage: window.localStorage,
    restore ({ authUser }) {
      return { authUser };
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
