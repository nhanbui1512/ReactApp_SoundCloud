import { Zoom } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
const cx = classNames.bind(styles);

export const toastConfig = {
  position: 'top-right', // Set the position
  autoClose: false, // Set the auto close duration
  hideProgressBar: true, // Hide the progress bar
  closeOnClick: false, // Enable close on click
  pauseOnHover: false, // Pause on hover
  closeButton: false,
  className: cx('custom-container'),
  bodyClassName: cx('custom-body'),
  toastClassName: cx('custom-toast'),
  style: {
    top: '40px', // Bạn có thể đặt lại giá trị này theo nhu cầu
  },
  transition: Zoom,
};
