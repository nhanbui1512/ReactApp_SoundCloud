import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListDisk from 'components/ListDisk';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { recommendSongs } from 'api/songs';

const cx = classNames.bind(styles);

const Home = () => {
  const [data, setData] = useState([]);
  const [recommendData, setRecommendData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/song/get-songs?page=1&per_page=25')
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
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
            <ListDisk data={data} />
            <ListDisk data={data} title={'Study'} />
            <ListDisk data={recommendData} title={'More of what you like'} />
            <ListDisk data={data} title={`Today's Mixes`} />
            <ListDisk data={data} title={'Trending Music on SoundCloud'} />
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
