import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart,
  faListOl,
  faListUl,
  faPause,
  faPlay,
  faUserCheck,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { AddToList } from 'components/Icons';
import { useContext, useEffect, useRef, useState } from 'react';
import { StorageContext } from 'context/Storage';
import { likeSong, unlikeSong } from 'api/songs';
import { useNavigate } from 'react-router-dom';
import { followPlaylist, unfollowPlaylist } from 'api/follow';
import { LibraryContext } from 'context/Library';
import { BsMusicNoteList } from 'react-icons/bs';
import { PlaylistPopup } from 'components/Playlist';
import { changePosition } from 'Utils/arrays';

const cx = classNames.bind(styles);

function Gallery({ data, playLists }) {
  const context = useContext(LibraryContext);

  const moreBtnRef = useRef();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(data.isLiked);
  const [isPlay, setIsPlay] = useState(false);
  const [isFollow, setIsFollow] = useState(data.isFollow);
  const [openAddToPlaylist, setOpenAddToPlaylist] = useState(false);

  const storage = useContext(StorageContext);

  // Hàm xử lý khi nút Play/Pause được nhấn
  const handlePlay = (e) => {
    e.preventDefault();
    const audioTag = storage.audioRef.current;

    // Nếu dữ liệu của gallary # dữ liệu bài hát đang được load thì set lại state
    if (storage.currentMusic.id !== data.id) {
      storage.setCurrentPlayList([data]);
      storage.setCurrentMusic(data);
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

  const handleLike = (e) => {
    if (!storage.currentUser) navigate('/login'); // chưa login thì chuyển qua trang login
    data.isLiked = !data.isLiked;
    setIsLiked(!isLiked);

    if (isLiked) {
      unlikeSong(data.id)
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
          newSongs = newSongs.filter((song) => song.id !== data.id);
          return newSongs;
        });
      }
    } else {
      likeSong(data.id)
        .then((res) => {
          setIsLiked(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLiked(false);
        });
      if (context) {
        context.setDataSongLikes((prev) => {
          var newSongs = [data, ...prev];
          return newSongs;
        });
      }
    }
  };

  const handleFollow = () => {
    if (isFollow) {
      setIsFollow(!isFollow);
      unfollowPlaylist(data.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setIsFollow(true);
        });
      if (context) {
        context.setDataPlaylists((prev) => {
          var newPlaylists = [...prev];
          newPlaylists = newPlaylists.filter((playlist) => playlist.id !== data.id);
          return newPlaylists;
        });
      }
    } else {
      setIsFollow(!isFollow);
      followPlaylist(data.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setIsFollow(false);
        });
      if (context) {
        context.setDataPlaylists((prev) => {
          var newPlaylists = [...prev];
          newPlaylists = newPlaylists.push(data);
          return newPlaylists;
        });
      }
    }
  };

  const handleAddNextUp = () => {
    var indexPlaying = storage.currentPlayList.indexOf(storage.currentMusic);

    // nếu đã tồn tại trong playlsit -> thay đổi vị trí của nó lên sau bài đang phát
    if (storage.currentPlayList.find((music) => music.id === data.id)) {
      var indexOfSong = storage.currentPlayList.indexOf(data);

      storage.setCurrentPlayList((prev) => {
        var newState = [...prev];
        changePosition(newState, indexOfSong, indexPlaying + 1);
        return newState;
      });
    } else {
      // ngược lại -> thêm vào sau bài đang phát

      var target = indexPlaying + 1;

      storage.setCurrentPlayList((prev) => {
        var newState = [...prev];
        newState.splice(target, 0, data);
        return newState;
      });
    }
  };

  // lắng nghe sự kiện khi bài hát được đổi thì icon Play/Pause đổi sang Play
  useEffect(() => {
    if (storage.currentMusic.id !== data.id) {
      setIsPlay(false);
    }
  }, [storage.currentMusic, data.id]);

  // Xử lý thay đổi state của icon khi nhạc ở Player dừng hoặc Phát
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

  return (
    <div className={cx('modul-left_item')}>
      {/* Add to Playlist popup */}
      <PlaylistPopup open={openAddToPlaylist} onClose={setOpenAddToPlaylist} songData={data} />

      <div className={cx('modul-left_item-container-img')}>
        <img
          className={cx('modul-left_image')}
          src={data.thumbNail || data.songs[0].thumbNail}
          alt=""
        />

        {playLists && <BsMusicNoteList className={cx('playlist-icon')} />}
        <div className={cx('modul-left_backgroud')}></div>
        <div onClick={handlePlay} className={cx('modul-left_playbtn')}>
          <FontAwesomeIcon
            className={cx('modul-left_playbtn-icon')}
            icon={isPlay ? faPause : faPlay}
          />
        </div>

        <div className={cx('modul-left_option-group')}>
          {playLists || (
            <Tippy animation={'scale-subtle'} content={'Like'}>
              <>
                <span
                  onClick={() => {
                    handleLike();
                  }}
                  className={cx('option-btn')}
                >
                  <FontAwesomeIcon className={cx('', { primary: isLiked })} icon={faHeart} />
                </span>
              </>
            </Tippy>
          )}

          {playLists && (
            <Tippy animation={'scale-subtle'} content={'Follow'}>
              <>
                <span
                  onClick={() => {
                    handleFollow();
                  }}
                  className={cx('option-btn')}
                >
                  <FontAwesomeIcon
                    className={cx('', { primary: isFollow })}
                    icon={isFollow ? faUserCheck : faUserPlus}
                  />
                </span>
              </>
            </Tippy>
          )}

          <HeadlessTippy
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
                    onClick={handleAddNextUp}
                  >
                    Add to Next up
                  </MenuItem>
                  <MenuItem
                    className={cx('menu-item')}
                    icon={<AddToList className={cx('menu-item-icon')} />}
                    onClick={() => setOpenAddToPlaylist(true)}
                  >
                    Add to Playlist
                  </MenuItem>
                </Wrapper>
              );
            }}
          >
            <span ref={moreBtnRef} className={cx('option-btn')}>
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </HeadlessTippy>

          <div className={cx('modul-left_option-more')}>
            <button className="border-bottom radius-top">
              <FontAwesomeIcon icon={faListOl} />
              <span>Add to Next up</span>
            </button>

            <button className="radius-end">
              <i className="fa-solid fa-list"></i>
              <span className="font-12">Add to Playlist</span>
            </button>
          </div>
        </div>
      </div>

      <a href="/" className={cx('name-gallery')}>
        {data.name}
      </a>
      <span className={cx('name-track')}>{data.artistName}</span>
    </div>
  );
}
export default Gallery;
