import React from 'react';
import ReactPlayer from 'react-player';

import './../styles/Roadmap.css';

const Roadmap = () => {
    return (
        <div className="roadmap">
            <ReactPlayer
                url="https://vimeo.com/719122381"
                width="100%"
                height="100%"
                loop
                playing
                muted
                playsinline
            />
        </div>
    );
};

export default Roadmap;
