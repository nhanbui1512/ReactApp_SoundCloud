import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { StorageContext } from 'context/Storage';
import { CheckLogin } from 'api/Login';
import styles from './Login.module.scss';
import { setToken } from 'services/local/cookie';

const cx = classNames.bind(styles);
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fail, setFail] = useState(false);

  const storage = useContext(StorageContext);

  const navigate = useNavigate();
  const handleLogin = () => {
    CheckLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        setToken({ token: res.token });
        storage.setCurrentUser(true);
        storage.setUserData(res.user);
        navigate('/');
      })
      .catch((err) => {
        setFail(true);
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('login-form')}>
        <h1 className={cx('login-title')}>Login </h1>
        <br></br>
        <input
          value={email}
          placeholder="Your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          value={password}
          type="password"
          placeholder="Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>

        {fail && (
          <p
            style={{
              marginTop: 10,
              fontSize: 14,
            }}
          >
            *Email or password is incorrect
          </p>
        )}
        <button onClick={handleLogin} className={cx('login-button')}>
          Login
        </button>
        <div className={cx('div-p0')}>
          <p className={cx('p0')}>
            Need to Signup? <Link to="/signup">Create Account</Link>
          </p>
        </div>

        
        <p className={cx('p1')}>
          When registering, you agree that we may use your provided data for the registration and to
          send you notifications on our products and services. You can unsubscribe from
          notifications at any time in your settings. For additional info please refer to our{' '}
          <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
