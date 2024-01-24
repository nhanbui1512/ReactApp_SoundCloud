import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

//import components
import Layout from 'Layouts/DefaultLayout/Layout';
import Home from 'pages/Home/Home';
import Stream from 'pages/Stream/Stream';
import Library from 'pages/Library/Library';
import Upload from 'pages/Upload/Upload';
import Feed from 'pages/Feed';
import Signup from 'pages/signup/Signup';
import Login from 'pages/login/Login';
import Protected from 'pages/login/authentication/Protected';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Stream" element={<Stream />}></Route>
          <Route path="/Library" element={<Library />}></Route>
          <Route path="/Upload" element={<Upload />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
        </Route> */}

        {/* Login */}
        <Route path="/" element={<Outlet />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Protected />} >
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
              <Route path="/Stream" element={<Stream />}></Route>
              <Route path="/Library" element={<Library />}></Route>
              <Route path="/Upload" element={<Upload />}></Route>
              <Route path="/feed" element={<Feed />}></Route>
            </Route>
          </Route>
        </Route>
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
      {/* <ToastContainer /> */}
    </>
  );
};
export default App;



