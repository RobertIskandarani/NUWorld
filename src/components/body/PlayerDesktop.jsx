import React from 'react';
import VimeoPlayer from 'react-player/vimeo';

const PlayerDesktop = () => {
    return (
        <VimeoPlayer
            url="https://vimeo.com/716537930"
            playing
            loop
            muted
            width="100%"
            height="100%"
        />
    );
};

export default PlayerDesktop;
