import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';
import './../../styles/Roadmap.css';
import { Controller, Scene } from 'react-scrollmagic';
import SequenceDesktop from './Sequence/DesktopIndex';
import SequenceMobile from './Sequence/MobileIndex';

const Roadmap = () => {
    const ref = useRef();
    const [width, setWindowWidth] = useState(0);
    const [currentSection, setCurrentSection] = useState('island-crew');

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
        <div className="roadmap">
            <Controller>
                <Scene
                    duration="5500vh"
                    triggerHook="onLeave"
                    pin
                    pinSettings={{ pushFollowers: false }}
                >
                    {progress => (
                        <div
                            id="roadmap"
                            style={{
                                width: '100%',
                                height: '100vh',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {width <= 768 ? (
                                <SequenceMobile ref={ref} progress={progress} />
                            ) : (
                                <SequenceDesktop ref={ref} progress={progress} />
                            )}
                            <div className="skip-section">
                                <div className="skip">
                                    <Link
                                        className="skip-button"
                                        href="/#"
                                        activeClass="active"
                                        to={
                                            currentSection === 'island-crew'
                                                ? 'team'
                                                : 'island-crew'
                                        }
                                        spy={true}
                                        smooth={true}
                                        onClick={() =>
                                            setTimeout(() => {
                                                currentSection === 'island-crew'
                                                    ? setCurrentSection('team')
                                                    : setCurrentSection('island-crew');
                                            }, 1500)
                                        }
                                    >
                                        {currentSection === 'island-crew' ? 'Skip' : 'Previous'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </Scene>
            </Controller>
        </div>
    );
};

export default Roadmap;
