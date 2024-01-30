import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import Image from 'components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListUl, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Queue from 'components/Queue';
const cx = classNames.bind(styles);

function Information({ data }) {
  const [isLiked, setIsLiked] = useState(data.isLiked);
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
        <Image src={data.thumbNail} alt="" />
      </Link>

      <div className={cx('information')}>
        <div className={cx('text-wrap')}>
          <Link href="/oh-putitbackon" className={cx('artist')} title="putitbackon">
            {data.artistName}
          </Link>
        </div>
        <div className={cx('text-wrap')}>
          <Link href="/oh-putitbackon" className={cx('song')} title="putitbackon">
            {data.name}
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
              <Queue className={isClosing ? cx('hidden') : ''} handleHidden={handleHidden} />
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
