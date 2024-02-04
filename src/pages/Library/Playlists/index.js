import classNames from 'classnames/bind';

import styles from '../../Home/Home.module.scss';
import ListDisk from '../../../components/ListDisk';

const cx = classNames.bind(styles);

const Playlists = ({ data = [], playLists = [] }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <ListDisk
          title={'Hear your own playlists and the playlists you’ve followed:'}
          data={data}
          playLists={playLists}
        />
      </div>
    </div>
  );
};
export default Playlists;
