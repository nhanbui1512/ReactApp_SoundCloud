// import classNames from 'classnames/bind';

// import styles from '../Profile.module.scss';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import ToastPlaylist from 'components/ToastPlaylist';
import apiHandlePlayList from 'api/apiHandlePlayList';
import { StorageContext } from 'context/Storage';

//const cx = classNames.bind(styles);
const Playlists = () => {
  const [playListSong, setPlaylistSong] = useState([]);

  const storage = useContext(StorageContext);
  const id = storage.userData.id;

  const fetchPlayList = async () => {
    try {
      const res = await apiHandlePlayList.getPlayList(id);
      setPlaylistSong(res.data.data.playlists);
    } catch (error) {
      console.error('error fetching data from playlist', error);
    }
  };
  useEffect(() => {
    fetchPlayList();
    // eslint-disable-next-line
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
