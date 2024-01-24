import React, { useState } from 'react'
import { auth } from '../login/authentication/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class="container">
      
      <form onSubmit={handleSubmit} className='signup-form'>
      <h1>Signup </h1>
      <br></br>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit" className='signup-button'>Signup</button>
        <br></br>
        <p>Need to Login? <Link to="/login">Login</Link></p>
      </form>
      
    </div>
  )
}

export default Signup


