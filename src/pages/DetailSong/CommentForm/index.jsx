import React, { memo, useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CommentForm.module.scss';
import { Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { StorageContext } from 'context/Storage';

const cx = classNames.bind(styles);

const CommentForm = memo(({ onClose, onSendComment }) => {
  const [comment, setComment] = useState('');

  const handleClose = (e) => {
    if (onClose) return onClose(e);
  };

  const handleSend = (e) => {
    if (onSendComment) onSendComment(comment);
    setComment('');
  };

  const storage = useContext(StorageContext);

  return (
    <div className="flex items-center">
      {storage.currentUser && (
        <div className="flex">
          <Avatar alt="" src={storage.userData.avatar} />
        </div>
      )}
      <div className="flex flex-1 ml-2 h-10 items-center">
        <div className="flex-1 relative">
          <input
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment"
            className={cx(['input', 'text-[14px]'])}
          ></input>
          {onClose && <button onClick={handleClose} className={cx('close-btn')}></button>}
        </div>
        <button onClick={handleSend} className={cx(['send-btn', 'center', 'ml-4'])}>
          <FontAwesomeIcon fontSize={16} icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
});

CommentForm.propTypes = {
  onClose: PropTypes.func,
  onSendComment: PropTypes.func,
};
export default CommentForm;
