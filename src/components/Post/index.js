import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Post({ data }) {
  console.log(data);
  const moreBtnRef = useRef();
  const [isFollowing, setIsFollowing] = useState(false);
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
    setIsFollowing(!isFollowing);
  };
  return (
    <div className={cx('modul-left_item')}>
      <div className={cx('modul-left_item-container-img')}>
        <img className={cx('modul-left_image')} src={data.image} alt="" />
      </div>

      <a href="/" className={cx('name-post')}>
        {data.name}
      </a>
      <span className={cx('name-post')}>
        <div>
          <FontAwesomeIcon className={cx('')} icon={faUserAlt} />
          <span className={cx('followers-post')}>1,728 followers</span>
        </div>

        <div className={cx('box-btn')}>
          <div
            onClick={() => {
              handleFollowing();
            }}
            className={cx('btn', { following: isFollowing })}
          >
            <FontAwesomeIcon className={cx('')} icon={faUserCheck} />
            <span className={cx('followers-post')}>Following</span>
          </div>
        </div>
      </span>
    </div>
  );
}
export default Post;
