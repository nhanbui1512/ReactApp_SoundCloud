import React, { useState, useContext } from 'react';
import { auth } from '../../services/firebase/app';
import classNames from 'classnames/bind';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { StorageContext } from 'context/Storage';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(StorageContext);

  const onLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email or password');
      return;
    }

    setSubmitted(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(true);
        navigate('/');
      })
      .catch((error) => {
        setSubmitted(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert('Email or password is not error');
      });
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        const user = result.user;
        setCurrentUser(true);
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={cx('wrapper')}>
      <form className={cx('login-form')}>
        <h1>Login </h1>
        <br></br>
        <input
          type="email"
          placeholder="Your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button onClick={onLogin} disabled={submitted} className={cx('login-button')}>
          Login
        </button>
        <div className={cx('div-p0')}>
          <p className={cx('p0')}>
            Need to Signup? <Link to="/signup">Create Account</Link>
          </p>
        </div>

        <div className={cx('line-container')}>
          <div className={cx('line-left')}></div>
          <div className={cx('or')}>or</div>
          <div className={cx('line-right')}></div>
        </div>
        <GoogleButton className={cx('google-button')} onClick={handleSignInWithGoogle} />
        <p className={cx('p1')}>
          When registering, you agree that we may use your provided data for the registration and to
          send you notifications on our products and services. You can unsubscribe from
          notifications at any time in your settings. For additional info please refer to our{' '}
          <b>Privacy Policy.</b>
        </p>
      </form>
    </div>
  );
};

export default Login;
