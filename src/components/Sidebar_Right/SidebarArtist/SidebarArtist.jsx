import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import apiHandleFeed from 'api/apiHandleFeed';
import { useParams } from 'react-router-dom';


const cx = classNames.bind(styles);
const SidebarArtist = ({ art }) => {
  const {id} = useParams();
  const [isFollow, setIsFollowed] = useState(false);
  //const [followUser, setFollowUser] = useState(false);
  useEffect(() => {
    const fetchFollow = async (id) => {
      try {
        const res = await apiHandleFeed.followUser(id);
        setIsFollowed(res.data.data);
        console.log(res.data.data);
      } catch(error) {
        console.log(error);
      }
    }
    fetchFollow(id);
  }, [id])
  const handleFollow = () => {
    // Đảo ngược giá trị của isFollow
    setIsFollowed(!isFollow);
    // Hiển thị toast tương ứng
    const toastMessage = isFollow ? 'Hủy theo dõi' : 'Đang theo dõi';
    toast.success(toastMessage);
  }
  return (
    <li className={cx('sidebar__modul-list-item')}>
      <img src={art.avatar} alt="" className={cx('sidebar__modul-image')} />

      <div className={cx('sidebar__modul-item-info')}>
        <div className={cx('sidebar__modul-item-head')}>
          <div className={cx('sidebar__modul-item-name')}>{art.userName}</div>
          <div className={cx('sidebar__modul-item-wrap')}>
            <span className={cx('sidebar__modul-item-know')}>{art.follower} K</span>
          </div>
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
                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faChartBar} />
                <span className={cx('sidebar-data')}>{art.songs.length}</span>
              </span>
            </span>
          </div>
          <button 
            className={cx('sidebar__modul-item-follower')}
            onClick={handleFollow}
          >
            <span className={cx('sidebar__modul-item-quantity-follower')}>
              <FontAwesomeIcon
               className={cx('sidebar-icon')} 
               icon={!isFollow ? faUserPlus : faUserCheck} 
              />
              <span className={cx('sidebar-data')}>{!isFollow ? "follow" : "following"}</span>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};
export default SidebarArtist;
