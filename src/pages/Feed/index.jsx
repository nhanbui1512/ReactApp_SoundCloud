import '../Feed/Feed.module.scss';
import classNames from 'classnames/bind';
import styles from '../Home/Home.module.scss';
import Sidebar from 'components/Sidebar_Right/Sidebar';
import FeedLeft from 'components/FeedLeft/FeedLeft';
const cx = classNames.bind(styles);

const Feed = () => {
  return (
    <>
      <div className={cx('wrapper')}>
        <div style={{ position: 'relative' }}>
          <div className={cx('content')}>
            <div className={cx('trending-wrapper')}>
              <FeedLeft/>
            </div>
          </div>

          <div className={cx('side-bar')}>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
export default Feed;
