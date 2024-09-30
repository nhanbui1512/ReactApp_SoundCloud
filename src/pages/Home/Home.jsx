import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListDisk from 'components/ListDisk';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import { useEffect, useState } from 'react';
import { getSongs } from 'api/songs';
import { getPlaylists } from 'api/playlist';

const cx = classNames.bind(styles);

const Home = () => {
  const [dataState, setDataState] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
    playlist1: [],
  });

  const [fetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getSongs(1, 15);
        const data2 = await getSongs(2, 15);
        const data3 = await getSongs(3, 15);
        const data4 = await getSongs(4, 15);
        const data5 = await getSongs(5, 15);
        const playlist1 = await getPlaylists(1, 10);

        setDataState({
          data1: data1.data,
          data2: data2.data,
          data3: data3.data,
          data4: data4.data,
          data5: data5.data,
          playlist1: playlist1.data,
        });
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
            <ListDisk loading={fetching} data={dataState.data1} />
            <ListDisk
              loading={fetching}
              data={dataState.data2}
              title={'Trending Music on SoundCloud'}
            />
            <ListDisk loading={fetching} data={dataState.data3} title={`More of what you like`} />
            <ListDisk
              loading={fetching}
              data={dataState.data4}
              title={`Trending Music on SoundCloud`}
            />
            <ListDisk loading={fetching} data={dataState.data5} title={`Feel Good`} />
            <ListDisk
              loading={fetching}
              data={dataState.playlist1}
              playLists
              title="Mixed by Nhân Bùi"
            />
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
