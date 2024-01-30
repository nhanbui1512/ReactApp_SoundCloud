import { createContext, useEffect, useRef, useState } from 'react';

import { getCookie } from 'services/local/cookie';
import { getCurrentUserProfile } from 'api/users';
import { currentPlaylist, music } from './data';

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(music);
  const [userData, setUserData] = useState({});

  const audioRef = useRef();
  const [currentPlayList, setCurrentPlayList] = useState(currentPlaylist); // playlist đang phát
  const [indexSong, setIndexSong] = useState(0); // vị trí bài hát đang play trong playlist

  const states = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser, // Đẵ đăng nhập hay chưa
    currentMusic, // Thông tin bài hát đang phát
    setCurrentMusic,
    audioRef, // Thẻ audio
    userData, // dữ liệu người dùng sau khi đăng nhập
    setUserData,
    currentPlayList, // playlist đang chơi
    setCurrentPlayList,
    indexSong,
    setIndexSong,
  };

  useEffect(() => {
    if (currentPlayList.length > 0) {
      setCurrentMusic(currentPlayList[indexSong]);
    }
    // eslint-disable-next-line
  }, [indexSong]);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken') || getCookie('authToken');
    if (authToken) {
      getCurrentUserProfile()
        .then((res) => {
          const userData = {
            id: res.data.id,
            avatar: res.data.avatar,
            email: res.data.email,
            userName: res.data.userName,
            bio: res.data.bio,
            country: res.data.country,
            followerNumber: res.data.followerNumber,
            followingNumber: res.data.followingNumber,
          };
          setUserData(userData);
          setCurrentUser(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, []);

  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}

export default GlobalStates;
