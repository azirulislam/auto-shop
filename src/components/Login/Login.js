import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
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
                <p className='p-area ms-5 mt-2'>
                    New to here : <Link className='text-xl text-primary' to='/Register'>Create an account</Link>
                </p>
            </div>
            <button className='btn' onClick={() => signInWithgoogle()} > <img src={icon} alt="" /> Signin with google</button>
        </div>
    );
};

export default Login;