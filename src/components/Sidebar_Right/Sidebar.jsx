import './Sidebar.module.scss';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import artirstFollow from './data';
import { IoIosPeople } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';
import React , {useEffect, useState} from 'react';
import SidebarHeart from './SidebarHeart/SidebarHeart';
import SidebarHistory from './SidebarHistory/SidebarHistory';
import { IoHeart } from 'react-icons/io5';
import SidebarArtist from './SidebarArtist/SidebarArtist';
import apiHandleFeed from 'api/apiHandleFeed';
import SidebarHeartUL from './SidebarHeart/SidebarHeartUL/SidebarHeartUL';
//import SidebarHeartUL from './SidebarHeart/SidebarHeartUL/SidebarHeartUL';

const cx = classNames.bind(styles);
const Sidebar = () => {
  const [rmdUser, setRmdUser] = useState([]);
  const [listSongLiked, setListSongLiked] = useState([]);
  console.log('danh sach bai hat da liked',listSongLiked);
  listSongLiked.map((item) => (
    <>{item.song?.thumbNail}</>
  ))
  useEffect(() => {
    const getSongLiked = async () => {
      try {
        const res1 = await apiHandleFeed.getSongLiked();
        setListSongLiked(res1.data.data);
        console.log(res1.data.data);
      } catch(error) {
        console.error('error fetch data', error);
      }
    }
    getSongLiked();
  },[])  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiHandleFeed.getUser();
        setRmdUser(res.data.data)
      } catch(error) {
        console.error(error);
      }
    }
    fetchUser();
  },[])
  
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
            {rmdUser.map((art, index) => {
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
            <SidebarHeartUL  listSongLiked={listSongLiked} />
            {/* <ul className={cx('sidebar__modul-list')}>
              {artirstFollow.map((art, index) => (
                <SidebarHeart  songListLiked={listSongLiked} />
              ))}
            </ul> */}
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
