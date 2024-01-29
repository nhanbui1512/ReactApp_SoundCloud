import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from '../../Home/Home.module.scss';
import SliderLibrary from '../../../components/SliderLibrary';
import { getFollowing } from 'api/follow';

const cx = classNames.bind(styles);

const Following = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      // const dataUsers = await getFollowing();
      // console.log(dataUsers.data);
      // setData(dataUsers.data);
    };
    getData();
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <SliderLibrary title={'Hear the tracks you’ve liked:'} data={data} />
      </div>
    </div>
  );
};
export default Following;
