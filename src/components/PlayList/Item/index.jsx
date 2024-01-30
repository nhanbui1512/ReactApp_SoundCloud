import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useContext, useEffect, useState } from 'react';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { AddToList, AddToPlaylist } from 'components/Icons';
import { StorageContext } from 'context/Storage';

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

function Item({ data, active, index }) {
  const storage = useContext(StorageContext);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = (e) => {
    const audioTag = storage.audioRef.current;

    if (data.id !== storage.currentMusic.id) {
      storage.setIndexSong(index);
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

  const menuItems = [
    {
      icon: <FontAwesomeIcon height={12} width={12} icon={faHeart} />,
      title: 'Like',
      onClick: handleLike,
      isLiked: data.isLiked,
    },
    { icon: <FontAwesomeIcon height={12} width={12} icon={faRepeat} />, title: 'Repost' },
    { icon: <AddToList />, title: 'Add to Next up' },
    {
      icon: <FontAwesomeIcon height={12} width={12} icon={faXmark} />,
      title: 'Remove from Next up',
    },
    { icon: <AddToPlaylist />, title: 'Add to Playlist' },
    { icon: <FontAwesomeIcon height={12} width={12} icon={faTowerBroadcast} />, title: 'Station' },
    {
      icon: <FontAwesomeIcon height={12} width={12} icon={faExclamationCircle} />,
      title: 'Report',
    },
  ];

  return (
    <div
      className={cx('wrapper', {
        active: active,
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
