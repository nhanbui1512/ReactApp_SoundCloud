import Slider from 'components/Slider';
import classNames from 'classnames/bind';
import styles from './ListDisk.module.scss';
import PropTypes from 'prop-types';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ListDisk({ title = 'Recently Played', data = [], playLists = false }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2>{title}</h2>
      </div>
      <div>
        <Slider data={data} playLists={playLists} />
      </div>
    </div>
  );
}

ListDisk.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  playLists: PropTypes.bool,
};
export default memo(ListDisk);
