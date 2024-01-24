import styles from '../FeedLeft/FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart,
  // faListOl,
  faListUl,
  faPause,
  faPlay,
  faRepeat,
  faShare,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { AddToList } from 'components/Icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
const FeedLeftItem = ({ data }) => {
  const [moreMenu, setMoreMenu] = useState(false);
  const moreBtnRef = useRef();
  const [isLiked, setIsLiked] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isRepost, setRePost] = useState(false);
  const [isShare, setShare] = useState(false);
  const [isCopy, setCopy] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem sự kiện click có xảy ra ngoài nút button không
      if (moreBtnRef.current && !moreBtnRef.current.contains(event.target)) {
        // Thực hiện hành động khi click ra ngoài
        setMoreMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className={cx('feed__modul-item-authorname-main')}>
        {data.author}
      </div>
      <li className={cx('feed__modul-list-item')}>
        <img src={data.image} alt="" className={cx('feed__modul-item-image')} />
        <div className={cx('feed__modul-item-info')}>
          
          <div className={cx('feed__modul-item-song-info')}>
            <div
              className={cx('feed__modul-item-play')}
              onClick={() => {
                setIsPlay(!isPlay);
              }}
            >
              <FontAwesomeIcon
                className={cx('feed__modul-play-icon')}
                icon={isPlay ? faPause : faPlay}
              />
            </div>
            <div className={cx('feed__modul-item-song')}>
              <div className={cx('feed__modul-item-authorname')}>{data.author}</div>
              <div className={cx('feed__modul-item-songname')}>{data.name}</div>
            </div>
          </div>
          <div className={cx('feed__modul-item-range')}></div>
          <div className={cx('feed__modul-option-group')}>
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { liked: isLiked })} icon={faHeart} />
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setRePost(!isRepost);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { repost: isRepost })} icon={faRepeat} />
                  
                  Repost
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setShare(!isShare);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { shared: isShare })} icon={faShare} />
                  Share
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setCopy(!isCopy);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { copyed: isCopy })} icon={faCopy} />
                  Copy
                </button>
              </>
            </Tippy>
            <HeadlessTippy
              visible={moreMenu}
              interactive
              placement="bottom-start"
              offset={[0, 0]}
              delay={300}
              render={(atr) => {
                return (
                  <Wrapper className={cx('more-menu')}>
                    <MenuItem
                      className={cx('menu-item')}
                      icon={<FontAwesomeIcon className={cx('menu-item-icon')} icon={faListUl} />}
                      separate
                    >
                      Add to Next up
                    </MenuItem>
                    <MenuItem
                      className={cx('menu-item')}
                      icon={<AddToList className={cx('menu-item-icon')} />}
                    >
                      Add to Playlist
                    </MenuItem>
                    <MenuItem
                      className={cx('menu-item')}
                      icon={<AddToList className={cx('menu-item-icon')} />}
                    >
                      Repost
                    </MenuItem>
                    <MenuItem
                      className={cx('menu-item')}
                      icon={<AddToList className={cx('menu-item-icon')} />}
                    >
                      Copylink
                    </MenuItem>
                  </Wrapper>
                );
              }}
            >
              <button
                ref={moreBtnRef}
                onClick={(e) => {
                  setMoreMenu(!moreMenu);
                }}
                className={cx('option-btn-more')}
              >
                <FontAwesomeIcon icon={faEllipsis} />
                More
              </button>
            </HeadlessTippy>
          </div>
        </div>
      </li>
    </>
  );
};
export default FeedLeftItem;
