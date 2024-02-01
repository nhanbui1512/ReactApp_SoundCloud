import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faEllipsis,
  faHeart,
  faLink,
  faRepeat,
  faShare,
  faPeopleArrows,
  faSquareCaretUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import styles from './ToastPlaylist.module.scss';
import ItemSong from './ItemSong/ItemSong';

const cx = classNames.bind(styles);

const ToastPlaylist = () => {
  return (
    <div className={cx(['border-bottom', 'margin-bottom-34', 'col'])}>
      <div className={cx(['col', 'relative'])}>
        <div className={cx(['list-music', 'col'])}>
          <div className={cx('row')}>
            <div className={cx(['list-music_image', 'relative'])}>
              <img
                src="	https://nhanbui1512.github.io/Sound-Cloud-/assets/img/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg"
                alt="anhr"
              />
              <span className={cx('list-music_playbtn')}>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <div className={cx('list-music-container')}>
              <ul className={cx(['list-music-container_scroll', 'col'])}>
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
                <ItemSong />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastPlaylist;
