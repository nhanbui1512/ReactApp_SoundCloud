import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faHeart,
  faLink,
  faRepeat,
  faPeopleArrows,
  // faShare,
  // faEllipsis,
  // faSquareCaretUp,
  faBars,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

import styles from './ToastPlaylist.module.scss';
import ItemSong from './ItemSong/ItemSong';

const cx = classNames.bind(styles);

const ToastPlaylist = ({ dataItem = [] }) => {
  console.log('in ra dataItem', dataItem);
  // Lấy thumbNail đầu tiên từ songs
  const firstSongThumbNail = dataItem?.[0]?.songs?.[0]?.thumbNail;
  //console.log('in ra firstSongThumbNail', firstSongThumbNail);
  return (
    <div className={cx(['border-bottom', 'margin-bottom-34', 'col'])}>
      <p>{dataItem.name}</p>
      <div className={cx(['col', 'relative'])}>
        <div className={cx(['list-music', 'col'])}>
          <div className={cx('row')}>
            <div className={cx(['list-music_image', 'relative'])}>
              {/* {firstSongThumbNail && (
                <img
                  // src="	https://nhanbui1512.github.io/Sound-Cloud-/assets/img/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg"
                  src={firstSongThumbNail}
                  alt="anhr"
                />
              )} */}
              {/* {dataItem.map(
                (playlistItem) =>
                  playlistItem.songs?.[0]?.thumbNail && (
                    <img
                      key={playlistItem.id} // Đặt key để tránh cảnh báo trong React
                      src={playlistItem.songs[0].thumbNail || ''}
                      alt="anhr"
                    />
                  ),
              )} */}
              <img
                  // src="	https://nhanbui1512.github.io/Sound-Cloud-/assets/img/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg"
                  src={dataItem.owner?.avatar || ''}
                  alt="anhr"
                />
              <span className={cx('list-music_playbtn')}>
                <FontAwesomeIcon icon={faPlay} />
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
              <span>1,186</span>
            </button>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faRepeat} />
              <span>21</span>
            </button>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faPeopleArrows} />
              <span>Follow</span>
            </button>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faLink} />
              <span>Copy Link</span>
            </button>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faBars} />
              <span>Add to Next up</span>
            </button>
            <button className={cx('go-playlist-btn')}>
              <FontAwesomeIcon icon={faEdit} />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastPlaylist;
