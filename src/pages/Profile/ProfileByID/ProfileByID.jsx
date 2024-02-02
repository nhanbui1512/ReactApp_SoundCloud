import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileByID.module.scss';
import { NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Albums from '../Albums/album';
import Playlists from '../Playlists/playlists';
import All from '../All/all';
import PopularTracks from '../Popular_tracks/popular';
import Tracks from '../Tracks/tracks';
import Reposts from '../Reposts/reposts';
import { getUsersById } from 'api/users';
import ShowImage from '../Show_Image/ShowImage';
import Share from '../Share/Share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShare ,faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import apiHandleFeed from 'api/apiHandleFeed';
const cx = classNames.bind(styles);

function ProfileByID() {
  const [popperImage, setPopperImage] = useState(false);
  const [popperShare, setPopperShare] = useState(false);
  const [userData, setUserData] = useState({});
  const [isFollow,setIsFollowed] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      getUsersById(id)
        .then((res) => {
          setUserData(res.data || {});
        })
        .catch((err) => {
          console.log(err);
          navigate('/notfound');
        });
  }, [navigate,id]);

  const handleFollow = async () => {
    try {
      if (!isFollow) {
        // Nếu chưa theo dõi, gọi followUser
        await apiHandleFeed.followUser(id);
        setIsFollowed(true);
      } else {
        // Nếu đã theo dõi, gọi unFollowUser
        await apiHandleFeed.unFollowUser(id);
        setIsFollowed(false);
      }
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    }
  };

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('info-user')}>
          <img
            onClick={() => {
              setPopperImage(true);
            }}
            className={cx('img-email')}
            src={userData?.avatar || ''}
            alt=""
          />
          <div className={cx('name-user')}>
            <div className={cx('lb1')}>{userData?.userName || ''}</div>
            <br />
            <div className={cx('lb2')}>{userData?.bio || ''}</div>
          </div>
          <button className={cx('btn-update-header-img')} type="file">
            <span className={cx('camera')} role="img" aria-label="camera icon">
              📷
            </span>{' '}
            Upload header image
          </button>
        </div>
        <div className={cx('info-music')}>
          <div className={cx('nav-info-left')}>
            <div className={cx('nav-info-left-head')}>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={`/${id}/all`}
              >
                All
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={`/${id}/popular`}
              >
                Popular tracks
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={`/${id}/tracks`}
              >
                Tracks
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={`/${id}/albums`}
              >
                Albums
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={`/${id}/playlists`}
              >
                Playlists
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={`/${id}/reposts`}
              >
                Reposts
              </NavLink>
            </div>
            <div className={cx('router-item')}>
              <div className={cx('router-item-right')}></div>
              <Routes>
                <Route path="/all" element={<All />} />
                <Route path="/popular" element={<PopularTracks />} />
                <Route path="/tracks" element={<Tracks />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/reposts" element={<Reposts />} />
              </Routes>
            </div>
          </div>
          <div className={cx('nav-info-right')}>
            <div className={cx('button-item')}>
              <button className={cx('sidebar__modul-item-follower')} onClick={handleFollow} >
                  <span className={cx('sidebar__modul-item-quantity-follower', { following: isFollow })}>
                  <FontAwesomeIcon
                    className={cx('sidebar-icon')}
                    icon={!isFollow ? faUserPlus : faUserCheck}
                  />
                  <span className={cx('sidebar-data')}>{!isFollow ? 'Follow' : 'Following'}</span>
                  </span>
              </button>
              <button
                onClick={() => {
                  setPopperShare(true);
                }}
                className={cx('btn-share')}
              >
                <FontAwesomeIcon
                    className={cx('sidebar-icon')}
                    icon={faShare}
                  />
                <span style={{ marginTop: '2px', fontSize: '12px' }}>Share</span>
              </button>
            </div>
            <div className={cx('follwer-item')}>
              <div className={cx('follwer-body')}>
                <div className={cx('follower')}>
                  <p>Follower</p>
                  <p style={{ textAlign: 'center' }}>{userData.followerNumber || 0}</p>
                </div>
                <div className={cx('followingitem')}>
                  <p>Following</p>
                  <p style={{ textAlign: 'center' }}>{userData.followingNumber || 0} </p>
                </div>
                <div className={cx('tracks')}>
                  <p>Tracks</p>
                  <p style={{ textAlign: 'center' }}>{userData.track || 0}</p>
                </div>
              </div>
              <div className={cx('brand-items')}>
                Legal - Privacy - Cookie Policy - Consent Manager Imprint - Artist Resources - Blog
                - Charts
                <p>
                  <span style={{ color: 'blue' }}>Language</span>: English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {popperShare && <Share userData={userData} setPopperShare={setPopperShare} />}
      {popperImage && <ShowImage userData={userData} setPopperImage={setPopperImage} />}
    </div>
  );
}

export default ProfileByID;
