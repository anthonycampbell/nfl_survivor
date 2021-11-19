import React from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
function Login(props){
    const onSuccess = (res) => {
        axios.post('/api/users', {
            token: res.tokenId
        })
        .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            props.setUser(res.data.user);
        })
        .catch((err) => {
            console.log(err)
        })
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;