// import classNames from 'classnames/bind';

// import styles from '../Profile.module.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import apiHandlePlayList from 'api/apiHandlePlayList';
import { useParams } from 'react-router-dom';
import TrackPlaylist from 'components/TrackProfile';

//const cx = classNames.bind(styles);
const Playlists = () => {
  const [playListSong, setPlaylistSong] = useState([]);

  const id = useParams().id;

  const fetchPlayList = async () => {
    try {
      const res = await apiHandlePlayList.getPlayList(id);
      setPlaylistSong(res.data.data);
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
        <TrackPlaylist dataItem={playListItem} key={index} refresh={fetchPlayList} />
      ))}
    </>
  );
};
export default Playlists;
