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
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   Outlet,
// } from "react-router-dom";
// import Protected from 'pages/login/authentication/Protected';
// import Login from 'pages/login/Login';
// import Signup from 'pages/signup/Signup';
// import Home from 'pages/Home/Home';
// import Layout from 'Layouts/DefaultLayout/Layout';
// import Stream from 'pages/Stream/Stream';
// import Library from 'pages/Library/Library';
// import Upload from 'pages/Upload/Upload';
// import Feed from 'pages/Feed';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Outlet />}>
//       <Route path="signup" element={<Signup />} />
//       <Route path="login" element={<Login />} />
//       <Route path="/" element={<Protected />} >
//         <Route path="/" element={<Layout />}>
//         <Route index element={<Home />}></Route>
//           <Route path="/Stream" element={<Stream />}></Route>
//           <Route path="/Library" element={<Library />}></Route>
//           <Route path="/Upload" element={<Upload />}></Route>
//           <Route path="/feed" element={<Feed />}></Route>
//         </Route>
//       </Route>
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );
