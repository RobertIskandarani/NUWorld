import React, { useEffect, useState } from 'react';
import nft from '../data/nft';
import Carousel from 'react-elastic-carousel';
import Slider from 'react-slick';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './../styles/Gallery.css';

const Gallery = () => {
    const [width, setWindowWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const [hiddenBack, setHiddenBack] = useState(true);
    const [hiddenForward, setHiddenForward] = useState(false);

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
        <div className="gallery">
            <h1 className="gallery-title">Gallery</h1>
            <p className="meet-the-population">Coming soon...</p>
            <div>
                <div className="carousel">
                    <IoIosArrowBack
                        size={30}
                        className={hiddenBack ? 'arrow-back-hidden' : 'arrow-back'}
                        onClick={() => {
                            if (index === 1) {
                                setHiddenBack(true);
                            }
                            setIndex(index - 1);
                            setHiddenForward(false);
                        }}
                    />
                    <div className="images-carousel">
                        {nft
                            .filter(i => i.index === index)
                            .map(i => (
                                <img
                                    className={'image-carrousel'}
                                    src={i.image}
                                    alt={i.id}
                                    key={i.id}
                                />
                            ))}
                    </div>
                    <IoIosArrowForward
                        size={30}
                        className={hiddenForward ? 'arrow-forward-hidden' : 'arrow-forward'}
                        onClick={() => {
                            if (index === 2) {
                                setHiddenForward(true);
                            }
                            setIndex(index + 1);
                            setHiddenBack(false);
                        }}
                    />
                </div>
                <div className="dots">
                    <button
                        className={index === 0 ? 'dot-selected' : 'dot'}
                        onClick={() => {
                            setIndex(0);
                            setHiddenBack(true);
                            setHiddenForward(false);
                        }}
                    ></button>
                    <button
                        className={index === 1 ? 'dot-selected' : 'dot'}
                        onClick={() => {
                            setIndex(1);
                            setHiddenBack(false);
                            setHiddenForward(false);
                        }}
                    ></button>
                    <button
                        className={index === 2 ? 'dot-selected' : 'dot'}
                        onClick={() => {
                            setIndex(2);
                            setHiddenBack(false);
                            setHiddenForward(false);
                        }}
                    ></button>
                    <button
                        className={index === 3 ? 'dot-selected' : 'dot'}
                        onClick={() => {
                            setIndex(3);
                            setHiddenBack(false);
                            setHiddenForward(true);
                        }}
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
