import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListDisk from 'components/ListDisk';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import { useEffect, useState } from 'react';
import { getSongs } from 'api/songs';

const cx = classNames.bind(styles);

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSongs()
      .then((res) => {
        setData(res.data);
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
            {/* <ListDisk data={recommendData} title={'More of what you like'} /> */}
            <ListDisk data={data} />
            {/* <ListDisk data={randomPlaylist} title={'Recommend Playlists'} playLists={true} /> */}
            {/* <ListDisk data={data2} title={'Study'} /> */}
            {/* <ListDisk data={data3} title={`Today's Mixes`} /> */}
            {/* <ListDisk data={data4} title={'Trending Music on SoundCloud'} /> */}
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
