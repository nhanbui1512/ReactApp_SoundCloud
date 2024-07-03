import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListDisk from 'components/ListDisk';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import { useEffect, useState } from 'react';
import { getSongs } from 'api/songs';

const cx = classNames.bind(styles);

const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    getSongs()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getSongs(2, 10)
      .then((res) => {
        setData2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getSongs(3, 10)
      .then((res) => {
        setData3(res.data);
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
            <ListDisk data={data2} title={'Trending Music on SoundCloud'} />
            <ListDisk data={data3} title={`Today's Mixes`} />
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
