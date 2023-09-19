import React from 'react';
import themeColor from '../../styles/themeColor'
import myPhoto from '../../images/JPascual007Portrait.jpg';
const size = 220;

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading: `mt-3 mx-40 p-4  text-center text-3xl text-[${themeColor.main}] font-bold bg-[${themeColor.secondary}] rounded-lg`,
    body: `p-10 m-5 rounded-md text-[${themeColor.main}] bg-[${themeColor.secondary}]`,
    bodyContainer: `flex justify-center rounded`,
    avatar: `m-10 p-1 text-[${themeColor.main}] text-center bg-[${themeColor.secondary}] rounded-full`,
    avatarContainer: "flex justify-center"
};

const my = {
    photo: "./images/JPascual007Portrait.jpg",
    alt: 'Portrait of Jonathan Pascual',
    bio: "Welcome to my Portfolio! I am currently continuing my education at University of California Irvine for a full stack web development bootcamp. My goal is to develop my knowledge and skills to create visually appealing websites.",
};

const About = () => {
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>About Me</h2>
            <div class={styles.avatarContainer}>
                <img 
                    class={styles.avatar}
                    src={myPhoto}
                    alt="My Photo"
                    width={size}
                    height={size}
                />
            </div>
            <div class={styles.bodyContainer}>
                <p class={styles.body}>{my.bio}</p>
            </div>
        </div>
    );
};

export default About;