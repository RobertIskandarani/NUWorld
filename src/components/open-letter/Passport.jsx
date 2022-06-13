import React from 'react';

import PassportImg from './../../assets/Passport.png';

import './../../styles/open-letter/Passport.css';

const Passport = () => {
    return (
        <div className="voluntarios-ext">
            <div className="voluntarios">
                <div className="voluntarios-description">
                    <p className="voluntarios-text capture-it">ONLY</p>
                    <p className="voluntarios-title">10.000 OLAMITE PASSPORTS</p>
                    <p className="voluntarios-text">
                        The people who will embark on this interstellar adventure and populate Olam
                        Island, are in reality 10,000 tailor-made and avant-guarde humanoids that
                        will be avaiable on the ETH network
                    </p>
                </div>
                <div className="voluntarios-passport">
                    <img className="passport-img" src={PassportImg} alt="Passport" />
                </div>
            </div>
        </div>
    );
};

export default Passport;
