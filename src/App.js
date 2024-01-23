import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//import components
import Layout from 'Layouts/DefaultLayout/Layout';
import Home from 'pages/Home/Home';
import Stream from 'pages/Stream/Stream';
import Library from 'pages/Library/Library';
import Upload from 'pages/Upload/Upload';
import Feed from 'pages/Feed';
import Login from 'pages/Login';
import HeaderOnly from 'Layouts/HeaderOnly';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Stream" element={<Stream />}></Route>
          <Route path="/Library" element={<Library />}></Route>
          <Route path="/Upload" element={<Upload />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
        </Route>
        <Route path="/login" element={<HeaderOnly />}>
          <Route path="/login" element={<Login></Login>} />
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
