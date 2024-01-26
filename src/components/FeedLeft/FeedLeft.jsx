import styles from './FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import dataFeed from './dataFeed';
import FeedLeftItem from './FeedLeftItem/FeedLeftItem';


const cx = classNames.bind(styles);
const FeedLeft = () => {
  
  return (
    <>
      <div className={cx('feed__modul')}>
      <h4 className={cx('feed__heading')}>Hear the latest posts from the people you’re following:</h4>  
        <ul className={cx('feed__modul-list')}>
          {dataFeed.map((data, index) => (
            <FeedLeftItem data={data} key={index}/>
          ))}
        </ul>
      </div>
    </>
  );
};
export default FeedLeft;
