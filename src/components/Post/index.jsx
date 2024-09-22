import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { useState, useContext } from 'react';
import { followUser, unfollowUser } from 'api/follow';
import { LibraryContext } from 'context/Library';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const cx = classNames.bind(styles);

const example = {
  avatar:
    'http://res.cloudinary.com/dmykkmqwz/image/upload/v1706841987/avatars/zoga6la9w86nhlroq1m6.jpg',
  createAtFormatTime: '21:12:37 26/01/2024',
  updateAtFormatTime: '9:46:26 02/02/2024',
  id: 6,
  userName: 'Nguyễn Chí Quốc',
  email: 'quoc@gmail.com',
  city: 'Quảng Nam',
  country: 'Việt Nam',
  bio: 'IT BK ĐN',
  //...
};

function Post({ data = example }) {
  const context = useContext(LibraryContext);
  const [isFollowing, setIsFollowing] = useState(data.isFollowed);

  const handleFollowing = async () => {
    if (isFollowing) {
      setIsFollowing(!isFollowing);
      unfollowUser(data.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setIsFollowing(true);
        });
      if (context) {
        context.setDataUsers((prev) => {
          var newUsers = [...prev];
          newUsers = newUsers.map((User) => {
            if (User.id === data.id) {
              User.isFollow = !User.isFollow;
            }
            return User;
          });
          return newUsers;
        });
      }
    } else {
      setIsFollowing(!isFollowing);
      followUser(data.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setIsFollowing(false);
        });
      if (context) {
        context.setDataUsers((prev) => {
          var newUsers = [...prev];
          newUsers = newUsers.map((User) => {
            if (User.id === data.id) {
              User.isFollow = !User.isFollow;
            }
            return User;
          });
          return newUsers;
        });
      }
    }
  };

  return (
    <div className={cx('modul-left_item')}>
      <Link to={`/${data.id}`} className={cx('modul-left_item-container-img')}>
        <img className={cx('modul-left_image')} src={data.avatar} alt="" />
      </Link>

      <Link to={`/${data.id}`} className={cx('name-post')}>
        {data.userName}
      </Link>
      <span className={cx('name-post')}>
        <div>
          <FontAwesomeIcon className={cx('')} icon={faUserAlt} />
          <span className={cx('followers-post')}>{data.countFollow} followers</span>
        </div>

        <div className={cx('box-btn')}>
          <div
            onClick={() => {
              handleFollowing();
            }}
            className={cx('btn', { following: isFollowing })}
          >
            <div>
              <FontAwesomeIcon className={cx('')} icon={isFollowing ? faUserCheck : faUserPlus} />
              <span className={cx('followers-post')}>{isFollowing ? `Following` : `Follow`}</span>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};
export default React.memo(Post);
