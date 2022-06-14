import React from 'react';
import ReactPlayer from 'react-player';

const PlayerDesktop = () => {
    return (
        <ReactPlayer
            url="https://vimeo.com/718039735"
            width="100%"
            height="100%"
            loop
            playing
            muted
            playsinline
        />
    );
};

export default PlayerDesktop;
