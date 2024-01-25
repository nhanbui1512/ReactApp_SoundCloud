import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import Image from 'components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListUl, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function Information() {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setisFollowed] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <Link className={cx('avatar')}>
        <Image src="https://i1.sndcdn.com/artworks-1yP6LpbI38XjSL6f-vyPXXw-t50x50.jpg" alt="" />
      </Link>

      <div className={cx('information')}>
        <div className={cx('text-wrap')}>
          <Link href="/oh-putitbackon" className={cx('artist')} title="putitbackon">
            putitbackon
          </Link>
        </div>
        <div className={cx('text-wrap')}>
          <Link href="/oh-putitbackon" className={cx('song')} title="putitbackon">
            Tearliner - 이끌림 (Vocal by Kim Go Eun 김고은) [치즈인더트랩 Cheese in the Trap OST‬]
          </Link>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginLeft: 6,
        }}
      >
        <Tippy offset={[0, 8]} render={() => <div className={cx('like-tippy')}>Like</div>}>
          <div
            onClick={() => {
              setIsLiked(!isLiked);
            }}
            className={cx('action-btn', { isActive: isLiked })}
          >
            <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
          </div>
        </Tippy>
        <Tippy offset={[0, 8]} render={() => <div className={cx('like-tippy')}>Follow</div>}>
          <div
            onClick={() => {
              setisFollowed(!isFollowed);
            }}
            className={cx('action-btn', { isActive: isFollowed })}
          >
            <FontAwesomeIcon
              className={cx('action-icon')}
              icon={isFollowed ? faUserCheck : faUserPlus}
            />
          </div>
        </Tippy>
        <Tippy
          visible
          render={() => {
            return <div className={cx('playlist')}>playlist</div>;
          }}
        >
          <div className={cx('action-btn')}>
            <FontAwesomeIcon className={cx('action-icon')} icon={faListUl} />
          </div>
        </Tippy>
      </div>
    </div>
  );
}
export default Information;
