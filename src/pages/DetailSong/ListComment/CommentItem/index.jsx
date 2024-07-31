import React, { memo, useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentForm from 'pages/DetailSong/CommentForm';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { StorageContext } from 'context/Storage';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

const CommentItem = memo(({ data, parentData = {}, onReply, onDelete }) => {
  const [reply, setReply] = useState(false);
  const [isOpenPopper, setIsOpenPopper] = useState(false);

  const storage = useContext(StorageContext);

  const handleCloseCommentForm = () => {
    setReply(false);
  };

  const handleReply = (content) => {
    setReply(false);
    if (onReply) return onReply(content, data);
  };

  const handleDelete = () => {
    if (onDelete) return onDelete(data);
    setIsOpenPopper(false);
  };

  const closePopper = () => setIsOpenPopper(false);
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
            <p className="text-[14px] mb-1">
              {data.parentId && '@'}
              {data.parentId && (
                <Link
                  style={{
                    color: '#38d',
                  }}
                  className="mr-0.5"
                >
                  {parentData.userName}
                </Link>
              )}
              {data.content}
            </p>
          </div>
          <div className="flex items-center">
            <span
              onClick={() => {
                setReply(true);
              }}
              className="mr-2 text-[14px] cursor-pointer font-medium w-fit"
            >
              Reply
            </span>
            {/* can delete ?  */}
            {storage.userData?.id === data.userId && (
              <HeadlessTippy
                visible={isOpenPopper}
                interactive
                placement={'bottom-end'}
                onClickOutside={() => closePopper()}
                render={() => (
                  <div className={cx('delete-popper')}>
                    <div className="flex flex-col">
                      <span className="text-[12px]">
                        Do you really want to remove this comment?
                      </span>

                      <div className="flex justify-end gap-1">
                        <button onClick={() => closePopper()} className={cx('option-btn')}>
                          Cancel
                        </button>
                        <button onClick={handleDelete} className={cx('option-btn')}>
                          Yes
                        </button>
                      </div>
                    </div>
                    <div className={cx('dialog-arrow')}></div>
                  </div>
                )}
              >
                <button
                  onClick={() => {
                    setIsOpenPopper((prev) => !prev);
                  }}
                  className="w-8 h-8 flex center"
                >
                  <DeleteOutlineIcon fontSize="small" />
                </button>
              </HeadlessTippy>
            )}
          </div>
        </div>
      </div>

      {reply && (
        <div className="pt-3 pr-2.5 ml-12">
          <CommentForm onSendComment={handleReply} onClose={handleCloseCommentForm} />
        </div>
      )}
    </>
  );
});

CommentItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CommentItem;
