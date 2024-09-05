import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
const cx = classNames.bind(styles);

export const toastConfig = {
  position: 'top-right', // Set the position
  autoClose: false, // Set the auto close duration
  hideProgressBar: true, // Hide the progress bar
  closeOnClick: true, // Enable close on click
  pauseOnHover: false, // Pause on hover
  closeButton: false,
  className: cx('custom-container'),
  bodyClassName: cx('custom-body'),
};
