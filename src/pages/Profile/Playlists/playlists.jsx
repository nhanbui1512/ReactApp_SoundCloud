// import classNames from 'classnames/bind';

// import styles from '../Profile.module.scss';
import React from 'react';
import {useEffect, useState} from 'react';
import ToastPlaylist from 'components/ToastPlaylist';
import apiHandlePlayList from 'api/apiHandlePlayList';

//const cx = classNames.bind(styles);
const Playlists = () => {
  const [playListSong, setPlaylistSong] = useState([]);
  //console.log('in ra playlistsong', playListSong);
  useEffect(() => {
    const fetchPlayList = async () => {
      try {
        const res = await apiHandlePlayList.getPlayList();
        //const playListItem = res.data.data
        setPlaylistSong(res.data.data);
        console.log(res.data.data);
      } catch(error) {
        console.error('error fetching data from playlist',error);
      }
    }
    fetchPlayList();
  }, [])
  return (
    <>
      {playListSong.map((playListItem,index) => (
        <ToastPlaylist  dataItem={playListItem} key={index}/>
      ))}
      {/* <ToastPlaylist  playListSong={playListSong}/> */}
    </>
  );
};
export default Playlists;
