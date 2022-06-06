import React from 'react';
import OurStructure from './open-letter/Open-letter';
import IslandCast from './Island-crew';
import Roadmap from './Roadmap/Roadmap';
import Team from './team/Team';
import Faqs from './faqs/Faqs';
import VimeoPlayer from 'react-player/vimeo';
import './../styles/Body.css';

const Body = () => {
    return (
        <div className="body">
            <div className="react-player-container">
                <VimeoPlayer
                    className="react-player"
                    url="https://vimeo.com/716537930"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
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
