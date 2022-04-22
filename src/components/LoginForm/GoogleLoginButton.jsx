import { GoogleLogin } from 'react-google-login';


function GoogleLoginButton() {

    // process.env.GOOGLE_CLIENT_ID

    const onSuccess = (res) => {
        console.log('Login Success! Current user: ', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('Login Failed! res: ', res);
    }

    return (
        <div>
            <h1>Google Login Here</h1>
            <GoogleLogin 
                client_id="610733278251-6irih7hnit1v2d1vvkgiquq5lip3jfhf.apps.googleusercontent.com"
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