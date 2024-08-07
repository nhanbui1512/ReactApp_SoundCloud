import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//import components
import Layout from 'Layouts/DefaultLayout';
import Home from 'pages/Home/Home';
import Stream from 'pages/Stream/Stream';
import Library from 'pages/Library/Library';
import Upload from 'pages/Upload/Upload';
import Feed from 'pages/Feed';
import Search from 'pages/Search/Search';
import Login from 'pages/Login/index.jsx';
import HeaderOnly from 'Layouts/HeaderOnly';
import Signup from 'pages/signup/Signup';
import { ToastContainer } from 'react-toastify';
import Profile from 'pages/Profile/profile';
import GlobalLibrary from 'context/Library';
import ProfileByID from 'pages/Profile/ProfileByID/ProfileByID';
import Song from 'pages/DetailSong';
import PageNotFound from 'pages/Profile/ProfileByID/NotFound';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Stream" element={<Stream />}></Route>
          <Route
            path="/Library/*"
            element={
              <GlobalLibrary>
                <Library />
              </GlobalLibrary>
            }
          ></Route>
          <Route path="/Upload" element={<Upload />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
          <Route path="/:id/*" element={<ProfileByID />}></Route>
          <Route path="/notfound" element={<PageNotFound />}></Route>
          <Route path="/song/:id/*" element={<Song />}></Route>
        </Route>
        <Route path="/login" element={<HeaderOnly />}>
          <Route index element={<Login></Login>} />
        </Route>
        <Route path="/signup" element={<HeaderOnly />}>
          <Route index element={<Signup></Signup>} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        style={{
          fontSize: 14,
        }}
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable
      />
    </>
  );
};
export default App;
