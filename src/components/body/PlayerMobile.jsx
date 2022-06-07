import React from 'react';
import Iframe from 'react-iframe';

const PlayerMobile = () => {
    return (
        <Iframe
            src="https://player.vimeo.com/video/718044664?autoplay=1&muted=1&controls=0&loop=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
        ></Iframe>
    );
};

export default PlayerMobile;
