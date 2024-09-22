import classNames from 'classnames/bind';

import styles from './Likes.moudle.scss';
import Gallery from 'components/Gallery';
import PropTypes from 'prop-types';
import React from 'react';

const cx = classNames.bind(styles);

const Likes = ({ likedSongs }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>Hear the tracks you’ve liked:</h2>
      </div>
      <div className={cx('trending-wrapper')}>
        <div className={cx('container')}>
          {likedSongs.map((item) => (
            <Gallery key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Likes.propTypes = {
  likedSongs: PropTypes.array,
};
export default React.memo(Likes);
