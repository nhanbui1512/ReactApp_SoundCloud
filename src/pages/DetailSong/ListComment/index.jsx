import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './ListComment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select } from '@mui/material';
import CommentItem from './CommentItem';

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

const ListComment = memo(() => {
  const [sort, setSort] = React.useState(1);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>
          <h3>
            <span>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span>159 comments</span>
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
      <div className={cx('content')}>
        <CommentItem />
      </div>
    </div>
  );
});

export default ListComment;
