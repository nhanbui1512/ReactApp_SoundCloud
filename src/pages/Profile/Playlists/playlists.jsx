import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import apiHandlePlayList from 'api/apiHandlePlayList';
import PlaylistList from 'components/PlaylistProfile';
import {  useParams } from 'react-router-dom';
import { StorageContext } from 'context/Storage';

const cx = classNames.bind(styles);
const Playlists = () => {
  const [playListSong, setPlaylistSong] = useState([]);
  const storage = useContext(StorageContext);

  const id = useParams().id || storage.userData.id;

  const fetchPlayList = async () => {
    try {
      const res = await apiHandlePlayList.getPlayList(id);
      setPlaylistSong(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPlayList();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {playListSong.playlists?.length > 0 ? (
        playListSong.playlists?.map((playListItem, index) => (
          <PlaylistList dataItem={playListItem} key={index} refresh={fetchPlayList} />
        ))
      ) : (
        <div className={cx('info-music-list')}>
          <div className={cx('router-view')}></div>
          <p>Seems a little quiet over here</p>
          <p className={cx('p-title')}>Create playlist right now.</p>
          {/* <Link to="/upload" className={cx('btn-route-upload')}>
            Upload
          </Link> */}
        </div>
      )}
    </>
  );
};
export default Playlists;
