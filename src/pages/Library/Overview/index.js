import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from '../../Home/Home.module.scss';
import ListDisk from '../../../components/ListDisk';
import { getSongs } from 'api/songs';

const cx = classNames.bind(styles);

function Overview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataSongs = await getSongs();
      console.log(dataSongs.data);
      setData(dataSongs.data);
    };
    getData();
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <ListDisk title={'Hear the tracks you’ve liked:'} data={data} />
      </div>
    </div>
  );
}
export default Overview;
