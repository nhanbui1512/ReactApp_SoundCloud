import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import styles from '../Profile.module.scss';

const cx = classNames.bind(styles);

const Albums = () => {

  return (
    <div className={cx('info-music-list')}>
        <Link to="/upload" className={cx('btn-route-upload')}>
          Upload
        </Link>

    </div>
  );
};
export default Albums;