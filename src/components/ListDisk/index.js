import Slider from 'components/Slider';
import classNames from 'classnames/bind';
import styles from './ListDisk.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ListDisk({ title, data }) {
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
