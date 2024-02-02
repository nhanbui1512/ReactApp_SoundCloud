import { useEffect, useState } from 'react';
import apiHandlePlayList from 'api/apiHandlePlayList';
import ToastTrackPlaylist from 'components/ToastTrack';

//const cx = classNames.bind(styles);

const Tracks = () => {
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    const fetchTrackList = async () => {
      try {
        const res = await apiHandlePlayList.getTrack();
        setTrackList(res.data.data);
      } catch (error) {
        console.error('error get data', error);
      }
    };
    fetchTrackList();
  }, []);
  return (
    // <div className={cx('info-music-list')}>
    //   <div className={cx('router-view')}></div>
    //   <img src="" alt="" />
    //   <p>Seems a little quiet over here</p>
    //   <p className={cx('p-title')}>Upload a track to share it with your followers.</p>
    //     <Link to="/upload" className={cx('btn-route-upload')}>
    //       Upload
    //     </Link>

    // </div>
    <>
      <ToastTrackPlaylist trackList={trackList} />
    </>
  );
};
export default Tracks;