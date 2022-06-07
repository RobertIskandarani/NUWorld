import React from 'react';
import './../styles/Island-crew.css';
import useAnalyticsEventTracker from '../ga';

const IslandCrew = () => {
    const discordTracker = useAnalyticsEventTracker('DISCORD');
    return (
        <div id="island-crew" className="island">
            {/* <img className="island-banner" src={Banner} alt="BannerSecundario" /> */}
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
