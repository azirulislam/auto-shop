import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='header'>
            <Link to="/Home">HOME</Link>
            <Link to="/inventory">INVENTORY</Link>
            <Link to="/Manage">MANAGE</Link>
            <Link to="/blogs">BLOG</Link>
            {
                    user ?
                    <button onClick={handleSignOut}>SIGN OUT</button>
                    :
                    <Link to="/Login">LOGIN</Link>}
            
        </div>
    );
};

export default Header;