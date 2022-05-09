import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';
import icon from '../../images/icon/Background.png';


const Login = () => {
    const [signInWithgoogle ] = useSignInWithGoogle(auth);

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('') 
    const [error, setError] = useState('');
    

    const [createUserWithEmailAndPassword, user,loading,] = useCreateUserWithEmailAndPassword(auth);

    
      if (loading) {
         <p>Loading...</p>;
      }
      if (user) {
            <p>Registered User: {user.email}</p>
          
        
      }

        const emailBlur = event =>{
            setEmail(event.target.value)
        };
        const passwordBlur = event =>{
            setPassword(event.target.value)
        };
        const confirmPasswordBlur = event =>{
            setConfirmPassword(event.target.value)
        };
        const createUser = event =>{
            event.preventDefault();
            if(password !== confirmPassword){
            setError()
            return;
            }

            createUserWithEmailAndPassword(email, password)
        }
        if(password !== confirmPassword){
            alert('Your password did not match')
        }
        return (
        <div className='login-container'>
            <h2 className='login-title'>Login Here</h2>
            <div className='input-group'>
                <form onSubmit={createUser}>
                <label htmlFor="email">Email</label>
                <input onBlur={emailBlur} type="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input onBlur={passwordBlur} type="password" name='password' required />
                <label htmlFor="password">Confirm Password</label>
                <input onBlur={confirmPasswordBlur} type="password" name='confirmPassword' required  />
                <input className='form-submit mt-3' type="submit" value="Login" />
                </form>
                <p className='p-area ms-5 mt-2'>
                    or, Login with Google.
                </p>
            </div>
                    <button onClick={() => signInWithgoogle()} className='ms-5'> <img src={icon} alt="" /> Signin with google</button>
        </div>
    );
};

export default Login;