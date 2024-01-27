// CustomToast.jsx
import React from 'react';
import classNames from 'classnames/bind';
import styles from './CustomToast.modul.scss';
//import artirstFollow from 'components/Sidebar_Right/data';

const cx = classNames.bind(styles);
const CustomToast = ({ art, isLiked }) => (
  <div className={cx("custom-toast")}>
    <img src={art.image} alt="" className={cx("toast-image")} />
    <div className={cx('toast-content')}>
      <span className={cx('toast-title')}>{art.name}</span>
      <span className={cx('toast-title')}>{!isLiked ? "Đã thêm vào danh sách yêu thích" : "Xóa khỏi danh sách"}</span>
    </div>
  </div>
);

export default CustomToast;
