import classNames from 'classnames/bind';

import styles from '../../Home/Home.module.scss';
import ListDisk from '../../../components/ListDisk';

const cx = classNames.bind(styles);

const Likes = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <ListDisk title={'Hear the tracks you’ve liked:'} data={data} />
      </div>
    </div>
  );
};
export default Likes;
