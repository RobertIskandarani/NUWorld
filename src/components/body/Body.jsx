import React, { useEffect, useState } from 'react';
import OurStructure from '../open-letter/Open-letter';
import IslandCast from '../Island-crew';
import Team from '../team/Team';
import Faqs from '../faqs/Faqs';
import './../../styles/Body.css';
import PlayerMobile from '../body/PlayerMobile';
import PlayerDesktop from '../body/PlayerDesktop';
import Roadmap from '../Roadmap';

const Body = () => {
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
        <div className="body">
            <div className="react-player-container">
                {width <= 768 ? <PlayerMobile /> : <PlayerDesktop />}
            </div>

            <OurStructure />

            <IslandCast />

            <Roadmap />

            <Team />

            <Faqs />
        </div>
    );
};

export default Body;
