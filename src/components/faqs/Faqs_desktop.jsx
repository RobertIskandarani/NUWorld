import React, { useState } from 'react';
import FaqsPros from './Faq_pros';
import FaqsNewbies from './Faq_newbies';
import '../../styles/Faqs/Faqs_desktop.css';

const FaqsDesktop = () => {
    const [faqs_for, setFor] = useState('pros');

    return (
        <div className="faqs_desktop">
            <div className="faqs-principal">
                <div className="faqs-desktop-title">
                    <p>FREQUENTLY ASKED QUESTIONS</p>
                </div>
                <img
                    className="faqs-background"
                    src="https://i.ibb.co/4V9wFf3/Isotipo-Nu-World-Blanco.webp"
                    alt="FaqsNU"
                />
                <div className="faqs-banner">
                    <div className="faqs-character" onClick={() => setFor('newbies')}>
                        <div className={'faqs-professor-principal-' + faqs_for}>
                            <p className={'faqs-title-proffesor-' + faqs_for}>FOR NEWBIES</p>
                            <img
                                className="faqs-proffesor-img"
                                src="https://i.ibb.co/JBMFm4x/Dr-Professor-para-FAQ.webp"
                                alt="Proffesor"
                            />
                        </div>
                        <div className={'faqs-name-proffesor-' + faqs_for}>
                            <p className="faqs-name">Dr. Professor</p>
                        </div>
                        <div className={'rectangle-proffesor-' + faqs_for}></div>
                    </div>
                    <div className="faqs-character" onClick={() => setFor('pros')}>
                        <div className={'faqs-nekevah-principal-' + faqs_for}>
                            <p className={'faqs-title-nekevah-' + faqs_for}>FOR PROS</p>
                            <img
                                className="faqs-nekevah-img"
                                src="https://i.ibb.co/rfXH8DT/Nekevah-para-FAQ.webp"
                                alt="Nekevah"
                            />
                        </div>
                        <div className={'faqs-name-nekevah-' + faqs_for}>
                            <p className="faqs-name">Cap. Nekevah</p>
                        </div>
                        <div className={'rectangle-nekevah-' + faqs_for}></div>
                    </div>
                </div>
            </div>
            {faqs_for === 'newbies' ? <FaqsNewbies /> : <FaqsPros />}
        </div>
    );
};

export default FaqsDesktop;
