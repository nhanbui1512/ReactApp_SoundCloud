import '../../Sidebar.module.scss';
import classNames from 'classnames/bind';
import styles from '../../Sidebar.module.scss';

import React from 'react';
import SidebarHeart from '../SidebarHeart';
//import apiHandleFeed from 'api/apiHandleFeed';

const cx = classNames.bind(styles);
const SidebarHeartUL = (data = []) => {
  return (
    <>
      <ul className={cx('sidebar__modul-list')}>
        {data.song?.map((songsLiked, index) => (
          <SidebarHeart songsLiked={songsLiked} key={index} />
        ))}
      </ul>
    </>
  );
};
export default SidebarHeartUL;
