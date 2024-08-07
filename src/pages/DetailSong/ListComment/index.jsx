import React, { memo, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ListComment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select } from '@mui/material';
import CommentItem from './CommentItem';
import EmptyComment from './EmptyComment';
import PropTypes from 'prop-types';
import { deepFindComment } from 'Utils/arrays';
import { deleteComment, replyComment } from 'api/comments';
import { toast } from 'react-toastify';
import { StorageContext } from 'context/Storage';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const sortOptions = [
  {
    name: 'Newest',
    value: 1,
  },
  {
    name: 'Oldest',
    value: 2,
  },
  {
    name: 'Track Time',
    value: 3,
  },
];

const ListComment = memo(({ commentData = {}, setCommentData }) => {
  const [sort, setSort] = React.useState(1);
  const storage = useContext(StorageContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleReply = (content, parentComment) => {
    if (!storage.currentUser) return navigate('/login');
    if (content.trim() === '') return toast.error('Content of comment must be filled');
    replyComment(content, parentComment.songId, parentComment.id)
      .then((res) => {
        setCommentData((prev) => {
          const newState = { ...prev };
          newState.totalDocs++;
          const comment = deepFindComment(newState.data, parentComment.id); // newState.data is comments array
          comment.Replies.push(res.data);
          return newState;
        });
        toast.success('Comment successfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Comment fail');
      });
  };

  const renderComments = () => {
    const renderItems = (comment, parent = undefined) => {
      return (
        <div key={comment.id}>
          <div className={comment.parentId === null ? 'pt-5 pr-2.5' : 'ml-12 pt-3'}>
            <CommentItem
              onDelete={handleDelete}
              onReply={handleReply}
              data={comment}
              parentData={parent}
            />
          </div>

          {comment.Replies.map((item) => renderItems(item, comment.user))}
        </div>
      );
    };

    return commentData.data?.map((comment) => renderItems(comment));
  };

  const handleDelete = (data) => {
    deleteComment(data.id)
      .then((res) => {
        setCommentData((prev) => {
          const newState = { ...prev };
          newState.data = newState.data.filter((item) => item.id !== data.id);
          return newState;
        });
        toast.success('Delete comment successfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Delete comment unsuccessfully');
      });
  };
  return (
    <div className={cx('wrapper')}>
      {commentData.data?.length !== 0 && (
        <div>
          <div className={cx('header')}>
            <div className={cx('title')}>
              <h3>
                <span>
                  <FontAwesomeIcon icon={faComment} />
                </span>
                <span>{commentData.totalDocs} comments</span>
              </h3>
            </div>
            <div>
              <FormControl
                sx={{
                  minWidth: 160,
                }}
              >
                <Select
                  className={cx('selection')}
                  value={sort}
                  onChange={handleChange}
                  renderValue={(selected) => {
                    const option = sortOptions.find((item) => item.value === selected);
                    return `Sorted by : ${option.name}`;
                  }} // Hiển thị giá trị đã chọn là selected
                  sx={{
                    boxShadow: 'none',
                    fontSize: 14,
                    color: '#f50',
                    '& .MuiSelect-icon': {
                      color: '#f50', // Thay đổi màu sắc của icon dropdown
                    },
                    '& .MuiSelect-select': {
                      padding: '6px 8px', // Tùy chỉnh padding của phần chọn,
                    },
                    '.MuiOutlinedInput-notchedOutline': { border: '1px solid #f50' },
                    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #f50',
                    },
                    '&.MuiOutlinedInput-root:hover .MuiSelect-icon': {
                      color: '#fff',
                    },
                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #f50',
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200, // Chiều cao tối đa của Popper
                        width: 100, // Chiều dài của Popper
                      },
                    },
                    disableScrollLock: true, // Đảm bảo thanh cuộn của trang không bị ẩn
                  }}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {sortOptions.map((item) => (
                    <MenuItem
                      key={item.value}
                      className={cx('menu-item', { active: item.value === sort })}
                      sx={{ fontSize: 14 }}
                      value={item.value}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className={cx('content')}>{renderComments()}</div>
          <div className={cx(['drop-bar'])}></div>
        </div>
      )}

      {commentData.data?.length === 0 && <EmptyComment />}
    </div>
  );
});

ListComment.propTypes = {
  commentData: PropTypes.object.isRequired,
  setCommentData: PropTypes.func,
};
export default ListComment;
