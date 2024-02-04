import './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTabletScreenButton, faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
// import artirstFollow from './data';
// import { FaHistory } from 'react-icons/fa';
// import SidebarHistory from './SidebarHistory/SidebarHistory';
import React, { useEffect, useState } from 'react';
import SidebarHeart from './SidebarHeart/SidebarHeart';
import SidebarArtist from './SidebarArtist/SidebarArtist';
import apiHandleFeed from 'api/apiHandleFeed';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Sidebar = () => {
  const [rmdUser, setRmdUser] = useState([]);
  const [listSongLiked, setListSongLiked] = useState([]);
  const [totalLike, setTotalLike] = useState(0);
  const [randomSongs, setRandomSongs] = useState([]);
  useEffect(() => {
    const getSongLiked = async () => {
      try {
        const res1 = await apiHandleFeed.getSongLiked();
        const combinedSongs = res1.data.data.map((item) => item.song);
        setListSongLiked(combinedSongs);
      } catch (error) {
        console.error('error fetch data', error);
      }
    };
    getSongLiked();
  }, []);
  useEffect(() => {
    // Lấy ngẫu nhiên 4 bài hát từ mảng songs
    const getRandomSongs = () => {
      const shuffledSongs = listSongLiked.sort(() => 0.5 - Math.random());
      const selectedSongs = shuffledSongs.slice(0, 4);
      setRandomSongs(selectedSongs);
    };

    getRandomSongs();
  }, [listSongLiked]); // useEffect sẽ chạy lại mỗi khi mảng songs thay đổi
  // lấy ra danh sách tài khoản
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiHandleFeed.getUser();
        setRmdUser(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  // tính tổng số bài hát mình đã like
  useEffect(() => {
    const newTotalLike = listSongLiked.reduce((acc, curr) => {
      return acc + curr.likeCount;
    }, 0);
    setTotalLike(newTotalLike);
  }, [listSongLiked]);

  return (
    <>
      <div className={cx('sidebar__modul')}>
        <div className={cx('sidebar__modul-refresh')}>
          <FontAwesomeIcon className={cx('sidebar-icon')} icon={faUser} />
          <span>Artists you should follow</span>
        </div>
        <div className={cx('sidebar__modul-container')}>
          <ul className={cx('sidebar__modul-list')}>
            {rmdUser.map((art, index) => {
              return <SidebarArtist art={art} key={index} />;
            })}
          </ul>
        </div>
      </div>
      <div className={cx('sticky-topbar')}>
        <div className={cx('sidebar__modul')}>
          <div className={cx('sidebar__modul-refresh')}>
            <div className={cx('sidebar-data-quantity')}>
              <FontAwesomeIcon className={cx('sidebar-icon')} icon={faHeart} />
              <span className={cx('sidebar-icon')}>{totalLike}</span>
            </div>
            <Link to={`/libary/Likes`}>View All</Link>
          </div>
          <div className={cx('sidebar__modul-container')}>
            {/* <SidebarHeartUL  data={listSongLiked} /> */}
            <ul className={cx('sidebar__modul-list')}>
              {randomSongs.map((songsLiked, index) => (
                <SidebarHeart songsLiked={songsLiked} key={index} />
              ))}
            </ul>
          </div>
        </div>
        {/* <div className={cx('sidebar__modul')}>
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
        </div> */}
        <div className={cx('sidebar__modul')}>
          <div className={cx('sidebar__modul-refresh')}>
            <span>
              <FontAwesomeIcon icon={faTabletScreenButton} />
            </span>
            <span>Go Mobile</span>
          </div>
          <div className={cx('sidebar__modul-container')}>
            <ul className={cx('sidebar__modul-list')}>
              <div className={cx('sidebar__modul-list-mobile')}>
                <img
                  src="https://a-v2.sndcdn.com/assets/images/appstore_badge@en-9e7292e6.png"
                  alt="applestore"
                />
                <img
                  src="https://a-v2.sndcdn.com/assets/images/google_play_badge@en-51d52194.png"
                  alt="chplay"
                />
              </div>
            </ul>
          </div>
        </div>
        <div className={cx('sidebar__modul')}>
          <div className={cx('brand-items')}>
            Legal - Privacy - Cookie Policy - Consent Manager Imprint - Artist Resources - Blog -
            Charts
            <p>
              <span style={{ color: 'blue' }}>Language</span>: English
            </p>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="/Likes"></Route>
      </Routes> */}
    </>
  );
};
export default Sidebar;
