import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from 'GlobalStyles';
import { isMobile } from 'react-device-detect';
import { ToastProvider } from './context/ToastContext.js';
import Storage from 'context/Storage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Storage>
        <ToastProvider>
          {isMobile ? <div>Mobile app</div> : <App />}
          {/* <App /> */}
          {/* <App /> */}
        </ToastProvider>
      </Storage>
    </GlobalStyles>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

