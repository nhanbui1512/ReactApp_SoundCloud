import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from '../../Home/Home.module.scss';
import SliderLibrary from '../../../components/SliderLibrary';

const cx = classNames.bind(styles);

const Following = () => {
  const [data] = useState([]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <SliderLibrary title={'Hear the tracks you’ve liked:'} data={data} />
      </div>
    </div>
  );
};
export default Following;
