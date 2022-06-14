import React from 'react';
import ReactPlayer from 'react-player';

const PlayerMobile = () => {
    return (
        <ReactPlayer
            url={require('./../../videos/Banner_superior_Web_Okey_Mobile.mp4')}
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
