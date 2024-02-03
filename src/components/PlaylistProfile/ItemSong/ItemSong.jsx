import classNames from 'classnames/bind';
import styles from './ItemSong.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink, faPlay } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

const ItemSong = ({ itemMusic }) => {
  const [isCopy, setCopy] = useState(false);
  const [isLiked, setIsLiked] = useState(itemMusic.isLiked || false);

  const handleCopy = async () => {
    const domain = window.origin;
    var urlPage = `${domain}/song/${itemMusic.id}`;
    navigator.clipboard.writeText(urlPage);
    setCopy(!isCopy);

    const timeReset = setTimeout(() => {
      setCopy(isCopy);
    }, 500);

    await sleep(1000);
    return clearTimeout(timeReset);
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <li className={cx('list-music-item')}>
      <div className={cx('list-music-item_detail-song')}>
        <span className={cx('color-opa-07')}>{itemMusic.artistName}</span>
        <span className={cx('color-white')} style={{ marginLeft: '4px' }}>
          {itemMusic.name}
        </span>
      </div>
      <div className={cx(['list-music-item_group', 'color-white', 'relative'])}>
        <div className={cx('list-music-item_play-rate')}>
          <span className={cx('font-11')}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
          <span className={cx('font-11')}>{itemMusic.numberOfListen}</span>
        </div>

        <div className={cx('group-btn_right')}>
          <button
            className={cx('feed__modul-option-btn')}
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            <FontAwesomeIcon className={cx('', { liked: isLiked })} icon={faHeart} />
            <span className={cx('btn-option-icon')}>{itemMusic.likeCount}</span>
          </button>
          <button
            className={cx('feed__modul-option-btn')}
            onClick={() => {
              handleCopy();
            }}
            
          >
            <FontAwesomeIcon className={cx('', { copyed: isCopy })} icon={faLink} />
          </button>
          {/* <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button> */}
          
        </div>
      </div>
    </li>
  );
};

export default ItemSong;
