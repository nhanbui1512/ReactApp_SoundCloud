import styles from './FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import apiHandleFeed from 'api/apiHandleFeed';
import FeedLeftULList from './FeedLeftULList';

const cx = classNames.bind(styles);
const FeedLeft = () => {
  const [feedSong, setFeedSong] = useState([]);

  useEffect(() => {
    const getSongFeed = async () => {
      try {
        const res = await apiHandleFeed.getFollowing();
        setFeedSong(res.data.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSongFeed();
  }, []);

  return (
    <>
      <div className={cx('feed__modul')}>
        <h4 className={cx('feed__heading')}>
          Hear the latest posts from the people you’re following:
        </h4>
        <FeedLeftULList data={feedSong} />
      </div>
    </>
  );
};
export default FeedLeft;
