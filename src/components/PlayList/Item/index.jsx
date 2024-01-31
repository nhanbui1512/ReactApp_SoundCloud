import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { AddToList, AddToPlaylist } from 'components/Icons';

const {
  faBars,
  faPlay,
  faHeart,
  faEllipsis,
  faRepeat,
  faXmark,
  faTowerBroadcast,
  faExclamationCircle,
} = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const cx = classNames.bind(styles);

function Item({ active }) {
  const [isLiked, setIsLiked] = useState(false);

  const menuItems = [
    {
      icon: <FontAwesomeIcon height={12} width={12} icon={faHeart} />,
      title: 'Like',
      onClick: (e) => {
        e.preventDefault();
        console.log('set like');
        setIsLiked(!isLiked);
      },
      isLiked: isLiked,
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
