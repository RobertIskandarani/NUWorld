import React from 'react';
import Iframe from 'react-iframe';
const PlayerDesktop = () => {
    const src = 'https://player.vimeo.com/video/716537930?autoplay=1&muted=1&controls=0&loop=1';
    return (
        <Iframe
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
        ></Iframe>
    );
};

export default PlayerDesktop;
