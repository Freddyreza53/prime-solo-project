import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


// Google Authentication imports
import GoogleLoginButton from './GoogleLoginButton';
import GoogleLogoutButton from './GoogleLogoutButton';
import { gapi } from 'gapi-script';

function LoginForm() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: "610733278251-6irih7hnit1v2d1vvkgiquq5lip3jfhf.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/fitness.activity.read profile email openid"
      })
    };
    gapi.load('client:auth2', start)
  }, [])

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();


  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login} >
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="stepButton" type="submit" name="submit" value="Log In" />
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
        <GoogleLoginButton />
        <GoogleLogoutButton />
      </div>
    </form>
  );
}

export default LoginForm;
