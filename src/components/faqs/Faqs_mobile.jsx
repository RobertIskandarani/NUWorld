import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

import FaqsNewbies from './Faq_newbies';
import FaqsPros from './Faq_pros';
import Nekevah from './../../assets/Nekevah para FAQ.png';
import Professor from './../../assets/Dr Professor para FAQ.png';

import '../../styles/Faqs/Faqs_mobile.css';

const FaqsMobile = () => {
    return (
        <div className="faqs_mobile">
            <div className="faqs-mobile-title">
                <p>FAQ'S</p>
            </div>
            <Accordion className="accordion-mobile" allowZeroExpanded={true}>
                <AccordionItem className="faqs-mobile-item-newbies">
                    <AccordionItemState>
                        {({ expanded }) =>
                            expanded ? (
                                <AccordionItemHeading
                                    className={'accordion-item-heading-expanded-mobile'}
                                >
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR NEWBIES </p>
                                        <FaMinus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            ) : (
                                <AccordionItemHeading className={'accordion-item-heading-mobile'}>
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR NEWBIES </p>
                                        <FaPlus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            )
                        }
                    </AccordionItemState>

                    <AccordionItemPanel className={'accordion-panel-mobile'}>
                        <div className="professor-section">
                            <img width="80%" src={Professor} alt="Professor" />
                        </div>
                        <FaqsNewbies />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className={'faqs-mobile-item-pros'}>
                    <AccordionItemState>
                        {({ expanded }) =>
                            expanded ? (
                                <AccordionItemHeading
                                    className={'accordion-item-heading-expanded-mobile'}
                                >
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR PROS </p>
                                        <FaMinus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            ) : (
                                <AccordionItemHeading className={'accordion-item-heading-mobile'}>
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR PROS </p>
                                        <FaPlus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            )
                        }
                    </AccordionItemState>

                    <AccordionItemPanel className={'accordion-panel-mobile'}>
                        <div className="nekevah-section">
                            <img width="80%" src={Nekevah} alt="Nekevah" />
                        </div>
                        <FaqsPros />
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FaqsMobile;
