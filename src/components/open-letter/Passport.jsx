import React from 'react';

import PassportImg from './../../assets/Passport.png';
import tenThousand from './../../assets/10.000.png';

import './../../styles/open-letter/Passport.css';

const Passport = () => {
    return (
        <div className="voluntarios-ext">
            <div className="voluntarios">
                <div className="voluntarios-description">
                    <div className="voluntarios-title">
                        <div className="ten-olamite">
                            <img className="ten-thousand" src={tenThousand} alt="ten thousand" />
                            <p className="olamite">OLAMITE</p>
                        </div>
                        <p className="passports">PASSPORTS</p>
                    </div>
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
