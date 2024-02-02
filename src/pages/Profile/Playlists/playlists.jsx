// import classNames from 'classnames/bind';

// import styles from '../Profile.module.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import ToastPlaylist from 'components/ToastPlaylist';
import apiHandlePlayList from 'api/apiHandlePlayList';

//const cx = classNames.bind(styles);
const Playlists = () => {
  const [playListSong, setPlaylistSong] = useState([]);

  const fetchPlayList = async () => {
    try {
      const res = await apiHandlePlayList.getPlayList();
      setPlaylistSong(res.data.data);
    } catch (error) {
      console.error('error fetching data from playlist', error);
    }
  };
  useEffect(() => {
    fetchPlayList();
  }, []);

  return (
    <>
      {playListSong.map((playListItem, index) => (
        <ToastPlaylist dataItem={playListItem} key={index} refresh={fetchPlayList} />
      ))}
    </>
  );
};
export default Playlists;
