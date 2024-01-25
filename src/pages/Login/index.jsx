import React, { useState,useContext } from 'react';
import { auth } from '../../services/firebase/app';
import { signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { Link ,useNavigate} from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { StorageContext } from 'context/Storage'; 

import './Login.scss';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(StorageContext);

  const onLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email or password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {   
        const user = userCredential.user;
        setCurrentUser(true);
        navigate("/")
        console.log(user);
    })
    .catch((error) => {
      
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert("Email or password is not error");
    });
   
  }

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
        // onLoginSuccess();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
      });
  };

  return (
    <div className="container">
      <form  className="login-form">
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
        <button  onClick={onLogin} className="login-button">
          Login
        </button>
        <div className="div-p0">
          <p className="p0">
            Need to Signup? <Link to="/signup">Create Account</Link>
          </p>
        </div>

        <div className="line-container">
          <div className="line-left"></div>
          <div className="or">or</div>
          <div className="line-right"></div>
        </div>
        <GoogleButton className="google-button"
        onClick={handleSignInWithGoogle}
        />
        <p className="p1">
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
