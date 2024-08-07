import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import styles from './Share.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { twitter, facebook, tumblr, pinterest, email } from './icon';
const cx = classNames.bind(styles);

function Share({ setPopperShare = {} }) {
  const [shareLink, setShareLink] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setShareLink(window.location.href);
  }, []);

  const handleCopyLink = () => {
    inputRef.current.select();
    document.execCommand('copy');
    // if (inputRef.current) {
    //   // Lấy đường link hiện tại từ trình duyệt
    //   const currentUrl = window.location.href;

    //   // Gán đường link vào input để có thể copy
    //   inputRef.current.value = currentUrl;

    //   // Copy đường link vào clipboard
    //   inputRef.current.select();
    //   document.execCommand('copy');
    // }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('main-content')}>
        <div className={cx('content')}>
          <button
            onClick={() => {
              setPopperShare(false);
            }}
            className={cx('close-btn')}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <h2>Share link</h2>
          <div className={cx('ShareLink')}>
            <div className={cx('flex mb-2')}>
              <img src={twitter} alt="Edit Icon" className={cx('social-icon')} />
              <img src={facebook} alt="Edit Icon" className={cx('social-icon')} />
              <img src={tumblr} alt="Edit Icon" className={cx('social-icon')} />
              <img src={pinterest} alt="Edit Icon" className={cx('social-icon')} />
              <img src={email} alt="Edit Icon" className={cx('social-icon')} />
            </div>
            <div className={cx('copylink')}>
              <input
                className="text-[14px]"
                type="text"
                ref={inputRef}
                value={shareLink}
                readOnly
              />
              <button className="text-[14px]" onClick={handleCopyLink}>
                Copy link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;
