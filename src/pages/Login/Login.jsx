import React from 'react';
import InputField from './../../components/Input/InputField';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/Button';
import './Login.css';
const Login = () => {
  return (
    <div className="container-login">
      <div className="login-form">
        <div className="login-form-image">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            style={{ borderRadius: '50%' }}
            alt="avatar"
          />
        </div>
        <div className="login-form-input">
          <span className="login-form-title">Faça Login.</span>
          <InputField
            text="Email"
            width="100%"
            height="50px"
            placeholder="Email"
          />
          <InputField
            text="Password"
            width="100%"
            height="50px"
            placeholder="Password"
          />
          <Link to="/home" className="login-form-button">
            <Button texto="Login"></Button>
          </Link>
          <a href={'localhost:3000'}>Forgot password? </a>
          <a href={'localhost:3000'}>Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
