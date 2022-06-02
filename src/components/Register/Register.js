import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
import icon from '../../images/icon/Background.png';
import Loading from '../Login/Loading';


const Register = () => {
    const [signInWithgoogle ] = useSignInWithGoogle(auth);

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('') 
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);
    

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

        const emailBlur = event =>{
            setEmail(event.target.value)
        };
        const passwordBlur = event =>{
            setPassword(event.target.value)
        };
        const confirmPasswordBlur = event =>{
            setConfirmPassword(event.target.value)
        };
        if (user) {
            navigate(from, {replace: true});
        }
        if(loading){
            return <Loading></Loading>
        }
    
        const createUser = event =>{
            event.preventDefault();
            if(password !== confirmPassword){
            setError('Your password did not match')
            return;
            }

            createUserWithEmailAndPassword(email, password)
        }

        return (
        <div className='login-container'>
            <h2 className='login-title'>Register Now</h2>
            <div className='input-group'>
                <form onSubmit={createUser}>
                <label htmlFor="email">Email</label>
                <input onBlur={emailBlur} type="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input onBlur={passwordBlur} type="password" name='password' required />
                <label htmlFor="password">Confirm Password</label>
                <input onBlur={confirmPasswordBlur} type="password" name='confirmPassword' required  />
                <input className='form-submit' type="submit" value="Submit" />
                </form>
                <p className='p-area ms-5 mt-2'>
                    Already have an account?  : <Link className='text-xl text-primary' to='/Login'>Login</Link>
                </p>
            </div>
                    <button onClick={() => signInWithgoogle()} className='btn ms-5 mt-3'> <img className='mr-4' src={icon} alt="" /> Signin with google</button>
        </div>
    );
};

export default Register;