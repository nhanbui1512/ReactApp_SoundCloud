import React, { useState } from 'react';
import {
    BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';

import classNames from "classnames/bind";
import styles from './Library.module.scss'
//import page
import Overview from './Overview';
import Likes from "./Likes";
import Playlists from "./Playlists";
import Following from "./Following";

const cx = classNames.bind(styles);

const Library = () => {

    const Librarys = ['Overview', 'Likes', 'Playlists', 'Following', 'History']

    const [library, setLibrary] = useState('Overview')

    return (
        
        <div className={cx("app")}>
            <div style={{display: "flex"}}>
                {Librarys.map((Library, index) => (
                <NavLink
                    className={(nav) => cx("navbar", { active: nav.isActive })}
                    
                    to={'/library/'+Library}
                    onClick={() => setLibrary(Library)} 
                    key={index}
                >
                    {Library}
                </NavLink>
                ))}
            </div>
            <Routes>
                <Route index path='/Overview' element={<Overview/>}/>
                <Route path='/Likes' element={<Likes/>} />
                <Route path='/Playlists' element={<Playlists/>} />
                <Route path='/Following' element={<Following/>} />
            </Routes>
        </div>
    );
    };
export default Library;