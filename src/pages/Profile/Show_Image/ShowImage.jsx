import classNames from 'classnames/bind';
import {  useState } from 'react';
import styles from './ShowImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ShowImage({ setPopperEdit, userData = {} }) {
  const [image] = useState('');
  return (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <div className={cx('content')}>
          <button
            onClick={() => {
              setPopperEdit(false);
            }}
            className={cx('close-btn')}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h2>{userData.userName || ''}</h2>
          <div className={cx('editImage')}>
            <div className={cx('uploadImg')}>
              {image ? (
                <img
                  className={cx('img')}
                  src={URL.createObjectURL(image)}
                  alt=""
                  accept="image/*"
                />
              ) : (
                <img src={userData.avatar} className={cx('img')} alt="" accept="image/*" />
              )}
            </div> 
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default ShowImage;
