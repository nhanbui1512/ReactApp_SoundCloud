import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { StorageContext } from 'context/Storage';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { followUser, unfollowUser } from 'api/follow';

const cx = classNames.bind(styles);

const SidebarArtist = ({ art }) => {
  const [isFollow, setIsFollowed] = useState(art.isFollowed || false);

  const navigate = useNavigate();
  const storage = useContext(StorageContext);

  const handleFollow = async (e) => {
    e.preventDefault();

    if (!storage.currentUser) return navigate('/login');

    if (!isFollow) {
      setIsFollowed(true);
      followUser(art.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setIsFollowed(false);
        });
    } else {
      setIsFollowed(false);
      unfollowUser(art.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setIsFollowed(true);
        });
    }
  };

  return (
    <Link to={`/${art.id}`} className={cx('sidebar__modul-list-item')}>
      <img src={art.avatar} alt="" className={cx('sidebar__modul-image')} />

      <div className={cx('sidebar__modul-item-info')}>
        <div className={cx('sidebar__modul-item-head')}>
          <div className={cx('sidebar__modul-item-name')}>{art.userName}</div>
        </div>
        <div className={cx('sidebar__modul-item-bottom')}>
          <div className="sidebar__modul-item-bottom-left">
            <span className={cx('sidebar__modul-item-quantity-follower')}>
              <span className={cx('sidebar__modul-item-quantity-follower')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faUser} />
                <span className={cx('sidebar-data')}>{art.followerNumber}</span>
              </span>
            </span>
            <span className={cx('sidebar__modul-item-quantity-song')}>
              <span className={cx('sidebar__modul-item-quantity-follower')}>
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faChartBar} />
                <span className={cx('sidebar-data')}>{art.songs?.length}</span>
              </span>
            </span>
          </div>
          <button className={cx('sidebar__modul-item-follower')} onClick={handleFollow}>
            <span className={cx('sidebar__modul-item-quantity-follower', { following: isFollow })}>
              <FontAwesomeIcon
                className={cx('sidebar-icon')}
                icon={!isFollow ? faUserPlus : faUserCheck}
              />
              <span className={cx('sidebar-data')}>{!isFollow ? 'Follow' : 'Following'}</span>
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default SidebarArtist;
