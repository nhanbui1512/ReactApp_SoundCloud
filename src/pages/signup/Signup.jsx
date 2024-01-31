import React, { useState, useContext } from 'react';
import { auth } from '../../services/firebase/app';
import { StorageContext } from 'context/Storage';
import classNames from 'classnames/bind';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.scss';
const cx = classNames.bind(styles);

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(StorageContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email or password');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setSubmitted(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setCurrentUser(true);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('The email address is already in use. Please use a different email.');
        setSubmitted(false);
      });
  };

  return (
    <div className={cx('wrapper')}>
      <form className={cx('signup-form')}>
        <h1>Signup </h1>
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
        <button
          type="submit"
          onClick={onSubmit}
          className={cx('signup-button')}
          disabled={submitted}
        >
          Signup
        </button>
        <br></br>
        <div className={cx('div-p0')}>
          <p>
            Need to Login? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
