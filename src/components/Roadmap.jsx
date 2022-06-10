import React from 'react';
import './../styles/Roadmap.css';
import ReactPlayer from 'react-player';

const Roadmap = () => {
    return (
        <div className="roadmap" on>
            <ReactPlayer
                url={require('./../videos/RoadMap NuWorld.mp4')}
                width="100%"
                height="100%"
                loop
                playing
                muted
            />
        </div>
    );
};

export default Roadmap;
