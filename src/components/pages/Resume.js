import React from 'react';
import themeColor from '../../styles/themeColor'

const styles = {
    animation:`animate__animated animate__fadeIn `,
    heading: `mt-3 mx-40 p-4  text-center text-3xl text-[${themeColor.main}] font-bold bg-[${themeColor.secondary}] rounded-lg`,
    body: `p-10 m-5 rounded-md text-[${themeColor.main}] bg-[${themeColor.secondary}]`,
    link: `font-semibold text-[${themeColor.main}] hover:text-[${themeColor.accent}]`
};

const Resume =() =>{
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Resume</h2>
            <div class={styles.body}>
                <a class={styles.link} href="resume.pdf"> Click to view Resume </a>
            <p>*Currently a Resume Placeholder*</p>
            </div>
        </div>
    );
};

export default Resume;