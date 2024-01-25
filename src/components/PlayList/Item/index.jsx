import classNames from 'classnames/bind';
import styles from './Item.module.scss';
const { faBars, faPlay, faHeart, faEllipsis } = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const cx = classNames.bind(styles);
function Item({ active }) {
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
          <img src="https://i1.sndcdn.com/artworks-000255301979-dep8nv-t50x50.jpg" alt="" />
          <div className={cx('play-list-item_status-btn')}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
        <div className={cx(['col', 'play-list-item_info'])}>
          <a href="/">3107</a>
          <span>W/n ft Duongg x Nâu</span>
        </div>
        <div className={cx(['relative', 'play-list-item_footer'])}>
          <span className={cx('play-list-item_total-time')}>3:52</span>

          <div className={cx('play-list-item_group-btn')}>
            <button
              style={{
                fontSize: 12,
                color: 'var(--orange-primary)',
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              style={{
                fontSize: 12,
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
