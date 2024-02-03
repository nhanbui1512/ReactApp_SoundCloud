import classNames from 'classnames/bind';
import styles from './ItemSong.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart,
  faLink,
  faPlay,
  faRepeat,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ItemSong = ({ itemMusic }) => {
  return (
    <li className={cx('list-music-item')}>
      <div className={cx('list-music-item_detail-song')}>
        <span className={cx('color-opa-07')}>{itemMusic.artistName}</span>
        <span className={cx('color-white')} style={{ marginLeft: '4px' }}>
          {itemMusic.name}
        </span>
      </div>
      <div className={cx(['list-music-item_group', 'color-white', 'relative'])}>
        <div className={cx('list-music-item_play-rate')}>
          <span className={cx('font-11')}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
          <span className={cx('font-11')}>{itemMusic.numberOfListen}</span>
        </div>

        <div className={cx('group-btn_right')}>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faRepeat} />
          </button>
          <button>
            <FontAwesomeIcon icon={faShare} />
          </button>
          <button>
            <FontAwesomeIcon icon={faLink} />
          </button>
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemSong;
