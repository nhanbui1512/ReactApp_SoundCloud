import './Sidebar.module.scss';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import artirstFollow from './data';
import { IoIosPeople } from 'react-icons/io';
import { FaHistory, FaRegChartBar } from 'react-icons/fa';
import { SlUserFollow } from 'react-icons/sl';

import React from 'react';
import SidebarHeart from './SidebarHeart/SidebarHeart';
import SidebarHistory from './SidebarHistory/SidebarHistory';
import { IoHeart } from 'react-icons/io5';

const cx = classNames.bind(styles);
const Sidebar = () => {
  return (
    <>
      <div className={cx('sidebar__modul')}>
        <div className={cx('sidebar__modul-refresh')}>
          <span>
            <IoIosPeople />
          </span>
          <span>Artists you should follow</span>
        </div>
        <div className={cx('sidebar__modul-container')}>
          <ul className={cx('sidebar__modul-list')}>
            {artirstFollow.map((art, index) => {
              return (
                <li key={index} className={cx('sidebar__modul-list-item')}>
                  <img src={art.image} alt="" className={cx('sidebar__modul-image')} />

                  <div className={cx('sidebar__modul-item-info')}>
                    <div className={cx('sidebar__modul-item-head')}>
                      <div className={cx('sidebar__modul-item-name')}>{art.name}</div>
                      <div className={cx('sidebar__modul-item-wrap')}>
                        <span className={cx('sidebar__modul-item-know')}>{art.follower} K</span>
                      </div>
                    </div>
                    <div className={cx('sidebar__modul-item-bottom')}>
                      <div className="sidebar__modul-item-bottom-left">
                        <span className={cx('sidebar__modul-item-quantity-follower')}>
                          <IoIosPeople />
                          {art.follower} M
                        </span>
                        <span className={cx('sidebar__modul-item-quantity-song')}>
                          <FaRegChartBar />
                          {art.song}
                        </span>
                      </div>
                      <button className={cx('sidebar__modul-item-follower')}>
                        <SlUserFollow />
                        <span className="sidebar__modul-item-following">following</span>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={cx('sticky-topbar')}>
        <div className={cx('sidebar__modul')}>
          <div className={cx('sidebar__modul-refresh')}>
            <span>
              <IoHeart />
            </span>
            <span>View All</span>
          </div>
          <div className={cx('sidebar__modul-container')}>
            <ul className={cx('sidebar__modul-list')}>
              {artirstFollow.map((art, index) => (
                <SidebarHeart key={index} art={art} />
              ))}
            </ul>
          </div>
        </div>
        <div className={cx("sidebar__modul")}>
        <div className={cx("sidebar__modul-refresh")}>
          <span>
            <FaHistory />
          </span>
          <span>View All</span>
        </div>
        <div className={cx("sidebar__modul-container")}>
          <ul className={cx("sidebar__modul-list")}>
            {artirstFollow.map((art, index) => {
              return (
                <SidebarHistory key={index} art={art} />
              );
            })}
          </ul>
        </div>
      </div>
        
      </div>
    </>
  );
};
export default Sidebar;
