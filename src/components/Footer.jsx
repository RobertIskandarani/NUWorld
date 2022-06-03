import React from 'react';
import './../styles/Footer.css';
import Logo from './generics/Logo';
import Icon from './generics/Icons-list';
import IconJson from '../data/icons.json';
import useAnalyticsEventTracker from '../ga';

const Footer = () => {
    const discordTracker = useAnalyticsEventTracker('FOOTER');
    const footer = IconJson.footer;
    return (
        <footer className="footer">
            <div className="footer-top">
                <img className="footer-top-img" src="https://i.ibb.co/99CLKSq/bg-body-top.webp" alt="footerTop" />
            </div>
            <div className="footer-section">
                <div className="logo-footer">
                    <Logo />
                </div>
                <div className="icons-list-footer">
                    {footer.map(i => {
                        return (
                            <a
                                key={i.id}
                                className="icon-link-footer"
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
                <p className="nu-world-rights">© 2022 Nu World | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
