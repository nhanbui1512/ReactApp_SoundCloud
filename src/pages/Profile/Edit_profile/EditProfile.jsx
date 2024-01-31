import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateUserDetails } from 'api/users';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditProfile.module.scss';

const cx = classNames.bind(styles);

function EditProfile({ setPopperEdit, userData = {} }) {
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const inputref = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = () => {
    const updatedUserData = {
      username: userName, 
      city: city,
      country: country, 
      bio: bio, 
      avatar: image
    };
    console.log(updatedUserData);
    try {
      const response = updateUserDetails(updatedUserData);
      if (response) {
        console.log('User details updated successfully:', response);
      } else {
        console.log('No changes to update or something went wrong.');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
    setPopperEdit(false);
    navigate('/profile');
  }

  const [userName, setUserName] = useState(userData.userName || '');
  const [bio, setBio] = useState(userData.bio || '');
  const [city, setCity] = useState(userData.city || '');
  const [country, setCountry] = useState(userData.country || '');

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
                <img src={userData.avatar} className={cx('img')} alt="" accept="image/*" />
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
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" />
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

              <div className={cx('adress', 'display')}>
                <div className={cx('city')}>
                  <div className={cx('txtField')}>
                    <label className={cx('txtFielCity', 'field')} htmlFor="">
                      <span>City</span>
                    </label>
                  </div>
                  <input onChange={(e) => setCity(e.target.value)} value={city} type="text" />
                </div>
                <div className={cx('country')}>
                  <div className={cx('txtField')}>
                    <label className={cx('txtFieldCountry', 'field')} htmlFor="">
                      <span>Country</span>
                    </label>
                  </div>
                  <input onChange={(e) => setCountry(e.target.value)} value={country} type="text" />
                </div>
              </div>
              <div className={cx('bio')}>
                <div className={cx('txtField')}>
                  <label className={cx('field')} htmlFor="">
                    <span>Bio</span>
                  </label>
                </div>
                <textarea
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  type="text"
                  placeholder="Tell the world a little bit about yourself. The shorter the better."
                />
              </div>
            </div>
          </div>
          <div className={cx('activeUpdate')}>
            <button
              onClick={() => {
                setPopperEdit(false);
              }}
              className={cx('butCancel')}
            >
              Cancel
            </button>
            <button className={cx('butSave')} onClick={handleSave}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
