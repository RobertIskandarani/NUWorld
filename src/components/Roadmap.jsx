import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import VimeoPlayer from 'react-player/vimeo';

import './../styles/Roadmap.css';

const Roadmap = () => {
    const [playing, setPlaying] = useState(false);
    const [url, setUrl] = useState();
    const [y, setY] = useState();
    const roadmap = useRef();
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setY(window.scrollY);
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    });

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        if (width <= 768) {
            setUrl('https://vimeo.com/720308373');
            handleEnter('mobile');
        } else {
            setUrl('https://vimeo.com/719122381');
            handleEnter('desktop');
        }
    };

    const handleEnter = plattform => {
        if (plattform === 'mobile') {
            if (
                (y >= roadmap.current.offsetTop - roadmap.current.offsetHeight) &
                (y <= roadmap.current.offsetTop + roadmap.current.offsetHeight)
            ) {
                setPlaying(true);
            } else {
                setPlaying(false);
            }
        } else {
            if (
                (y >= roadmap.current.offsetTop - roadmap.current.offsetHeight / 2) &
                (y <= roadmap.current.offsetTop + roadmap.current.offsetHeight)
            ) {
                setPlaying(true);
            } else {
                setPlaying(false);
            }
        }
    };

    return (
        <div className="roadmap" ref={roadmap}>
            <VimeoPlayer
                url={url}
                width="100%"
                height="100%"
                loop
                playing={playing}
                muted
                playsinline
            />
        </div>
    );
};

export default Roadmap;
