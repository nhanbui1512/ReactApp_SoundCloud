import classNames from 'classnames/bind';

import styles from '../../Home/Home.module.scss';
import Gallery from 'components/Gallery';

const cx = classNames.bind(styles);

const Playlists = ({ data = [], playLists = [] }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('trending-wrapper')}>
        <div
          style={{
            display: 'grid',
            gap: `20 16px`,
            gridTemplateColumns: `repeat(auto-fill, minmax(184px, 1fr))`,
          }}
          className={cx('container')}
        >
          {playLists.map((item, index) => (
            <Gallery key={index} data={item} playLists={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Playlists;
