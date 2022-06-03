import React from 'react';
import OurStructure from './open-letter/Open-letter';
import IslandCast from './Island-crew';
import Roadmap from './Roadmap/Roadmap';
import Team from './team/Team';
import Faqs from './faqs/Faqs';

const Body = () => {
    return (
        <div className="body">
            <OurStructure />

            <IslandCast />

            <Roadmap />

            <Team />

            <Faqs />
        </div>
    );
};

export default Body;
