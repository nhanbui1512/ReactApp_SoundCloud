import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import GlobalStyles from 'GlobalStyles';
import { isMobile } from 'react-device-detect';
import { ToastProvider } from './context/ToastContext.js';
import Storage from 'context/Storage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GlobalStyles>
    <Storage>
      <ToastProvider>{isMobile ? <div>Mobile app</div> : <App />}</ToastProvider>
    </Storage>
  </GlobalStyles>,
);
