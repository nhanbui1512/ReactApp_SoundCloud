import React, { useState } from 'react'
import { auth, googleAuthProvider  } from './authentication/firebase';
import { signInWithEmailAndPassword , signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'
import "./Login.css"
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem('token', result.user.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class="container">
      
      <form onSubmit={handleSubmit} className='login-form'>
        
        <h1>Login </h1>
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
        <button type="submit" className='login-button'>Login</button>
        <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
        
        <p>Login with: </p>
        <GoogleButton class="google-button"
          onClick={handleSignInWithGoogle}
        />
      </form>
      
    </div>
  )
}

export default Login