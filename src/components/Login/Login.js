import React from 'react';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import icon from '../../images/icon/Background.png';

const Login = () => {
    const [signInWithgoogle ] = useSignInWithGoogle(auth);
    return (
        <div className='login-container'>
            <h2 className='login-title'>Please Login</h2>
            <div className='input-group'>
                <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <input className='form-submit' type="submit" value="Login" required />
                </form>
               <h5 className='ms-5 mt-4'>or, Signin with google.</h5>
            </div>
            <button onClick={() => signInWithgoogle()} className='ms-5 mt-2'> <img src={icon} alt="" /> Signin with google</button>
        </div>
    );
};

export default Login;