import React from "react";
import classNames from "classnames/bind";
import styles from "../Sidebar_Right/Sidebar.module.scss";
import artirstFollow from "../Sidebar_Right/data";
import { FaPlay } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { RiRepeatLine } from "react-icons/ri";

const cx = classNames.bind(styles);
const SidebarHeart = () => {
  return (
    <>
      <div className={cx("sidebar__modul")}>
        <div className={cx("sidebar__modul-refresh")}>
          <span>
            <IoHeart />
          </span>
          <span>View All</span>
        </div>
        <div className={cx("sidebar__modul-container")}>
          <ul className={cx("sidebar__modul-list")}>
            {artirstFollow.map((art, index) => {
              return (
                <li className={cx("sidebar__modul-list-item")}>
                  <img
                    src={art.image1}
                    alt=""
                    className={cx("sidebar__modul-image-song")}
                  />
                  <div className={cx("sidebar__modul-item-info")}>
                    <div className={cx("sidebar__modul-item-head")}>
                      <div className={cx("sidebar__modul-item-name")}>
                        {art.name}
                      </div>
                      {/* <div className={cx("sidebar__modul-item-wrap")}>
                                                        <span className={cx("sidebar__modul-item-know")}>
                                                            {art.follower} K
                                                        </span>
                                                    </div> */}
                      
                    
                    </div>
                    <div className={cx("sidebar__modul-item-body")}>
                      {art.songName}
                    </div>
                    <div className={cx("sidebar__modul-item-bottom")}>
                      <div className="sidebar__modul-item-bottom-left">
                        <span
                          className={cx(
                            "sidebar__modul-item-quantity-follower"
                          )}
                        >
                          <FaPlay />
                          {art.follower} M
                        </span>
                        <span
                          className={cx("sidebar__modul-item-quantity-song")}
                        >
                          <IoHeart />
                          {art.song}
                        </span>
                        <span className={cx("sidebar__modul-item-repeat")}>
                          <RiRepeatLine />
                          {art.repeat}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SidebarHeart;
