import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './LikedNotify.module.scss';
import Image from 'components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Notification = ({
  thumbNail,
  header,
  description = 'was saved to',
  savedPosition = 'your library',
  ...props
}) => {
  const handleClose = () => {
    return props.closeToast();
  };

  return (
    <div className={cx('wrapper')}>
      <div className="flex w-[44px] h-[44px]">
        <Image className="w-full h-full" src={thumbNail} />
      </div>
      <div className="pl-1 py-1 flex flex-col max-w-52">
        <span className="text-[12px] text-gray-700 font-bold truncate">{header}</span>
        <p className="text-[12px] text-gray-700">
          {description} <span className="font-bold text-sky-500">{savedPosition}</span>
        </p>
      </div>
      <button
        onClick={handleClose}
        className={cx([
          'close-btn',
          'w-[15px] h-[15px] rounded-full bg-stone-300 items-center justify-center',
        ])}
      >
        <FontAwesomeIcon fontSize={12} color="#fff" icon={faXmark} />
      </button>
    </div>
  );
};

Notification.propTypes = {
  thumbNail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
  savedPosition: PropTypes.string,
};
export default memo(Notification);
