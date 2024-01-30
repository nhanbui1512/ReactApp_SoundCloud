import Slider from 'components/Slider';
import classNames from 'classnames/bind';
import styles from './ListDisk.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ListDisk({ title }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/song/get-songs?page=1&per_page=20')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2>{title || 'Recently Played'}</h2>
      </div>
      <div>
        <Slider data={data} />
      </div>
    </div>
  );
}
export default ListDisk;
