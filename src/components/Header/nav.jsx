import './nav.css';
import { FaSoundcloud } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation} from "react-router-dom";


const Nav = () => {
   const location = useLocation();
   const [currentPath, setCurrentPath] = useState("");
   useEffect(() => {
      setCurrentPath(location.pathname);
    }, [location]);

   return (
      <>
         <div className="main">
            <header className="header">
               <div className="header-container">
                  <div className="header-container__left">
                     <div className="header-container__left-logo">
                        <i className="logo-icon fa-brands fa-soundcloud"><FaSoundcloud /></i>
                     </div>

                     <Link 
                        to="/" 
                        // className="header-container__bar-items background-black border-right"
                        className={`header-container__bar-items  border-right ${
                           currentPath === "/" ? "active" : ""
                        }`}
                     >
                        Home
                     </Link>

                     <Link 
                        to="/Stream" 
                        // className="header-container__bar-items border-right"
                        className={`header-container__bar-items border-right ${
                           currentPath === "/Stream" ? "active" : ""
                        }`}
                     >
                        Stream
                     </Link>

                     <Link 
                        to="/Library" 
                        // className="header-container__bar-items border-right"
                        className={`header-container__bar-items border-right ${
                           currentPath === "/Library" ? "active" : ""
                        }`}
                     >
                        Library
                     </Link>
                  </div>
                  <div className="header-search relative">
                     <input placeholder="Search" className="search-input" type="text" />
                     <button className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                     </button>

                     <ul className="search-result-container" >

                        <li className="search-result-item background-333">

                           <span className="search-result-item_icon ">
                              <i className="fa-solid fa-magnifying-glass"></i>
                           </span>

                           <span>
                              Search for
                           </span>
                        </li>

                        <li className="search-result-item">

                           <span className="search-result-item_icon ">
                              <i className="fa-solid fa-magnifying-glass"></i>
                           </span>

                           <span>
                              Head In The Clouds HayD
                           </span>
                        </li>

                        <li className="search-result-item">

                           <span className="search-result-item_icon ">
                              <i className="fa-solid fa-magnifying-glass"></i>
                           </span>

                           <span>
                              Healling Music
                           </span>
                        </li>

                        <li className="search-result-item">

                           <span className="search-result-item_icon ">
                              <i className="fa-solid fa-magnifying-glass"></i>
                           </span>

                           <span>
                              Reading Book Music
                           </span>
                        </li>
                     </ul>

                  </div>
                  <div className="header-right">
                     <Link 
                        to="/Upload" 
                        className={`header-container__bar-items ${
                           currentPath === "/Upload" ? "active" : ""
                        }`}
                     >
                        Upload
                     </Link>

                     <div id="Nav-User" className="header-right_UserNav header-container__bar-items" onclick="OnOff ('User-Menu'); AddSelectedModified('Nav-User'); ;  OffModified('Nav-User'); ">
                        <span className="user-avatar">
                           <img className="img-avatar" src="/assets/img/IMG1_03391.jpg" alt="" />
                        </span>
                        <span className="user-name">
                           Admin
                        </span>
                        {/* <i className="fa-solid fa-angle-down"></i> */}
                        <IoIosArrowDown />
                        <ul id="User-Menu" className="header-menulist menu-left">
                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa-solid fa-user"></i>
                                 Profile
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa-solid fa-heart"></i>
                                 Like
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa fa-list" aria-hidden="true"></i>
                                 Playlists
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa fa-podcast" aria-hidden="true"></i>
                                 Stations
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa fa-users" aria-hidden="true"></i>
                                 Following
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa fa-users" aria-hidden="true"></i>
                                 Who to follow
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon header-optionlist_profile-icon fa fa-star"></i>
                                 Try Pro
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa fa-bar-chart" aria-hidden="true"></i>
                                 Tracks
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 <i className="header-optionlist_profile-icon fa fa-tasks" aria-hidden="true"></i>
                                 Distribute
                              </Link>
                           </li>
                        </ul>
                     </div>

                     <div id="bell-btn" className="bell-btn header-container__bar-items font-size-16" onclick="OnOff('menu-notifi'); AddSelectedModified('bell-btn'); OffModified('bell-btn');  ">
                        <i className="fa-solid fa-bell"></i>
                        <div id="menu-notifi" className="menu-notification position-noti">
                           <div className="menu-notification_header">
                              <h2 className="menu-title">Notifications</h2>
                              <Link to="/" className="menu-setting-btn" >Settings</Link>
                           </div>
                           <div className="menu-notification_body border-top">
                              <div className="menu-notification_body-message">
                                 No notifications
                              </div>
                           </div>

                           <Link to="/" className="menu-notification_footer">
                              View all notifications
                           </Link>

                        </div>
                     </div>

                     <div id="mail-btn" className="header-container__bar-items font-size-16 relative" onclick="OnOff('menu-mail'); AddSelectedModified('mail-btn');  OffModified('mail-btn'); " >
                        <i className="fa-solid fa-envelope"></i>
                        <div id="menu-mail" className="menu-notification position-mail">
                           <div className="menu-notification_header">
                              <h2 className="menu-title">Messages</h2>
                              {/* <a to="" className="menu-setting-btn" >Settings</a> */}
                           </div>
                           <div className="menu-notification_body border-top">
                              <div className="menu-notification_body-message">
                                 No messages
                              </div>
                           </div>

                           <Link to="/" className="menu-notification_footer">
                              View all messages
                           </Link>

                        </div>
                     </div>

                     <div id="more-btn" className="nav-more header-container__bar-items font-size-16" onclick="OnOff('menu-more');  AddSelectedModified('more-btn');  OffModified('more-btn');">
                        <i className="fa-solid fa-ellipsis"></i>
                        <ul id="menu-more" className="header-menulist menu-right witdh-171">
                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 About us
                              </Link>
                           </li>
                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 Legal
                              </Link>
                           </li>
                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 Coppyright
                              </Link>
                           </li>

                           <li className="header-optionlist border-top">
                              <Link to="/" className="header-optionlist_profile">
                                 Mobile apps
                              </Link>
                           </li>
                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 For Creators
                              </Link>
                           </li>
                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 Blog
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 Developers
                              </Link>
                           </li>

                           <li className="header-optionlist border-top">
                              <Link to="/" className="header-optionlist_profile">
                                 Support
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 Settings
                              </Link>
                           </li>

                           <li className="header-optionlist">
                              <Link to="/" className="header-optionlist_profile">
                                 Sign out
                              </Link>
                           </li>
                        </ul>
                     </div>

                  </div>
               </div>
            </header>
         </div>
      </>
   )
}
export default Nav;