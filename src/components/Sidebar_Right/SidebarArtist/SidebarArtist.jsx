import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
//import { useToast } from 'react-toastify';
//import { useToast } from '../../../context/ToastContext';

const cx = classNames.bind(styles);
const SidebarArtist = ({ art }) => {
  const [isFollow, setIsFollowed] = useState(false);
  // const { showToast } = useToast();
  // console.log('in ra ',showToast);
  const handleFollow = () => {
    // Đảo ngược giá trị của isFollow
    setIsFollowed(!isFollow);

    // Hiển thị toast tương ứng
    const toastMessage = isFollow ? 'Hủy theo dõi' : 'Đang theo dõi';
    toast.success(toastMessage);
  }
  return (
    <li className={cx('sidebar__modul-list-item')}>
      <img src={art.image} alt="" className={cx('sidebar__modul-image')} />

      <div className={cx('sidebar__modul-item-info')}>
        <div className={cx('sidebar__modul-item-head')}>
          <div className={cx('sidebar__modul-item-name')}>{art.name}</div>
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
                <span className={cx('sidebar-data')}>{art.song}</span>
              </span>
            </span>
          </div>
          <button 
            className={cx('sidebar__modul-item-follower')}
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
              <span className={cx('sidebar-data')}>{!isFollow ? "follow" : "following"}</span>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};
export default SidebarArtist;
