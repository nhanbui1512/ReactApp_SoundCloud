import styles from './FeedLeft.module.scss';
import classNames from 'classnames/bind';

//import dataFeed from './dataFeed';
import FeedLeftItem from './FeedLeftItem/FeedLeftItem';
//import apiHandleFeed from 'api/apiHandleFeed';

const cx = classNames.bind(styles);
const FeedLeftULList = ({ data = [] }) => {
  return (
    <>
      <ul className={cx('feed__modul-list')}>
        <div className={cx('feed__modul-item-authorname-main')}>
          <img src={data.avatar} alt="" className={cx('feed__modul-authorname-avatar')} />
          <div className={cx('feed__modul-authorname-name')}>{data.userName}</div>
        </div>
        {data.map((list, index) => (
          <FeedLeftItem data={list} key={index} />
        ))}
      </ul>
    </>
  );
};
export default FeedLeftULList;
