import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
const cx = classNames.bind(styles);
const PageNotFound = () => {
  return (
    <div>
        <div className={cx('number')}>
            <div className={cx('text')}>
                404
            </div>
        </div>
        <div className={cx('user-notfound')}>
            <span>Ooops...</span>
            <br />User is not found
        </div>
    </div>
    
  );
};
export default PageNotFound;