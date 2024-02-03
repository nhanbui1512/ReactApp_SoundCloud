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
  faEllipsis,
  faUser,
  faUserCheck,
  faUserAlt,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { getSongById } from 'api/songs';

const cx = classNames.bind(styles);

function Song() {
  const [followUser, setFollowUser] = useState(false);
  const [followSong, setFollowSong] = useState(false);
  const [likeSong, setLikeSong] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const [song, setSong] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    const getSong = async () => {
      const song = await getSongById(id);
      setLikeSong(song.isLiked);
      setFollowSong(song.owner.isFollowed);
      setSong(song.song);
    };
    getSong();
  }, [id]);
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleCopyLink = async () => {
    const domain = window.origin;
    var urlPage = `${domain}/song/${song.id}`;
    navigator.clipboard.writeText(urlPage);
    setCopyLink(!copyLink);

    const timeReset = setTimeout(() => {
      setCopyLink(copyLink);
    }, 500);

    await sleep(1000);
    return clearTimeout(timeReset);
  };
  const handleFollowSong = () => {
    setFollowSong(!followSong);
  };

  const handleLikeSong = () => {
    setLikeSong(!likeSong);
  };

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('info-user')}>
          <div className={cx('info-song')}>
            <span className={cx('list-music_playbtn')}>
              <FontAwesomeIcon className={cx('icon-play')} icon={faPlay} />
            </span>
            <div className={cx('name-user')}>
              <Link to="/" className={cx('lb1')}>
                {song.name}
              </Link>
              <br />
              <div className={cx('lb2')}>{song.artistName} </div>
              <br />
              <div className={cx('lb2')}>In genre: {song.nameGenre}</div>
            </div>
          </div>
          <div className={cx('box-song')}>
            <span className={cx('duration-song')}>{song.duration} days ago</span>
            <img className={cx('img-song')} src={song.thumbNail} alt="" />
          </div>
        </div>
        <div className={cx('info-music')}>
          <div className={cx('info-song_desc')}>
            <div className={cx('nav-info-left')}>
              <div className={cx('group-btn_left')}>
                <button onClick={() => handleLikeSong()} className={cx('', { active: likeSong })}>
                  {likeSong ? (
                    <>
                      <FontAwesomeIcon icon={faHeart} />
                      <span>Liked</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faHeart} />
                      <span>Like</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleFollowSong()}
                  className={cx('', { active: followSong })}
                >
                  {followSong ? (
                    <>
                      <FontAwesomeIcon icon={faPeopleArrows} />
                      <span>Following</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPeopleArrows} />
                      <span>Follow</span>
                    </>
                  )}
                </button>
                <button onClick={() => handleCopyLink()} className={cx('', { active: copyLink })}>
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
                  <span>{song.numberOfListen}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{song.likeCount}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUserCheck} />
                  <span>{song.likeCount}</span>
                </div>
              </div>
            </div>
            <div className={cx('song-box')}>
              <div className={cx('song-box_playlist')}>
                <Link to="/">
                  <img
                    className={cx('song-box_img')}
                    src="https://nhanbui1512.github.io/Sound-Cloud-/assets/img/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg"
                    alt=""
                  />
                </Link>
                <Link to="/" className={cx('playlist_name')}>
                  Trending Music
                </Link>
                <Link to="/" className={cx('playlist_countfollow')}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>534</span>
                  <FontAwesomeIcon className={cx('song-box_icon')} icon={faChartBar} />
                  <span>4</span>
                </Link>
                <div
                  onClick={() => {
                    setFollowUser(!followUser);
                  }}
                  className={cx('playlist_btnfollow', { follow: followUser })}
                >
                  <div className={cx('playlist_btnfollow--auto')}>
                    {followUser ? (
                      <>
                        <FontAwesomeIcon icon={faUserCheck} />
                        <span>Following</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUserAlt} />
                        <span>Follow</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={cx('song-box_info')}>
                <Link to="/" className={cx('info_nameart')}>
                  {song.artistName}
                </Link>
                <span className={cx('info_desc')}>{song.description}</span>
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
