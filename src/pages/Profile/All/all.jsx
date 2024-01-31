import classNames from "classnames/bind";

import styles from '../Profile.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const All = () => {
 
  return (
    <div className={cx('info-music-list')}>
      <div className={cx('router-view')}></div>
      <p>Seems a little quiet over here</p>
      <p className={cx('p-title')}>Upload a track to share it with your followers.</p>
        <Link to="/upload" className={cx('btn-route-upload')}>
          Upload
        </Link>
    </div>
  );
};
export default All;