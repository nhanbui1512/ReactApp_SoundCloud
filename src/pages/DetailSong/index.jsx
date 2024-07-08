import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
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
  faRepeat,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getSongById } from 'api/songs';
import { followUser, unfollowUser } from 'api/follow';
import { StorageContext } from 'context/Storage';
import { likeSong, unlikeSong } from 'api/songs';
import ListComment from './ListComment';
import CommentForm from './CommentForm';
import { createComment, getCommentsOfSong } from 'api/comments';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Song() {
  const [followingUser, setFollowingUser] = useState(false);
  const [followSong, setFollowSong] = useState(false);
  const [likedSong, setLikedSong] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const [song, setSong] = useState([]);
  const [commentData, setCommentData] = useState({});

  const [owner, setOwner] = useState([]);
  const navigate = useNavigate();
  const storage = useContext(StorageContext);

  const [isPlaying, setIsPlaying] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getSong = async () => {
      const song = await getSongById(id);
      setLikedSong(song.song.isLiked);
      setSong(song.song);
      setOwner(song.song.owner);
      setFollowingUser(song.song.owner.isFollowed);
    };
    const getComments = async () => {
      const data = await getCommentsOfSong(id);
      setCommentData(data);
    };
    getSong();
    getComments();
  }, [id]);

  // xử lý thời gian bài hát được upload
  const calculateTimeFromNow = (createdAt) => {
    const createAtTime = moment(createdAt);
    return createAtTime.fromNow();
  };

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
    if (!storage.currentUser) navigate('/login'); // chưa login thì chuyển qua trang login
    song.isLiked = !song.isLiked;
    setLikedSong(!likedSong);

    if (likedSong) {
      unlikeSong(song.id)
        .then((res) => {
          setLikedSong(false);
        })
        .catch((err) => {
          console.log(err);
          setLikedSong(true);
        });
    } else {
      likeSong(song.id)
        .then((res) => {
          setLikedSong(true);
        })
        .catch((err) => {
          console.log(err);
          setLikedSong(false);
        });
    }
  };

  const handleFollowing = async () => {
    if (followingUser) {
      setFollowingUser(!followingUser);
      unfollowUser(owner.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setFollowingUser(true);
        });
    } else {
      setFollowingUser(!followingUser);
      followUser(owner.id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setFollowingUser(false);
        });
    }
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleComment = (content) => {
    if (content.trim() === '') return toast.error('Content of comment must be filled');

    createComment(id, content)
      .then((res) => {
        toast.success('Comment successfully');
        setCommentData((prev) => {
          const newState = { ...prev };
          newState.data.unshift(res.data);
          return newState;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('info-user')}>
          <div className={cx('info-song')}>
            <span onClick={handlePlay} className={cx('list-music_playbtn')}>
              <FontAwesomeIcon className={cx('icon-play')} icon={isPlaying ? faPause : faPlay} />
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
            <span className={cx('duration-song')}>{calculateTimeFromNow(song.createAt)}</span>
            <img className={cx('img-song')} src={song.thumbNail} alt={song.name} />
          </div>
        </div>
        <div className={cx('info-music')}>
          <div className={cx('info-song_desc')}>
            <div className="px-5 mb-2">
              <CommentForm onSendComment={handleComment} />
            </div>
            <div className={cx('nav-info-left')}>
              <div className={cx('group-btn_left')}>
                <button onClick={() => handleLikeSong()} className={cx('', { active: likedSong })}>
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
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPlay} />
                  <span>{song.numberOfListen}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{song.likeCount}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faRepeat} />
                  <span>{song.numberOfLoop}</span>
                </div>
              </div>
            </div>
            <div className={cx('song-box')}>
              <div className={cx('song-box_playlist')}>
                <Link to="/">
                  <img className={cx('song-box_img')} src={owner.avatar} alt="" />
                </Link>
                <Link to="/" className={cx('playlist_name')}>
                  {owner.userName}
                </Link>
                <Link to="/" className={cx('playlist_countfollow')}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>{owner.followCount}</span>
                  <FontAwesomeIcon className={cx('song-box_icon')} icon={faChartBar} />
                  <span>{song.playlistCount}</span>
                </Link>
                <div
                  onClick={() => {
                    handleFollowing();
                  }}
                  className={cx('playlist_btnfollow', { follow: followingUser })}
                >
                  <div className={cx('playlist_btnfollow--auto')}>
                    {followingUser ? (
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
              <div className={cx('content')}>
                <ListComment commentData={commentData} />
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
    </>
  );
}

export default React.memo(Song);
