import React, { useEffect } from 'react';

import './../../styles/Mint.css';
import SubItem from './SubItem';
import { useState } from 'react';
import { ConnectWallet, useAddress, useContract } from '@thirdweb-dev/react';

function Mint() {
    const [totalSupply, setTotalSupply] = useState(0);
    const [claimed, setClaimed] = useState(0);
    const [width, setWindowWidth] = useState(0);
    const address = useAddress();
    const [loading, setLoading] = useState(false);
    const { contract } = useContract('0x0f4d7C1a74d7211DFa8f513f5303e6ef01BC9649');
    const [mintClicked, setMintClicked] = useState(false);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        getClaimed();
        getTotalSupply();
        setInterval(() => {
            getClaimed();
        }, 10000);
    });

    const getClaimed = async () => {
        const claimed = !!contract ? await contract.totalClaimedSupply() : setLoading(true);
        setClaimed(claimed);
    };

    const getTotalSupply = async () => {
        var total;
        if (!!contract) {
            total =
                parseInt(await contract.totalUnclaimedSupply()) +
                parseInt(await contract.totalClaimedSupply());
            setLoading(false);
        } else {
            setLoading(true);
        }

        setTotalSupply(total);
    };

    const mint = async () => {
        const quantity = 2;
        let tx;

        try {
            tx = await contract.claimTo(address, quantity);
        } catch (err) {
            alert('Operation Failed');
        }
        setMintClicked(false);
        if (tx) {
            alert('Successful Operation');
        }
    };

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    useEffect(() => {});

    return (
        <div className="mint-container">
            {width > 768 ? (
                <div className="mint-title-container">
                    <p className="mint-title">Its time. Join us now</p>
                    <div className="connect-wallet">
                        <ConnectWallet />
                    </div>
                </div>
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
                    <div className="connect-wallet">
                        <ConnectWallet />
                    </div>
                </div>
            )}
            <div className="mint-box">
                <p className="mint-box-title">MINT NFT</p>
                {loading ? (
                    <SubItem title={'MINTED NFT'} description={'Loading...'} />
                ) : (
                    <SubItem title={'MINTED NFT'} description={`${claimed} / ${totalSupply}`} />
                )}
                <SubItem title={'Total'} description={'2'} />
                <div
                    className="mint-button"
                    onClick={() => {
                        mint();
                        setMintClicked(true);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    MINT
                </div>
                <div className="waiting-message">
                    {mintClicked
                        ? 'Wait until the operation is confirmed, it might take a few minutes'
                        : ''}
                </div>
            </div>
            <div className="mint"></div>
        </div>
    );
}

export default Mint;
