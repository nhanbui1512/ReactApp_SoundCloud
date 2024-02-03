import styles from '../FeedLeft/FeedLeft.module.scss';
import classNames from 'classnames/bind';

//import dataFeed from './dataFeed';
import TrackSong from './TrackSong/TrackSong';
//import apiHandleFeed from 'api/apiHandleFeed';

const cx = classNames.bind(styles);
const TrackPlaylist = ({ trackList }) => {
  return (
    <>
      <ul className={cx('feed__modul-list')}>
        {trackList.songs?.map((list, index) => (
          <TrackSong dataSong={list} key={index} />
        ))}
      </ul>
    </>
  );
};
export default TrackPlaylist;
