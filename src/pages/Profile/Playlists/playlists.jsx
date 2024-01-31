import classNames from "classnames/bind";

import styles from '../Profile.module.scss';


const cx = classNames.bind(styles);

const Playlists = () => {
 
  return (
    <div className={cx('info-music-list')}>
      <div className={cx('router-view')}></div>
      <img src="" alt="" />
      <p>Seems a little quiet over here</p>
      <p className={cx('p-title')}>Learn about playlists.</p>
    </div>
  );
};
export default Playlists;