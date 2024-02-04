import styles from '../FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import FeedSong from '../FeedSong/FeedSong';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const FeedLeftItem = ({ data = [] }) => {
  return (
    <>
      {data.songs.length > 0 && (
        <Link to={`/${data.following?.id}`} className={cx('feed__modul-item-authorname-main')}>
          <img src={data.following?.avatar} alt="" className={cx('feed__modul-authorname-avatar')} />
          <div className={cx('feed__modul-authorname-name')}>{data.following?.userName}</div>
        </Link>
      )}

      {data.songs.length > 0 && data.songs.map((song, index) => (
        <FeedSong dataSong={song} key={index} />
      ))}
    </>
  );
};
export default FeedLeftItem;
