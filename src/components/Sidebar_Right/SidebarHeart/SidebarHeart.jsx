import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart,
  faListUl,
  faPause,
  faPlay,
  faRepeat,
  //faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { AddToList } from 'components/Icons';
import { useEffect, useRef, useState, useContext } from 'react';
// import CustomToast from 'components/CustomToast/CustomToast';
// import { toast } from 'react-toastify';
import { StorageContext } from 'context/Storage';

const cx = classNames.bind(styles);
const SidebarHeart = ({ songsLiked }) => {
  const [moreMenu, setMoreMenu] = useState(false);
  const moreBtnRef = useRef();
  const [isLiked, setIsLiked] = useState(songsLiked.isLiked);
  const [isPlay, setIsPlay] = useState(false);
  //const [favoriteSongs, setFavoriteSongs] = useState([]);

  const storage = useContext(StorageContext);

  // Hàm xử lý khi nút Play/Pause được nhấn
  const handlePlay = (e) => {
    e.preventDefault();
    const audioTag = storage.audioRef.current;

    // Nếu dữ liệu của gallary # dữ liệu bài hát đang được load thì set lại state
    if (storage.currentMusic.id !== songsLiked.id) {
      storage.setCurrentMusic(songsLiked);
      storage.setCurrentPlayList([songsLiked]);
      if (storage.playlistId !== -1) storage.setPlaylistId(-1);
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
    if (storage.currentMusic.id !== songsLiked.id) {
      setIsPlay(false);
    }
  }, [storage.currentMusic, songsLiked.id]);

  useEffect(() => {
    const audioTag = storage.audioRef.current;

    const handlePlay = () => {
      if (songsLiked.id === storage.currentMusic.id) {
        setIsPlay(true);
      }
    };

    const handlePause = () => {
      if (songsLiked.id === storage.currentMusic.id) {
        setIsPlay(false);
      }
    };

    audioTag.addEventListener('play', handlePlay);
    audioTag.addEventListener('pause', handlePause);

    return () => {
      audioTag.removeEventListener('play', handlePlay);
      audioTag.removeEventListener('pause', handlePlay);
    };
  }, [storage.audioRef, storage.currentMusic.id, songsLiked.id]);

  // const addToFavorites = (songsLiked) => {
  //   setFavoriteSongs([...favoriteSongs, songsLiked]);
  //   showToast(songsLiked);
  // };
  // const showToast = (songsLiked) => {
  //   toast.success(<CustomToast songsLiked={songsLiked} isLiked={isLiked} />, {
  //     position: 'top-right',
  //   });
  // };
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
      <li className={cx('sidebar__modul-list-item')}>
        <img src={songsLiked.thumbNail || ''} alt="" className={cx('sidebar__modul-image-song')} />
        <div className={cx('sidebar__modul-item-info')}>
          <div className={cx('sidebar__modul-item-head')}>
            <div className={cx('sidebar__modul-item-name')}>{songsLiked.artistName}</div>
          </div>
          <div className={cx('sidebar__modul-item-body')}>{songsLiked.name}</div>
          <div className={cx('sidebar__modul-item-bottom')}>
            <div className="sidebar__modul-item-bottom-left">
              <span className={cx('sidebar__modul-item-quantity-follower')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faPlay} />
                <span className={cx('sidebar-data')}>{songsLiked.numberOfListen}</span>
              </span>
              <span className={cx('sidebar__modul-item-quantity-song')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faHeart} />
                <span className={cx('sidebar-data')}>{songsLiked.likeCount}</span>
              </span>
              <span className={cx('sidebar__modul-item-repeat')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faRepeat} />
                <span className={cx('sidebar-data')}>{songsLiked.numberOfLoop}</span>
              </span>
            </div>
          </div>
        </div>
        <div className={cx('Playsidebar__modul-item-container')}>
          <div className={cx('sidebar__modul-item-play')} onClick={handlePlay}>
            <FontAwesomeIcon
              className={cx('sidebar__modul-play-icon')}
              icon={isPlay ? faPause : faPlay}
            />
          </div>
          <div className={cx('sidebar__modul-item-option')}>
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <span
                  className={cx('sidebar__modul-option-btn')}
                  onClick={() => {
                    setIsLiked(!isLiked);
                    //addToFavorites(favoriteSongs);
                  }}
                >
                  <FontAwesomeIcon className={cx('', { liked: isLiked })} icon={faHeart} />
                </span>
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
              <span
                ref={moreBtnRef}
                onClick={(e) => {
                  setMoreMenu(!moreMenu);
                }}
                className={cx('option-btn')}
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </HeadlessTippy>
          </div>
        </div>
      </li>
    </>
  );
};
export default SidebarHeart;
