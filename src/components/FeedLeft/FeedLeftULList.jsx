import styles from './FeedLeft.module.scss';
import classNames from 'classnames/bind';
import FeedLeftItem from './FeedLeftItem/FeedLeftItem';

const cx = classNames.bind(styles);
const FeedLeftULList = ({ data = [] }) => {
  return (
    <>
      <ul className={cx('feed__modul-list')}>
        {data.map((list, index) => (
          <FeedLeftItem data={list} key={index} />
        ))}
      </ul>
    </>
  );
};
export default FeedLeftULList;
