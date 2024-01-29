import classNames from "classnames/bind";

import styles from '../Profile.module.scss';
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

const Playlists = () => {
 
  return (
    <div className={cx('info-music-list')}>
       <Link to="/upload" className={cx('btn-route-upload')}>
          Upload
        </Link>
    </div>
  );
};
export default Playlists;