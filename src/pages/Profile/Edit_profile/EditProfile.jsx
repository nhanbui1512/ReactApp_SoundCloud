import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './EditProfile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function EditProfile({ setPopperEdit }) {
  const [image, setImage] = useState('');
  const inputref = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImage(e.target.files[0]);
    }
  };

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

          <h2>Edit your profile</h2>
          <div className={cx('editProfile')}>
            <div className={cx('uploadImg')}>
              {image ? (
                <img
                  className={cx('img')}
                  src={URL.createObjectURL(image)}
                  alt=""
                  accept="image/*"
                />
              ) : (
                <img className={cx('img')} alt="" accept="image/*" />
              )}
              <div className={cx('butUpload')}>
                <input ref={inputref} type="file" onChange={handleFileChange} />
                <button
                  onClick={(e) => {
                    inputref.current.click();
                  }}
                >
                  Upload image
                </button>
              </div>
            </div>
            <div className={cx('profile')}>
              <div className={cx('name')}>
                <div className={cx('txtField')}>
                  <label className={cx('field')} htmlFor="">
                    <span>Display name</span>
                    <span className={cx('fielLabel')}> *</span>
                  </label>
                </div>
                <input type="text" />
              </div>
              <div className={cx('profile_url')}>
                <div className={cx('txtField')}>
                  <label className={cx('txtFieldUrl', 'field')} htmlFor="">
                    <span>Profile URL</span>
                    <span className={cx('fielLabel')}> *</span>
                  </label>
                </div>
                <span className={cx('sc_text_light')}>soundcloud.com/</span>
                <input type="text" />
              </div>
              <div className={cx('fullName', 'display')}>
                <div className={cx('first_name')}>
                  <div className={cx('txtField')}>
                    <label className={cx('txtFieldFirstName', 'field')} htmlFor="">
                      <span>First name</span>
                    </label>
                  </div>
                  <input type="text" />
                </div>
                <div className={cx('last_name')}>
                  <div className={cx('txtField')}>
                    <label className={cx('txtFieldLastName', 'field')} htmlFor="">
                      <span>Last name</span>
                    </label>
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className={cx('adress', 'display')}>
                <div className={cx('city')}>
                  <div className={cx('txtField')}>
                    <label className={cx('txtFielCity', 'field')} htmlFor="">
                      <span>City</span>
                    </label>
                  </div>
                  <input type="text" />
                </div>
                <div className={cx('country')}>
                  <div className={cx('txtField')}>
                    <label className={cx('txtFieldCountry', 'field')} htmlFor="">
                      <span>Country</span>
                    </label>
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className={cx('bio')}>
                <div className={cx('txtField')}>
                  <label className={cx('field')} htmlFor="">
                    <span>Bio</span>
                  </label>
                </div>
                <textarea
                  type="text"
                  placeholder="Tell the world a little bit about yourself. The shorter the better."
                />
              </div>
            </div>
          </div>
          <div className={cx('activeUpdate')}>
            <button className={cx('butCancel')}>Cancel</button>
            <button className={cx('butSave')}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
