import './Sidebar.module.scss';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import artirstFollow from './data';
import { IoIosPeople } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';
import React from 'react';
import SidebarHeart from './SidebarHeart/SidebarHeart';
import SidebarHistory from './SidebarHistory/SidebarHistory';
import { IoHeart } from 'react-icons/io5';
import SidebarArtist from './SidebarArtist/SidebarArtist';

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
                <SidebarArtist art={art} key={index}/>
              )
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
        <div className={cx('sidebar__modul')}>
          <div className={cx('sidebar__modul-refresh')}>
            <span>
              <FaHistory />
            </span>
            <span>View All</span>
          </div>
          <div className={cx('sidebar__modul-container')}>
            <ul className={cx('sidebar__modul-list')}>
              {artirstFollow.map((art, index) => {
                return <SidebarHistory key={index} art={art} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
