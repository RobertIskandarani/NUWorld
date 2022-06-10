import React from 'react';
import ReactPlayer from 'react-player';

const PlayerDesktop = () => {
    return (
        <ReactPlayer
            url={require('./../../videos/Banner_superior_Web_Okey.mov.mp4')}
            width="100%"
            height="100%"
            loop
            playing
            muted
        />
    );
};

export default PlayerDesktop;
