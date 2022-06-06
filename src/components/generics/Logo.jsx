import React from 'react';
import LogoImg from './../../assets/Logo Nu World - Alta.png';
import './../../styles/generics/Logo.css';

const Logo = () => {
    return (
        <a className="logo" href="/#">
            <img className="logo-img" src={LogoImg} alt="Logo" />
        </a>
    );
};

export default Logo;
