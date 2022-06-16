import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

import './../styles/Roadmap.css';

const Roadmap = () => {
    const [url, setUrl] = useState();
    const roadmap = useRef();

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    });

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            setUrl('https://vimeo.com/720308373');
        } else {
            setUrl(
                'https://player.vimeo.com/video/719122381?h=6225b98fa5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            );
        }
    };

    return (
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
                src="https://player.vimeo.com/video/719122381?h=6225b98fa5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="RoadMap NuWorld"
            ></iframe>
        </div>
    );
};

export default Roadmap;
