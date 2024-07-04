import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './ListComment.module.scss';
const cx = classNames.bind(styles);

const EmptyComment = memo(() => {
  return (
    <div className="pt-8 pb-8 flex flex-col items-center">
      <div className={cx(['comment-icon'])}></div>
      <div className="mt-3.5">
        <h3 className="text-[18px]">Seems a little quiet over here</h3>
      </div>
      <div className="mt-2">
        <h2 className="text-[16px] text-gray-400">Be the first to comment on this track</h2>
      </div>
    </div>
  );
});

export default EmptyComment;
