import styles from '../FeedLeft/FeedLeft.module.scss';
import classNames from 'classnames/bind';

//import dataFeed from './dataFeed';
import TrackSong from './TrackSong/TrackSong';
import { Link } from 'react-router-dom';
//import apiHandleFeed from 'api/apiHandleFeed';

const cx = classNames.bind(styles);
const TrackPlaylist = ({ trackList }) => {
  return (
    <>
      <ul className={cx('feed__modul-list')}>
        {trackList.songs?.length > 0 ? (
          trackList.songs?.map((list, index) => <TrackSong dataSong={list} key={index} />)
        ) : (
          <div style={{textAlign: 'center'}} className={cx('info-music-list')}>
            <div className={cx('router-view')}></div>
            <p style={{ textAlign: 'center', marginTop: '72px' }}>Bạn chưa có bài hát nào</p>
            <p style={{ textAlign: 'center', color: 'blue' }} className={cx('p-title')}>
              Hãy tạo bài hát ngay nào.
            </p>
            <Link to="/upload" style={{backgroundColor: 'orange', textAlign: 'center'}} className={cx('btn-route-upload')}>
              Upload
            </Link>
          </div>
        )}
      </ul>
    </>
  );
};
export default TrackPlaylist;
