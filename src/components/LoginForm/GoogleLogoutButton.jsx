import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogout } from 'react-google-login';


function GoogleLogoutButton() {

    // process.env.GOOGLE_CLIENT_ID
    const dispatch = useDispatch();

    const onSuccess = (res) => {
        console.log('Logout Successful!');
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <div>
            <GoogleLogout 
                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GoogleLogoutButton;