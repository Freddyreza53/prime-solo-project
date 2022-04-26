import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function GoogleLoginButton() {

    // process.env.GOOGLE_CLIENT_ID
    const dispatch = useDispatch();

    const onSuccess = (res) => {
        console.log('Login Success! Current user: ', res.profileObj);
        console.log('Login Success! Current user: ', res.profileObj.googleId);
        console.log('Login Success! Current user: ', res.profileObj.name);

        dispatch({
            type: 'SET_TOKEN',
            payload: {
                token: gapi.auth.getToken().access_token
            }
        })
        
        dispatch({
            type: 'LOGIN',
            payload: {
                username: res.profileObj.name,
                password: res.profileObj.googleId,
            }
        })

        
        // const accessToken = gapi.auth.getToken().access_token;

        // console.log(accessToken);
    }

    const onFailure = (res) => {
        console.log('Login Failed! res: ', res);
    }

    return (
        <div>
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

export default GoogleLoginButton;