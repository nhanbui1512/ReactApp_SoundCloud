import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

//import components
import Layout from "Layout/Layout";
import Home from "components/Home/Home";
import Stream from "components/Stream/Stream";
import Library from "components/Library/Library";
import Upload from "components/Upload/Upload";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/Stream" element={<Stream />}></Route>
                    <Route path="/Library" element={<Library/>}></Route>
                    <Route path="/Upload" element={<Upload/>}></Route>
                </Route>
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router} />
            {/* <ToastContainer /> */}
        </>
    )
}
export default App;