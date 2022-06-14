import React from 'react';
import ReactPlayer from 'react-player';

const PlayerMobile = () => {
    return (
        <ReactPlayer
            url="https://vimeo.com/718044664"
            width="100%"
            height="100%"
            loop
            playing
            muted
            playsinline
        />
    );
};

export default PlayerMobile;
