import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
const cx = classNames.bind(styles);

const CommentItem = memo(() => {
  return <div className={cx('wrapper')}>CommentItem</div>;
});

export default CommentItem;
