import styles from '../FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import FeedSong from '../FeedSong/FeedSong';

const cx = classNames.bind(styles);
const FeedLeftItem = ({ data = [] }) => { 
  return (
    <>
      <div className={cx('feed__modul-item-authorname-main')}>
        <img src={data.following?.avatar} alt='' className={cx('feed__modul-authorname-avatar')}/>
        <div className={cx('feed__modul-authorname-name')}>
          {data.following?.userName}
        </div>
      </div>
      {data.songs.length > 0 ? (
        data.songs?.map((song, index) =>(
        <>
          <FeedSong data={song} key={index}/> 
        </>
        ))
      ):(
        <p style={{marginLeft: '4px'}}>Chưa có bài hát nào: {data.songs.length}</p>
      )}
    </>
  );
};
export default FeedLeftItem;
