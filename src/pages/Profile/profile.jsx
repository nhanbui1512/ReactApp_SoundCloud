import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Albums from './Albums/album';
import Playlists from './Playlists/playlists';
import All from './All/all';
import PopularTracks from './Popular_tracks/popular';
import Tracks from './Tracks/tracks';
import Reposts from './Reposts/reposts';
import EditProfile from './Edit_profile/EditProfile';
import { getCurrentUserProfile } from 'api/users';
import ShowImage from './Show_Image/ShowImage';

const cx = classNames.bind(styles);

function Profile() {
  const [popperEdit, setPopperEdit] = useState(false);
  const [popperImage, setPopperImage] = useState(false);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUserProfile()
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
      
  }, [navigate]);

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('info-user')}>
          <img onClick={() => {setPopperImage(true);}}className={cx('img-email')} src={userData.avatar || ''} alt="" />
          <div className={cx('name-user')}>
            <div className={cx('lb1')}>{userData.userName || ''}</div>
            <br />
            <div className={cx('lb2')}>{userData.bio || ''}</div>
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
                to={'/profile/all'}
              >
                All
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={'/profile/popular'}
              >
                Popular tracks
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={'/profile/tracks'}
              >
                Tracks
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={'/profile/albums'}
              >
                Albums
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={'/profile/playlists'}
              >
                Playlists
              </NavLink>
              <NavLink
                className={(nav) => cx('navbar', { active: nav.isActive })}
                to={'/profile/reposts'}
              >
                Reposts
              </NavLink>
            </div>
            <div className={cx('router-item')}>
              <div className={cx("router-item-right")}></div>
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
              <button className={cx('btn-share')}>Share</button>
              <button
                onClick={() => {
                  setPopperEdit(true);
                }}
                className={cx('btn-edit')}
              >
                Edit
              </button>
            </div>
            <div className={cx('follwer-item')}>
              <div className={cx('follwer-body')}>
                <div className={cx('follower')}>
                  <p>Follower</p>
                  <p style={{ textAlign: 'center' }}>{userData.followerNumber || 0}</p>
                </div>
                <div className={cx('following')}>
                  <p>Following</p>
                  <p style={{ textAlign: 'center' }}>{userData.followingNumber || 0} </p>
                </div>
                <div className={cx('tracks')}>
                  <p>Tracks</p>
                  <p style={{ textAlign: 'center' }}>{userData.track || 0}</p>
                </div>
              </div>
              <div className={cx('brand-items')}>
                Legal - Privacy - Cookie Policy - Consent Manager Imprint - Artist Resources - Blog - Charts 
                <p><span style={{color: "blue"}}>Language</span>: English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
                
      {popperEdit && <EditProfile userData={userData} setPopperEdit={setPopperEdit} />}
      {popperImage && <ShowImage  userData={userData} setPopperEdit={setPopperImage} />}
    </div>
  );
}

export default Profile;
