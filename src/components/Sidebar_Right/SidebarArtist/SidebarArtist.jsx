import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUser, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
//import { useToast } from 'react-toastify';
//import { useToast } from '../../../context/ToastContext';

const cx = classNames.bind(styles);
const SidebarArtist = ({ art }) => {
  const [isFollow, setIsFollowed] = useState(false);

  const handleFollow = () => {
    // Đảo ngược giá trị của isFollow
    setIsFollowed(!isFollow);
  };
  return (
    <li className={cx('sidebar__modul-list-item')}>
      <img src={art.image} alt="" className={cx('sidebar__modul-image')} />

      <div className={cx('sidebar__modul-item-info')}>
        <div className={cx('sidebar__modul-item-head')}>
          <div className={cx('sidebar__modul-item-name')}>{art.name}</div>
        </div>
        <div className={cx('sidebar__modul-item-bottom')}>
          <div className="sidebar__modul-item-bottom-left">
            <span className={cx('sidebar__modul-item-quantity-follower')}>
              <span className={cx('sidebar__modul-item-quantity-follower')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faUser} />
                <span className={cx('sidebar-data')}>{art.follower}</span>
              </span>
            </span>
            <span className={cx('sidebar__modul-item-quantity-song')}>
              <span className={cx('sidebar__modul-item-quantity-follower')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faMusic} />
                <span className={cx('sidebar-data')}>{art.song}</span>
              </span>
            </span>
          </div>
          <button
            className={cx('sidebar__modul-item-follower', { following: isFollow })}
            // onClick={() => {
            //   setIsFollowed(!isFollow);

            // }}
            onClick={handleFollow}
          >
            <span className={cx('sidebar__modul-item-quantity-follower')}>
              <FontAwesomeIcon
                className={cx('sidebar-icon')}
                icon={!isFollow ? faUserPlus : faUserCheck}
              />
              <span className={cx('sidebar-data')}>{!isFollow ? 'Follow' : 'Following'}</span>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};
export default SidebarArtist;
