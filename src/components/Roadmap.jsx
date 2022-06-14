import React from 'react';
import ReactPlayer from 'react-player';

import './../styles/Roadmap.css';

const Roadmap = () => {
    return (
        <div className="roadmap">
            <ReactPlayer
                url={require('./../videos/RoadMap NuWorld.mp4')}
                width="100%"
                height="100%"
                loop
                playing
                muted
                preload="auto"
            />
        </div>
    );
};

export default Roadmap;
