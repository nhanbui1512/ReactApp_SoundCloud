import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DetailSong.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import {
  faBars,
  faHeart,
  faLink,
  faPeopleArrows,
  faPlay,
  faRepeat,
  faEllipsis,
  faUser,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Song() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/profile/all');
  //   getCurrentUserProfile()
  //     .then((res) => {
  //       set);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       navigate('/login');
  //     });

  // }, [navigate]);

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('info-user')}>
          <div className={cx('info-song')}>
            <span className={cx('list-music_playbtn')}>
              <FontAwesomeIcon className={cx('icon-play')} icon={faPlay} />
            </span>
            <div className={cx('name-user')}>
              <div className={cx('lb1')}>
                Dám Rực Rỡ | gray d X hieuthuhai X wren evans X obito, Prod. by kai đinh & 2pillz
              </div>
              <br />
              <div className={cx('lb2')}>Nwad Vi.1 </div>
              <br />
              <div className={cx('lb2')}>In playlist: Pop</div>
            </div>
          </div>
          <div className={cx('box-song')}>
            <span className={cx('duration-song')}>5 days ago</span>
            <img
              className={cx('img-song')}
              src="https://nhanbui1512.github.io/Sound-Cloud-/assets/img/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={cx('info-music')}>
          <div className={cx('nav-info-left')}>
            <div className={cx('group-btn_left')}>
              <button>
                <FontAwesomeIcon icon={faHeart} />
                <span>Like</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faPeopleArrows} />
                <span>Follow</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faLink} />
                <span>Copy Link</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faBars} />
                <span>Add to Next up</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faEllipsis} />
                <span>More</span>
              </button>
            </div>
            <div className={cx('group-btn_right')}>
              <div>
                <FontAwesomeIcon icon={faPlay} />
                <span>54.5k</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <span>760</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserCheck} />
                <span>120</span>
              </div>
            </div>
          </div>
          <div className={cx('nav-info-right')}>
            <div className={cx('side-bar')}>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;
