import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function GoogleRegisterButton() {

    // process.env.GOOGLE_CLIENT_ID
    const dispatch = useDispatch();
    const errors = useSelector((store) => store.errors);
    const history = useHistory();

    const onSuccess = (res) => {
        console.log('Login Success! Current user: ', res.profileObj);
        console.log('Login Success! Current user: ', res.profileObj.googleId);
        console.log('Login Success! Current user: ', res.profileObj.name);
        dispatch({
            type: 'REGISTER',
            payload: {
                username: res.profileObj.name,
                password: res.profileObj.googleId,
                picture: res.profileObj.imageUrl,
            }
        })
        // history.push('/login');
    }

    const onFailure = (res) => {
        console.log('Login Failed! res: ', res);
    }

    return (
        <div>
            <h2>Register User</h2>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                {errors.registrationMessage}
                </h3>
            )}
            <h1>Google Login Here</h1>
            <GoogleLogin 
                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default GoogleRegisterButton;