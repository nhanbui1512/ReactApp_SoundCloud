import classNames from 'classnames/bind';

import styles from './Following.module.scss';
import Post from 'components/Post';

const cx = classNames.bind(styles);

const Following = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2 className="title">Hear the tracks you’ve liked:</h2>
      </div>
      <div className={cx('trending-wrapper')}>
        <div className={cx('container')}>
          {data.map((item, index) => (
            <Post key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Following;
