import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Notification = memo(() => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx(['header', 'flex px-4 py-2'])}>
        <h2>Notifications</h2>
        <Link>Settings</Link>
      </div>
      <div className="text-center">
        <span className="text-[12px]">Contents</span>
      </div>
      <div className="text-center">
        <span className="text-[12px]">View all notifications</span>
      </div>
    </div>
  );
});

export default Notification;
