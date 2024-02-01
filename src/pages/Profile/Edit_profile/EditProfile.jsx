import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateUserDetails, changePassword } from 'api/users';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditProfile.module.scss';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function EditProfile({ setPopperEdit, userData = {} }) {
  const [image, setImage] = useState('');
  const [newPass, setNewPass] = useState('');
  const [oldPass, setOldPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [onEdit, setOnEdit] = useState(true);
  const [onChangePass, setOnChangePass] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const inputref = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(e.target.files[0]);
    }
    
  };

  const handleSaveChanges = () => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,30}$/;
    if (!passRegex.test(newPass)) {
      alert('Please enter password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character,length of 10-30');
      return;
    }
    if (newPass === confirmPass && passRegex.test(newPass))
    {
      const passData = {
        currentPassword: oldPass, 
        newPassword: newPass,
        confirmPassword: confirmPass
      };
      try {
        const result = changePassword(passData);
        setPopperEdit(false);
        console.log(result);
      } catch (error) {
        console.error('Error while changing password:', error);
      }
    }else {
      toast.error('Confirm incorrect password');
    }
  }

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
    setShowLoader(true);
    setTimeout(() => {
      setPopperEdit(false);
      navigate('/profile');  
    }, 1500)
  }

  const handleEdit = () =>{
    setOnEdit(true);
    setOnChangePass(false);
    setActiveTab('edit');
  }
  const handleChangePass = () =>{
    setOnChangePass(true);
    setOnEdit(false);
    setActiveTab('password');
  }

  const [userName, setUserName] = useState(userData.userName || '');
  const [bio, setBio] = useState(userData.bio || '');
  const [city, setCity] = useState(userData.city || '');
  const [country, setCountry] = useState(userData.country || '');

  return (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <div className={cx('progress_loader')}>
          {showLoader && <div className={cx('progress')}></div>}
        </div>
        <div className={cx('content')}>
          <button
            onClick={() => {
              setPopperEdit(false);
            }}
            className={cx('close-btn')}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <ul className={cx('change-state')}>
            <li className={cx('navbar', { active: activeTab === 'edit' })} onClick={handleEdit}>Edit Profile</li>
            <li className={cx('navbar', { active: activeTab === 'password' })} onClick={handleChangePass}>Change Password</li>
          </ul>
          {onEdit && (
            <div className={cx('tab_edit')}>
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
                    <input ref={inputref} type="file" onChange={handleFileChange} accept="image/*"/>
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
                      <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder='City'/>
                    </div>
                    <div className={cx('country')}>
                      <div className={cx('txtField')}>
                        <label className={cx('txtFieldCountry', 'field')} htmlFor="">
                          <span>Country</span>
                        </label>
                      </div>
                      <input onChange={(e) => setCountry(e.target.value)} value={country} type="text" placeholder='Country'/>
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
                <button className={cx('butSave')} onClick={handleSave}>Save</button>
              </div>
            </div>
          )}
          {onChangePass && (
            <div>
              <div className={cx('changePass')}>
                  <div className={cx('name')}>
                    <div className={cx('txtField')}>
                      <label className={cx('field')} htmlFor="">
                        <span>Old password</span>
                      </label>
                    </div>
                    <input onChange={(e) => setOldPass(e.target.value)} value={oldPass} type="password" placeholder='Enter old password'/>
                  </div>
                  <div className={cx('name')}>
                    <div className={cx('txtField')}>
                      <label className={cx('field')} htmlFor="">
                        <span>New password</span>
                      </label>
                    </div>
                    <input onChange={(e) => setNewPass(e.target.value)} value={newPass} type="password" placeholder='Enter new password'/>
                  </div>
                  <div className={cx('name')}>
                    <div className={cx('txtField')}>
                      <label className={cx('field')} htmlFor="">
                        <span>Confirm password</span>
                      </label>
                    </div>
                    <input onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} type="password" placeholder='Confirm password'/>
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
                <button className={cx('butSave')} onClick={handleSaveChanges}>Save changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
