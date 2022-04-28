import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { gapi } from 'gapi-script';
import GoogleRegisterButton from './GoogleRegisterButton';

function RegisterForm() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/fitness.activity.read profile email openid"
      })
    };
    gapi.load('client:auth2', start)
    
  }, [])

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();



  //   dispatch({
  //     type: 'REGISTER',
  //     payload: {
  //       username: username,
  //       password: password,

  //     },
  //   });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
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
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="stepButton" type="submit" name="submit" value="Register" />
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
        <GoogleRegisterButton />
      </div>
    </form>
  );
}

export default RegisterForm;
