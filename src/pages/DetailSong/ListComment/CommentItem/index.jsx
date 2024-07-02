import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const CommentItem = memo(() => {
  return (
    <div className={cx('wrapper')}>
      <div className="mr-2">
        <Link>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </Link>
      </div>
      <div className="flex flex-col flex-1">
        <div className={cx('flex items-center')}>
          <span className={'text-sm font-semibold'}>
            <Link>Dios Mac</Link>
          </span>
          <span className="text-[12px] mx-1">.</span>
          <span className="text-[12px] text-neutral-600">1 month ago</span>
        </div>
        <div>
          <p className="text-[14px] mb-1">i gues they really like it🥺</p>
        </div>
        <span className="mr-2 text-[14px] cursor-pointer font-medium">Reply</span>
      </div>
    </div>
  );
});

export default CommentItem;
