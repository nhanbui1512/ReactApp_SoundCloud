import classNames from 'classnames/bind';

import styles from './Likes.moudle.scss';
import Gallery from 'components/Gallery';

const cx = classNames.bind(styles);

const Likes = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2 className="title">Hear the tracks you’ve liked:</h2>
      </div>
      <div className={cx('trending-wrapper')}>
        <div className={cx('container')}>
          {data.map((item) => (
            <Gallery key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Likes;
