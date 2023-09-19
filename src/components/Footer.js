import React from 'react';
import Socials from './Socials';
import themeColor from '../styles/themeColor';

const socials = [
    {
        link: 'https://github.com/JPascual007',
        icon: '/img/github/iconWhite.png',
        alt: 'GitHub Repository',
    },{
        link: 'https://www.linkedin.com/in/jonathan-pascual-4ab247167/',
        icon: '/img/linkedin/iconWhite.png',
        alt: 'LinkedIn Profile',
    },{
        link: 'https://stackoverflow.com/users/21453660/jonathan-pascual',
        icon: '/img/slack/iconWhite.png',
        alt: 'Slack Overflow',
    }
];

const styles = {
    footer: `m-5 bg-[${themeColor.main}] flex justify-center`,
};

const Footer = () => {
    return (
        <div className={styles.footer} >
            {socials.map((social, index) => (
                <Socials
                    key={index}
                    link={social.link}
                    icon={social.icon}
                    alt={social.alt}
                />
            ))}
        </div>
    );
};

export default Footer;