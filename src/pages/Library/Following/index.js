import classNames from 'classnames/bind';

import styles from '../../Home/Home.module.scss';
import SliderLibrary from '../../../components/SliderLibrary';

const cx = classNames.bind(styles);

const Following = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <SliderLibrary title={'Hear the tracks you’ve liked:'} data={data} />
      </div>
    </div>
  );
};
export default Following;
