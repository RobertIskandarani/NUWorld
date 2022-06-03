import React, { useState, useEffect } from 'react';
import './../styles/Island-crew.css';
import useAnalyticsEventTracker from '../ga';

const IslandCrew = () => {
    const discordTracker = useAnalyticsEventTracker('DISCORD');
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <div id="island-crew" className="island">
            <img
                className="island-banner"
                src={
                    width <= 768
                        ? 'https://i.ibb.co/rm1VmPS/Banner-Secundario-para-Web-Mobile-op-1.jpg'
                        : 'https://i.ibb.co/njPrKPT/Banner-Secundario-Definitivo-Optimizado.jpg'
                }
                alt="BannerSecundario"
            />
            <div className="join-discord">
                <a
                    href="https://discord.gg/E4jSG2t6wF"
                    onClick={() => discordTracker('Discord')}
                    className="discord-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    JOIN DISCORD
                </a>
            </div>
        </div>
    );
};

export default IslandCrew;
