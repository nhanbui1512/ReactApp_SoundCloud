import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListDisk from 'components/ListDisk';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import { useEffect, useState } from 'react';
import { getSongs, recommendSongs } from 'api/songs';
import { getRandom } from 'api/playlist';

const cx = classNames.bind(styles);

const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [recommendData, setRecommendData] = useState([]);
  const [randomPlaylist, setRandomPlaylist] = useState([]);

  useEffect(() => {
    getSongs()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getSongs(2, 15)
      .then((res) => {
        setData2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getSongs(3, 15)
      .then((res) => {
        setData3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    recommendSongs()
      .then((res) => {
        setRecommendData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getSongs(4, 15)
      .then((res) => {
        setData4(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    recommendSongs()
      .then((res) => {
        setRecommendData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getRandom(10)
      .then((res) => {
        setRandomPlaylist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div className={cx('content')}>
          <div className={cx('trending-wrapper')}>
            <ListDisk data={recommendData} title={'More of what you like'} />
            <ListDisk data={data} />
            <ListDisk data={randomPlaylist} title={'Recommend Playlists'} playLists={true} />
            <ListDisk data={data2} title={'Study'} />
            <ListDisk data={data3} title={`Today's Mixes`} />
            <ListDisk data={data4} title={'Trending Music on SoundCloud'} />
          </div>
        </div>

        <div className={cx('side-bar')}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default Home;
