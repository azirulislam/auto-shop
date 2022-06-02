import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import icon from '../../images/icon/Background.png';
import Loading from './Loading';

const Login = () => {
    const [signInWithgoogle ] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }
    if(loading){
        return <Loading></Loading>
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-container'>
            <h2 className='login-title'>Please Login</h2>
            <div className='input-group'>
            <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
            </div>
            <p className='p-area ms-5 mt-2'>
                    New to here : <Link className='text-xl text-primary ' to='/Register'>Create an account</Link>
                </p>
            <button className='btn ms-5 mt-3' onClick={() => signInWithgoogle()} > <img src={icon} alt="" /> Signin with google</button>
        </div>
    );
};

export default Login;