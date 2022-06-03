import React from 'react';
import './../../styles/generics/Icons-list.css';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

const Icon = i => {
    let component = null;
    if (i.icon === 'Opensea') {
        component = (
            <img className="icon-img" src="https://i.ibb.co/k000YYf/OpenSea.webp" alt="icon" />
        );
    } else if (i.icon === 'Discord') {
        component = <FaDiscord className="app-icon-title" />;
    } else if (i.icon === 'Twitter') {
        component = <FaTwitter className="app-icon-title" />;
    } else if (i.icon === 'Instagram') {
        component = <FaInstagram className="app-icon-title" />;
    }
    return component;
};

export default Icon;
