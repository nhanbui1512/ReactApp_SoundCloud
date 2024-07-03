import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentForm from 'pages/DetailSong/CommentForm';

const cx = classNames.bind(styles);

const CommentItem = memo(({ data }) => {
  const [reply, setReply] = useState(false);

  const handleCloseCommentForm = () => {
    setReply(false);
  };
  return (
    <>
      <div className={cx('wrapper')}>
        <div className="mr-2">
          <Link>
            <Avatar alt={data?.user?.userName} src={data.user?.avatar} />
          </Link>
        </div>
        <div className="flex flex-col flex-1">
          <div className={cx('flex items-center')}>
            <span className={'text-sm font-semibold'}>
              <Link>{data?.user?.userName}</Link>
            </span>
            <span className="text-[12px] mx-1">.</span>
            <span className="text-[12px] text-neutral-600">{data.fromNow}</span>
          </div>
          <div>
            <p className="text-[14px] mb-1">{data.content}</p>
          </div>
          <span
            onClick={() => {
              setReply(true);
            }}
            className="mr-2 text-[14px] cursor-pointer font-medium"
          >
            Reply
          </span>
        </div>
      </div>

      {reply && (
        <div className="pt-3 pr-2.5 ml-12">
          <CommentForm onClose={handleCloseCommentForm} />
        </div>
      )}
    </>
  );
});

CommentItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CommentItem;
