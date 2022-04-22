import { GoogleLogout } from 'react-google-login';


function GoogleLogoutButton() {

    // process.env.GOOGLE_CLIENT_ID

    const onSuccess = (res) => {
        console.log('Logout Successful!');
    }

    return (
        <div>
            <h1>Google Logout Here</h1>
            <GoogleLogout 
                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GoogleLogoutButton;