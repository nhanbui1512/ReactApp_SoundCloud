import styles from '../FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import FeedSong from '../FeedSong/FeedSong';

const cx = classNames.bind(styles);
const FeedLeftItem = ({ data }) => {
 
  return (
    <>
      <div className={cx('feed__modul-item-authorname-main')}>
        <img src={data.avatar} alt='' className={cx('feed__modul-authorname-avatar')}/>
        <div className={cx('feed__modul-authorname-name')}>
          {data.userName}
        </div>
      </div>
      {data.songs && data.songs.length > 0 ? (
        data.songs?.map((song) =>(
        <>
          <FeedSong data={song} /> 
        </>
        ))
      ):(
        <p>Chưa có bài hát nào</p>
      )}
    </>
  );
};
export default FeedLeftItem;
