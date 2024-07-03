import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useContext, useEffect, useState } from 'react';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { AddToList, AddToPlaylist } from 'components/Icons';
import { StorageContext } from 'context/Storage';
import { changePosition } from 'Utils/arrays';

const {
  faBars,
  faPlay,
  faHeart,
  faEllipsis,
  faRepeat,
  faXmark,
  faTowerBroadcast,
  faExclamationCircle,
  faPause,
} = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const cx = classNames.bind(styles);

function Item({ data }) {
  const storage = useContext(StorageContext);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = (e) => {
    const audioTag = storage.audioRef.current;
    if (data.id !== storage.currentMusic.id) {
      storage.setCurrentMusic(data);
      setIsPlay(!isPlay);
      const playMusic = (event) => {
        event.target.play();
        setIsPlay(true);
        audioTag.removeEventListener('loadeddata', playMusic);
      };
      audioTag.addEventListener('loadeddata', playMusic);
      return; // thoát khỏi hàm
    } else {
      // Nếu đang bài đang phát giống với bài của gallary
      if (audioTag.paused) {
        // Đang dừng thì hiển thị nút Play
        audioTag.play();
      } else {
        // Đang phát thì hiển thị nút pause
        audioTag.pause();
      }
    }
  };

  const handleLike = () => {
    storage.setCurrentPlayList((prev) => {
      var newState = [...prev];
      newState = newState.map((song) => {
        if (song.id === data.id) song.isLiked = !song.isLiked;
        return song;
      });
      return newState;
    });

    if (data.id === storage.currentMusic.id) {
      storage.setCurrentMusic((prev) => {
        var newState = { ...prev };
        newState.isLiked = !newState.isLiked;
        return newState;
      });
    }
  };

  const handleRemovePlaylist = () => {
    storage.setCurrentPlayList((prev) => {
      var newState = [...prev];
      newState = newState.filter((song) => song.id !== data.id);
      return newState;
    });
  };

  const handleAddToNext = () => {
    var indexPlaying = storage.currentPlayList.indexOf(storage.currentMusic);
    var indexOfSong = storage.currentPlayList.indexOf(data);

    storage.setCurrentPlayList((prev) => {
      var newState = [...prev];
      changePosition(newState, indexOfSong, indexPlaying + 1);
      return newState;
    });
  };

  useEffect(() => {
    if (storage.currentMusic.id !== data.id) {
      setIsPlay(false);
    }
    if (storage.currentMusic.id === data.id && storage.audioRef.current.paused === false) {
      setIsPlay(true);
    }
    // eslint-disable-next-line
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

  let menuItems =
    data.id !== storage.currentMusic.id
      ? [
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faHeart} />,
            title: 'Like',
            onClick: handleLike,
            isLiked: data.isLiked,
          },
          { icon: <FontAwesomeIcon height={12} width={12} icon={faRepeat} />, title: 'Repost' },
          { icon: <AddToList />, title: 'Add to Next up', onClick: handleAddToNext },
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faXmark} />,
            title: 'Remove from Playlist',
            onClick: handleRemovePlaylist,
          },
          { icon: <AddToPlaylist />, title: 'Add to Playlist' },
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faTowerBroadcast} />,
            title: 'Station',
          },
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faExclamationCircle} />,
            title: 'Report',
          },
        ]
      : [
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faHeart} />,
            title: 'Like',
            onClick: handleLike,
            isLiked: data.isLiked,
          },
          { icon: <FontAwesomeIcon height={12} width={12} icon={faRepeat} />, title: 'Repost' },
          { icon: <AddToList />, title: 'Add to Next up', onClick: handleAddToNext },

          { icon: <AddToPlaylist />, title: 'Add to Playlist' },
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faTowerBroadcast} />,
            title: 'Station',
          },
          {
            icon: <FontAwesomeIcon height={12} width={12} icon={faExclamationCircle} />,
            title: 'Report',
          },
        ];

  return (
    <div
      className={cx('wrapper', {
        active: data.id === storage.currentMusic.id,
      })}
    >
      <div className={cx(['play-list-item', 'row', ' relative'])}>
        <div className={cx('play-list-item_drag-btn')}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={cx(['relative', 'play-list-item_img'])}>
          <img src={data.thumbNail || ''} alt="" />
          <div onClick={handlePlay} className={cx('play-list-item_status-btn')}>
            <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
          </div>
        </div>
        <div className={cx(['col', 'play-list-item_info'])}>
          <a className={cx('artist-name')} href="/">
            {data.name}
          </a>
          <span>{data.artistName}</span>
        </div>
        <div className={cx(['relative', 'play-list-item_footer'])}>
          <span className={cx('play-list-item_total-time')}>{data.durationTime || '00:00'} </span>

          <div className={cx('play-list-item_group-btn')}>
            <button
              onClick={handleLike}
              style={{
                fontSize: 12,
              }}
              className={cx('like-btn', { primary: data.isLiked })}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <HeadlessTippy
              interactive
              render={() => (
                <Wrapper className={cx('menu-wrapper')}>
                  {menuItems.map((item, index) => (
                    <MenuItem
                      className={cx('menu-item')}
                      key={index}
                      icon={item.icon}
                      separate
                      onClick={item.onClick}
                      primary={item.isLiked}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Wrapper>
              )}
            >
              <button
                style={{
                  fontSize: 12,
                }}
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </HeadlessTippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
