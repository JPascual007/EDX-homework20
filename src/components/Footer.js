import React from 'react';
import Socials from './Socials';
import themeColor from '../styles/themeColor'

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

const Footer = () =>{
    return (
        <div class={styles.footer} >
            <Socials
                link={socials[0].link}
                icon={socials[0].icon}
                alt={socials[0].alt}
            />
            <Socials
                link={socials[1].link}
                icon={socials[1].icon}
                alt={socials[1].alt}
            />
            <Socials
                link={socials[2].link}
                icon={socials[2].icon}
                alt={socials[2].alt}
            />
        </div>
    );
};

export default Footer;