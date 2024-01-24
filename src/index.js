import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Protected from 'pages/login/authentication/Protected';
// import Login from 'pages/login/Login';
// import Signup from 'pages/signup/Signup';
// import Home from 'pages/Home/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="signup" element={<Signup />} />
//       <Route path="login" element={<Login />} />
//       <Route path="/" element={<Protected />} >
//         <Route path="/" index element={<Home />} />
//       </Route>
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );
