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
import { Link } from 'react-router-dom';
import { LibraryContext } from 'context/Library';
import { likeSong, unlikeSong } from 'api/songs';
import ShareSong from 'pages/Profile/Share/ShareSong';
import { PlaylistPopup } from 'components/Playlist/PlaylistPopup/PlaylistPopup';

const cx = classNames.bind(styles);
const FeedSong = ({ dataSong }) => {
  const [openAddToPlaylist, setOpenAddToPlaylist] = useState(false);
  const moreBtnRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [isShare] = useState(false);
  const [isCopy, setCopy] = useState(false);
  const [popperShare, setPopperShare] = useState(false);
  const [isLiked, setIsLiked] = useState(dataSong.isLiked || false);

  const storage = useContext(StorageContext);
  const context = useContext(LibraryContext);

  // Hàm xử lý khi nút Play/Pause được nhấn
  const handlePlay = (e) => {
    console.log('play');
    e.preventDefault();
    const audioTag = storage.audioRef.current;

    // Nếu dữ liệu của gallary # dữ liệu bài hát đang được load thì set lại state
    if (storage.currentMusic.id !== dataSong.id) {
      storage.setCurrentPlayList([dataSong]);
      storage.setCurrentMusic(dataSong);
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
    if (storage.currentMusic.id !== dataSong.id) {
      setIsPlay(false);
    }
  }, [storage.currentMusic, dataSong.id]);

  useEffect(() => {
    const audioTag = storage.audioRef.current;

    const handlePlay = () => {
      if (dataSong.id === storage.currentMusic.id) {
        setIsPlay(true);
      }
    };

    const handlePause = () => {
      if (dataSong.id === storage.currentMusic.id) {
        setIsPlay(false);
      }
    };

    audioTag.addEventListener('play', handlePlay);
    audioTag.addEventListener('pause', handlePause);

    return () => {
      audioTag.removeEventListener('play', handlePlay);
      audioTag.removeEventListener('pause', handlePlay);
    };
  }, [storage.audioRef, storage.currentMusic.id, dataSong.id]);

  const handleCopy = async () => {
    const domain = window.origin;
    var urlPage = `${domain}/song/${dataSong.id}`;
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

  // handle like /unlike
  const handleLike = () => {
    if (isLiked) {
      unlikeSong(dataSong.id)
        .then((res) => {
          setIsLiked(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLiked(true);
        });
      if (context) {
        context.setDataSongLikes((prev) => {
          var newSongs = [...prev];
          newSongs = newSongs.filter((song) => song.id !== dataSong.id);
          return newSongs;
        });
      }
    } else {
      likeSong(dataSong.id)
        .then((res) => {
          setIsLiked(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLiked(false);
        });
      if (context) {
        context.setDataSongLikes((prev) => {
          var newSongs = [dataSong, ...prev];
          return newSongs;
        });
      }
    }
  };

  return (
    <>
      {/* Add to Playlist popup */}
      <PlaylistPopup open={openAddToPlaylist} onClose={setOpenAddToPlaylist} songData={dataSong} />

      <li className={cx('feed__modul-list-item')}>
        <Link to={`/song/${dataSong.id}`}>
          <img src={dataSong.thumbNail || ''} alt="" className={cx('feed__modul-item-image')} />
        </Link>
        <div className={cx('feed__modul-item-info')}>
          <div className={cx('feed__modul-item-song-info')}>
            <div onClick={handlePlay} className={cx('feed__modul-item-play')}>
              <FontAwesomeIcon
                className={cx('feed__modul-play-icon')}
                icon={isPlay ? faPause : faPlay}
              />
            </div>
            <div className={cx('feed__modul-item-song')}>
              <div className={cx('feed__modul-item-authorname')}>{dataSong.artistName}</div>
              <div className={cx('feed__modul-item-songname')}>{dataSong.name}</div>
            </div>
          </div>
          <div className={cx('feed__modul-item-range')}></div>
          <div className={cx('feed__modul-option-group')}>
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  // onClick={() => {
                  //   setIsLiked(!isLiked);
                  // }}
                  onClick={() => {
                    handleLike();
                  }}
                >
                  <FontAwesomeIcon className={cx('', { liked: isLiked })} icon={faHeart} />
                  <span className={cx('btn-option-icon')}>{dataSong.likeCount}</span>
                </button>
              </>
            </Tippy>
            <Tippy animation={'scale-subtle'} content={'Share'}>
              <>
                <button
                  className={cx('feed__modul-option-btn')}
                  // onClick={() => {
                  //   setShare(!isShare);
                  // }}
                  onClick={() => {
                    setPopperShare(true);
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
                    handleCopy();
                  }}
                >
                  <FontAwesomeIcon className={cx('', { copyed: isCopy })} icon={faLink} />
                  <span className={cx('btn-option-icon')}>Copy</span>
                </button>
              </>
            </Tippy>
            <HeadlessTippy
              zIndex={80}
              //visible={moreMenu}
              interactive
              placement="bottom-start"
              offset={[0, 0]}
              delay={[0, 300]}
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
                      onClick={() => setOpenAddToPlaylist(true)}
                    >
                      Add to Playlist
                    </MenuItem>
                  </Wrapper>
                );
              }}
            >
              <button ref={moreBtnRef} className={cx('option-btn-more')}>
                <FontAwesomeIcon icon={faEllipsis} />
                <span className={cx('btn-option-icon')}>More</span>
              </button>
            </HeadlessTippy>
          </div>
        </div>
        {popperShare && <ShareSong dataShareSong={dataSong} setPopperShare={setPopperShare} />}
      </li>
    </>
  );
};
export default FeedSong;
