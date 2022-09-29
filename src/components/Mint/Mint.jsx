import React, { useEffect } from 'react';

import './../../styles/Mint.css';
import SubItem from './SubItem';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useState } from 'react';

function Mint() {
    const [total, setTotal] = useState(1);
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

    function minus() {
        if (total > 1) {
            setTotal(total - 1);
        }
    }

    function plus() {
        if (total < 3) {
            setTotal(total + 1);
        }
    }

    return (
        <div className="mint-container">
            {width > 768 ? (
                <p className="mint-title">Its time. Join us now</p>
            ) : (
                <div
                    style={{
                        height: '15vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <p className="mint-title">Its time.</p>
                    <p className="mint-title">Join us now</p>
                </div>
            )}
            <div className="mint-box">
                <p className="mint-box-title">MINT NFT</p>
                <SubItem title={'AVAILABLE NFT'} description={'8000 / 10.000'} />
                <SubItem title={'BALANCE'} description={'3'} />
                <div className="mint-select">
                    <p>TOTAL</p>
                    <div className="counter">
                        <div
                            className="minus"
                            style={{ cursor: 'pointer' }}
                            onClick={() => minus()}
                        >
                            <AiOutlineMinusCircle
                                color="white"
                                size={width > 768 ? '1.875vw' : '4.79575vw'}
                            />
                        </div>
                        <div className="total">{total}</div>
                        <div className="plus" onClick={() => plus()} style={{ cursor: 'pointer' }}>
                            <AiOutlinePlusCircle
                                color="white"
                                size={width > 768 ? '1.875vw' : '4.79575vw'}
                            />
                        </div>
                    </div>
                </div>
                <div className="mint-button" onClick={() => {}} style={{ cursor: 'pointer' }}>
                    MINT
                </div>
                <div className="mint-corner">Max 3 per wallet</div>
            </div>
            <div className="mint"></div>
        </div>
    );
}

export default Mint;
