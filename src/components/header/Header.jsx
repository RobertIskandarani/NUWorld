import '../../styles/header/Header.css';
import React, { useState, useEffect } from 'react';
import ListButton from './List-button';
import Logo from '../generics/Logo';
import IconJson from '../../data/icons.json';
import Icon from '../generics/Icons-list';
import sectionButtons from '../../data/sections.json';
import useAnalyticsEventTracker from '../../ga';
import { FaBars, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const Header = ({ video }) => {
    const discordTracker = useAnalyticsEventTracker('HEADER');
    const header = IconJson.header;
    const [activeMenu, setActiveMenu] = useState(false);
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
        <header className="header">
            <div className={width <= 768 ? 'mobile-top' : 'desktop-top'}>
                <div className="navbar">
                    <div className="logo-header">
                        <Logo />
                    </div>
                    <div className="menu-icon">
                        {activeMenu ? (
                            <FaTimes onClick={() => setActiveMenu(false)} />
                        ) : (
                            <FaBars onClick={() => setActiveMenu(true)} />
                        )}
                    </div>
                </div>
                <div className={width <= 768 ? 'mobile-menu-' + activeMenu : 'desktop-menu'}>
                    <div className={activeMenu ? 'section-buttons-active' : 'section-buttons'}>
                        <ul className="list-buttons">
                            {sectionButtons.map(e => {
                                return (
                                    <ListButton
                                        key={e.id}
                                        name={e.title}
                                        setActiveMenu={setActiveMenu}
                                        section={e.section}
                                    />
                                );
                            })}
                        </ul>
                    </div>

                    <div className={activeMenu ? 'icons-buttons-active' : 'icons-buttons'}>
                        <div className="buysoon">
                            <a
                                href="/#"
                                className="opensea-button"
                                target="_blank"
                                rel="noreferrer"
                            >
                                BUY SOON
                            </a>
                        </div>
                        <div className="icons-list-header">
                            {header.map(i => {
                                return (
                                    <a
                                        key={i.id}
                                        className="icon-link-header"
                                        href={i.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => discordTracker(i.icon)}
                                    >
                                        <Icon icon={i.icon} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <ReactPlayer
                // url={video}
                url="https://vimeo.com/716537930"
                width="150%"
                height="100%"
                playing
                loop
                muted
            />
        </header>
    );
};

export default Header;
