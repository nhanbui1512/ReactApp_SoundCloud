import styles from '../FeedLeft.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart,
  faListUl,
  faPause,
  faPlay,
  faRepeat,
  faShare,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { useEffect, useRef, useState, useContext } from 'react';
import { StorageContext } from 'context/Storage';
//import ToastMessage from 'components/ToastMessage/ToastMessage';

const cx = classNames.bind(styles);
const FeedSong = ({ data }) => {
  const [moreMenu, setMoreMenu] = useState(false);
  const moreBtnRef = useRef();
  const [isLiked, setIsLiked] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isRepost, setRePost] = useState(false);
  const [isShare, setShare] = useState(false);
  const [isCopy, setCopy] = useState(false);

  const storage = useContext(StorageContext);

  // Hàm xử lý khi nút Play/Pause được nhấn
  const handlePlay = (e) => {
    e.preventDefault();
    const audioTag = storage.audioRef.current;

    // Nếu dữ liệu của gallary # dữ liệu bài hát đang được load thì set lại state
    if (storage.currentMusic.id !== data.id) {
      storage.setCurrentMusic(data);
      const playMusic = (event) => {
        event.target.play();
        setIsPlay(true);
        audioTag.removeEventListener('loadeddata', playMusic);
      };
      audioTag.addEventListener('loadeddata', playMusic);
      return; // thoát khỏi hàm
    }

    // Nếu đang bài đang phát giống với bài của gallary
    if (audioTag.paused) {
      // Đang dừng thì hiển thị nút Play
      audioTag.play();
      // setIsPlay(true);
    } else {
      // Đang phát thì hiển thị nút pause
      audioTag.pause();
      // setIsPlay(false);
    }
  };

  // lắng nghe sự kiện khi bài hát được đổi thì icon Play/Pause đổi sang Play
  useEffect(() => {
    if (storage.currentMusic.id !== data.id) {
      setIsPlay(false);
    }
  }, [storage.currentMusic, data.id]);

  useEffect(() => {
    const audioTag = storage.audioRef.current;

    const handlePlay = () => {
      if (data.id === storage.currentMusic.id) {
        setIsPlay(true);
      }
    };

    const handlePause = () => {
      if (data.id === storage.currentMusic.id) {
        setIsPlay(false);
      }
    };

    audioTag.addEventListener('play', handlePlay);
    audioTag.addEventListener('pause', handlePause);

    return () => {
      audioTag.removeEventListener('play', handlePlay);
      audioTag.removeEventListener('pause', handlePlay);
    };
  }, [storage.audioRef, storage.currentMusic.id, data.id]);

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
      {/* <div className={cx('feed__modul-item-authorname-main')}>
        <img src={data.avatar} alt="" className={cx('feed__modul-authorname-avatar')} />
        <div className={cx('feed__modul-authorname-name')}>{data.userName}</div>
      </div> */}

      <li className={cx('feed__modul-list-item')}>
        <img src={data.thumbNail || ''} alt="" className={cx('feed__modul-item-image')} />
        <div className={cx('feed__modul-item-info')}>
          <div className={cx('feed__modul-item-song-info')}>
            <div
              className={cx('feed__modul-item-play')}
              onClick={handlePlay}
            >
              <FontAwesomeIcon
                className={cx('feed__modul-play-icon')}
                icon={isPlay ? faPause : faPlay}
              />
            </div>
            <div className={cx('feed__modul-item-song')}>
              <div className={cx('feed__modul-item-authorname')}>{data.artistName}</div>
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
                  <span className={cx('btn-option-icon')}>{data.like}</span>
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Repost'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setRePost(!isRepost);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { reposted: isRepost })} icon={faRepeat} />

                  <span className={cx('btn-option-icon')}>{data.repost}</span>
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Share'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setShare(!isShare);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { shared: isShare })} icon={faShare} />
                  <span className={cx('btn-option-icon')}>Share</span>
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Copy'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  onClick={() => {
                    setCopy(!isCopy);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { copyed: isCopy })} icon={faLink} />
                  <span className={cx('btn-option-icon')}>Copy</span>
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
                      icon={<FontAwesomeIcon className={cx('menu-item-icon')} icon={faListUl} />}
                      separate
                    >
                      Add to Playlist
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
                <span className={cx('btn-option-icon')}>More</span>
              </button>
            </HeadlessTippy>
          </div>
        </div>
      </li>
    </>
  );
};
export default FeedSong;
