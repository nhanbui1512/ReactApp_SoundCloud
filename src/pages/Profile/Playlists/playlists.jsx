import classNames from "classnames/bind";

import styles from '../Profile.module.scss';
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

const Playlists = () => {
 
  return (
    <div className={cx('info-music-list')}>
      <div className={cx('router-view')}></div>
      <img src="" alt="" />
      <p>Seems a little quiet over here</p>
      <p className={cx('p-title')}>Lear about playlists.</p>
    </div>
  );
};
export default Playlists;