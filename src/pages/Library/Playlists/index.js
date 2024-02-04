import classNames from 'classnames/bind';

import styles from './Playlists.module.scss';
// import ListDisk from '../../../components/ListDisk';
import Gallery from 'components/Gallery';

const cx = classNames.bind(styles);

const Playlists = ({ playLists = [] }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>Hear your own playlists and the playlists you’ve followed:</h2>
      </div>
      <div className={cx('trending-wrapper')}>
        <div className={cx('container')}>
          {playLists.map((item, index) => (
            <Gallery key={index} data={item} playLists={[]} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Playlists;
