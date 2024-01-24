import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import Image from 'components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListUl, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PlayList from 'components/PlayList';
const cx = classNames.bind(styles);

function Information() {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setisFollowed] = useState(false);
  const [openPlayList, setopenPlayList] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleHidden = () => {
    if (!openPlayList) {
      return setopenPlayList(true);
    }
    setIsClosing(true);
    setTimeout(() => {
      setopenPlayList(!openPlayList);
      setIsClosing(false);
    }, 300);
  };
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
          visible={openPlayList}
          placement="top-end"
          interactive
          offset={[0, 18]}
          render={() => {
            return (
              <PlayList className={isClosing ? cx('hidden') : ''} handleHidden={handleHidden} />
            );
          }}
        >
          <div
            onClick={handleHidden}
            className={cx('action-btn', {
              isActive: openPlayList,
            })}
          >
            <FontAwesomeIcon className={cx('action-icon')} icon={faListUl} />
          </div>
        </Tippy>
      </div>
    </div>
  );
}
export default Information;
