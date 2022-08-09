import React, { useState, useEffect } from 'react';

import PassportImg from './../../assets/Passport.png';
import tenThousand from './../../assets/10.000.png';

import './../../styles/open-letter/Passport.css';

const Passport = () => {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <div className="voluntarios-ext">
            <div className="voluntarios">
                <div className="voluntarios-description">
                    <div className="voluntarios-title">
                        <div className="ten-olamite">
                            {/* <img
                                width={width <= 768 ? '55%' : '40%'}
                                height="auto"
                                className="ten-thousand"
                                src={tenThousand}
                                alt="ten thousand"
                            /> */}
                            <p className="ten-thousand">5,555</p>
                        </div>
                        <p className="passports">High quality NFTs at ZERO COST.</p>
                    </div>
                    <p className="voluntarios-text">Why FREE MINT?</p>
                    <p className="voluntarios-text">
                        We have the philantropic purpose of delivering HiFi, accesible & sustainable
                        assets in a comunity accustomed to LoFi under-deliveries even in paid
                        mints.  Or haven't you experienced a rug before?
                    </p>
                </div>
                <div className="voluntarios-passport">
                    <img
                        width="auto"
                        height="auto"
                        className="passport-img"
                        src={PassportImg}
                        alt="Passport"
                    />
                </div>
            </div>
        </div>
    );
};

export default Passport;
