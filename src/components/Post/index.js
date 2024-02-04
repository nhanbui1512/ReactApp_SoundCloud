import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { useEffect, useRef, useState, useContext } from 'react';
import { followUser, unfollowUser } from 'api/follow';
import { LibraryContext } from 'context/Library';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Post({ data }) {
  const context = useContext(LibraryContext);

  const moreBtnRef = useRef();
  const [isFollowing, setIsFollowing] = useState(data.isFollow);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem sự kiện click có xảy ra ngoài nút button không
      if (moreBtnRef.current && !moreBtnRef.current.contains(event.target)) {
        // Thực hiện hành động khi click ra ngoài
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              // User.countFollow -= 1;
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
              // User.countFollow += 1;
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
            {isFollowing ? (
              <>
                <FontAwesomeIcon className={cx('')} icon={faUserCheck} />
                <span className={cx('followers-post')}>Following</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon className={cx('')} icon={faUserPlus} />
                <span className={cx('followers-post')}>Follow</span>
              </>
            )}
          </div>
        </div>
      </span>
    </div>
  );
}
export default Post;
