import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListUl, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
// import PlayList from 'components/PlayList';
import { StorageContext } from 'context/Storage';
import { likeSong, unlikeSong } from 'api/songs';
import { followUser, unfollowUser } from 'api/follow';
import Queue from 'components/Queue';
const cx = classNames.bind(styles);

function Information({ data }) {
  const storage = useContext(StorageContext);
  const navigate = useNavigate();
  const [isFollowed, setisFollowed] = useState(data.owner?.isFollowed || false);
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

  const handleFollow = () => {
    if (!storage.currentUser) {
      navigate('/login');
      return;
    }

    if (!isFollowed) {
      followUser(data.owner.id).then((res) => {
        setisFollowed(!isFollowed);
      });
    } else {
      unfollowUser(data.owner.id)
        .then((res) => {
          setisFollowed(!isFollowed);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLike = (e) => {
    if (!storage.currentUser) {
      return navigate('/login');
    }

    if (data.isLiked === false) {
      likeSong(data.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      unlikeSong(data.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }

    storage.setCurrentMusic((prev) => {
      var newState = { ...prev };
      newState.isLiked = !prev.isLiked;
      return newState;
    });

    storage.setCurrentPlayList((prev) => {
      var newPrev = [...prev];
      newPrev = newPrev.map((song) => {
        if (song.id === data.id) {
          song.isLiked = !prev.isLiked;
        }
        return song;
      });
      return newPrev;
    });
  };

  useEffect(() => {
    setisFollowed(data.owner?.isFollowed || false);
  }, [data]);

  return (
    <div className={cx('wrapper')}>
      <Link to={`/song/${data.id}`} className={cx('avatar')}>
        <Image src={data.thumbNail} alt="" />
      </Link>

      <div className={cx('information')}>
        <div className={cx('text-wrap')}>
          <Link href="/oh-putitbackon" className={cx('artist')} title="putitbackon">
            {data.artistName}
          </Link>
        </div>
        <div className={cx('text-wrap')}>
          <Link to={`/song/${data.id}`} className={cx('song')} title="putitbackon">
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
          <div onClick={handleLike} className={cx('action-btn', { isActive: data.isLiked })}>
            <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
          </div>
        </Tippy>
        <Tippy offset={[0, 8]} render={() => <div className={cx('like-tippy')}>Follow</div>}>
          <div onClick={handleFollow} className={cx('action-btn', { isActive: isFollowed })}>
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
            return <Queue className={isClosing ? cx('hidden') : ''} handleHidden={handleHidden} />;
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
Information.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Information;
