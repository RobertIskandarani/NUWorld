import React from 'react';
import OurStructure from './open-letter/Open-letter';
import IslandCast from './Island-crew';
import Roadmap from './Roadmap/Roadmap';
import Team from './team/Team';
import Faqs from './faqs/Faqs';
import ReactPlayer from 'react-player';
import './../styles/Body.css';

const Body = () => {
    return (
        <div className="body">
            <div className="react-player-container">
                <ReactPlayer
                    url="https://vimeo.com/716537930"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100vh"
                />
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
