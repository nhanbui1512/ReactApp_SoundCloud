import classNames from 'classnames/bind';
import styles from './ToastPlaylist.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faHeart,
  faLink,
  faBars,
  faEdit,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import ItemSong from './ItemSong/ItemSong';
import { EditPopup } from 'components/Playlist/EditPopup/EditPopup';
import { useContext, useEffect, useState } from 'react';
import { StorageContext } from 'context/Storage';

const cx = classNames.bind(styles);

const PlaylistList = ({ dataItem, refresh }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const storage = useContext(StorageContext);
  const [totalLike, setTotalLike] = useState(0);

  // tính tổng số bài hát mình đã like
  useEffect(() => {
    const newTotalLike = dataItem.songs?.reduce((acc, curr) => {
      return acc + curr.likeCount;
    }, 0);
    setTotalLike(newTotalLike);
  }, [dataItem.songs]);

  const HandleCloseEdit = () => {
    setOpenEdit(false);
    refresh();
  };
  const handlePlay = () => {
    const audioTag = storage.audioRef.current;

    if (storage.playlistId !== dataItem.id) {
      storage.setCurrentPlayList(dataItem.songs);
      storage.setCurrentMusic(dataItem.songs[0]);
      storage.setPlaylistId(dataItem.id);
      const playMusic = (event) => {
        event.target.play();
        setIsPlaying(true);
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

  useEffect(() => {
    if (storage.playlistId !== dataItem.id) {
      setIsPlaying(false);
    }
  }, [storage.playlistId, dataItem.id]);

  useEffect(() => {
    const audioTag = storage.audioRef.current;

    const handlePlay = () => {
      if (dataItem.id === storage.playlistId) {
        setIsPlaying(true);
      }
    };

    const handlePause = () => {
      if (dataItem.id === storage.playlistId) {
        setIsPlaying(false);
      }
    };

    audioTag.addEventListener('play', handlePlay);
    audioTag.addEventListener('pause', handlePause);

    return () => {
      audioTag.removeEventListener('play', handlePlay);
      audioTag.removeEventListener('pause', handlePlay);
    };
  }, [storage.audioRef, storage.playlistId, dataItem.id]);

  return (
    <div className={cx(['border-bottom', 'margin-bottom-34', 'col'])}>
      <EditPopup open={openEdit} onClose={HandleCloseEdit} playlistData={dataItem} />
      <p>{dataItem.name}</p>
      <p className={cx('modul-left_describe')}>Newly posted tracks. Just for you</p>
      <div className={cx(['col', 'relative'])}>
        <div className={cx(['list-music', 'col'])}>
          <div className={cx('row')}>
            <div className={cx(['list-music_image', 'relative'])}>
              <img src={dataItem.songs[0]?.thumbNail || ''} alt={dataItem.name} />
              <span onClick={handlePlay} className={cx('list-music_playbtn')}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </span>
            </div>
            <div className={cx('list-music-container')}>
              <ul className={cx(['list-music-container_scroll', 'col'])}>
                {dataItem.songs?.map((itemMusic, index) => (
                  <ItemSong itemMusic={itemMusic} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={cx(['list-music_footer', 'row'])}>
          <div className={cx('group-btn_right')}>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faHeart} />
              <span>{totalLike}</span>
            </button>
            {/* <button 
              className={cx('go-playlist-btn')}
              // onClick={() => {
              //   setPopperShare(true);
              // }}
            >
              <FontAwesomeIcon icon={faShare} />
              <span>Share</span>
            </button> */}
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faLink} />
              <span>Copy Link</span>
            </button>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faBars} />
              <span>Add to Next up</span>
            </button>
            <button className={cx('go-playlist-btn')} onClick={() => setOpenEdit(true)}>
              <FontAwesomeIcon icon={faEdit} />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistList;
