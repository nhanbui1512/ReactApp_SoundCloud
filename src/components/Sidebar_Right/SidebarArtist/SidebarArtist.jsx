import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import apiHandleFeed from 'api/apiHandleFeed';
import { StorageContext } from 'context/Storage';
import { useNavigate } from 'react-router';

const cx = classNames.bind(styles);

const SidebarArtist = ({ art }) => {
  const [isFollow, setIsFollowed] = useState(art.isFollowed);
  const navigate = useNavigate();
  const storage = useContext(StorageContext);

  const handleFollow = async () => {
    try {
      if (!storage.currentUser) {
        return navigate('/login');
      }
      if (!isFollow) {
        // Nếu chưa theo dõi, gọi followUser
        await apiHandleFeed.followUser(art.id);
        setIsFollowed(true);
      } else {
        // Nếu đã theo dõi, gọi unFollowUser
        await apiHandleFeed.unFollowUser(art.id);
        setIsFollowed(false);
      }
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    }
  };

  return (
    // <Link>
    // </Link>
    <li className={cx('sidebar__modul-list-item')}>
      <img src={art.avatar} alt="" className={cx('sidebar__modul-image')} />

      <div className={cx('sidebar__modul-item-info')}>
        <div className={cx('sidebar__modul-item-head')}>
          <div className={cx('sidebar__modul-item-name')}>{art.userName}</div>
          {/* <div className={cx('sidebar__modul-item-wrap')}>
            <span className={cx('sidebar__modul-item-know')}>{art.follower}</span>
          </div> */}
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
                <span className={cx('sidebar-data')}>{art.songs.length}</span>
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
    </li>
  );
};
export default SidebarArtist;
