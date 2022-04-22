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
                client_id="610733278251-6irih7hnit1v2d1vvkgiquq5lip3jfhf.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GoogleLogoutButton;