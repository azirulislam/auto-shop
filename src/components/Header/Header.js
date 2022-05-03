import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/Home">HOME</Link>
            <Link to="/inventory">INVENTORY</Link>
            <Link to="/Manage">MANAGE</Link>
            <Link to="/blogs">BLOG</Link>
        </div>
    );
};

export default Header;