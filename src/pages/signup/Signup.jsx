import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.scss';
import { registerUser } from 'api/users';
const cx = classNames.bind(styles);

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,30}$/;
    if (!passRegex.test(password)) {
      alert(
        'Please enter password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character,length of 10-30',
      );
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }
    try {
      setSubmitted(true);
      await registerUser({
        username,
        email,
        password,
      });
      // Handle successful registration
      alert('Signup successful');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('The email address is already in use. Please use a different email.');
      setSubmitted(false);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <form className={cx('signup-form')}>
        <h1>Signup </h1>
        <br></br>
        <input
          type="text"
          placeholder="User Name"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
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

        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
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
