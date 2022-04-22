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