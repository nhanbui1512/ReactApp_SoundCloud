import classNames from 'classnames/bind';

import styles from '../Profile.module.scss';
import ToastPlaylist from 'components/ToastPlaylist';

const cx = classNames.bind(styles);
const Playlists = () => {
  return (
    <div>
      <ToastPlaylist />
    </div>
  );
};
export default Playlists;
