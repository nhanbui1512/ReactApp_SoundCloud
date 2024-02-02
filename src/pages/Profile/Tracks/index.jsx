import { useEffect, useState } from 'react';
import apiHandlePlayList from 'api/apiHandlePlayList';
import ToastTrackPlaylist from 'components/ToastTrack';
import { useParams } from 'react-router-dom';

//const cx = classNames.bind(styles);

const Tracks = () => {
  const [trackList, setTrackList] = useState([]);
  const userId = useParams().id;
  useEffect(() => {
    const fetchTrackList = async () => {
      try {
        const res = await apiHandlePlayList.getTrack(userId);
        setTrackList(res.data.data);
      } catch (error) {
        console.error('error get data', error);
      }
    };
    fetchTrackList();
  }, [userId]);
  return (
    <>
      <ToastTrackPlaylist trackList={trackList} />
    </>
  );
};
export default Tracks;
