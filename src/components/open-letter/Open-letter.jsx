import React from 'react';
import './../../styles/open-letter/Open-letter.css';
import Passport from './Passport';
import PrincipalStructre from './Principal-structre';

const OpenLetter = () => {
    return (
        <div id="open-letter" className="open-letter">
            <p className="open-letter-title">OPEN LETTER TO THE OLD WORLD</p>
            <PrincipalStructre />
            <Passport />
        </div>
    );
};

export default OpenLetter;
