import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import styles from '../Profile.module.scss';

const cx = classNames.bind(styles);

const Albums = () => {

  return (
    <div className={cx('info-music-list')}>
      <div className={cx('router-view')}></div>
      <img src="" alt="" />
      <p>Seems a little quiet over here</p>
      <p className={cx('p-title')}>Upload a track to share it with your followers.</p>
        <Link to="/upload" className={cx('btn-route-upload')}>
          Upload
        </Link>
    </div>
  );
};
export default Albums;