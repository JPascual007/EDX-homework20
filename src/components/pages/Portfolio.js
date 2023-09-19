import React  from 'react';
import Project from './Project';
import themeColor from '../../styles/themeColor'

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading: `mt-3 mx-40 p-4  text-center text-3xl text-[${themeColor.main}] font-bold bg-[${themeColor.secondary}] rounded-lg`,
    portfolio: "p-5 mx-12 my-8 grid grid-cols-12 gap-2",
};

const projects = [
    {
        name: "Horiseon Social Solution Services Website",
        description: "HTML, CSS, and Git",
        link:"https://jpascual007.github.io/EDX-homework01/",
        repo: "https://github.com/JPascual007/EDX-homework01",
        img:"./images/Horiseon.png",
        alt:"Screenshot of Horiseon Landing Page",
    },{
        name: "Password Generator",
        description: "Random Password Generator #JS",
        link:'https://jpascual007.github.io/EDX-homework03/',
        repo:'https://github.com/JPascual007/EDX-homework03',
        img:"./images/PasswordGenerator.png",
        alt:"Screenshot of Password Generator Landing Page",
        
    },{
        name: "Express Note Taker",
        description: "#JS #Express",
        link:'https://warm-bayou-95001-9dd535feacee.herokuapp.com/notes',
        repo:'https://github.com/JPascual007/EDX-homework11',
        img:"./images/ExpressNoteTaker.png",
        alt:"Screenshot of Express Note Taker",
    },{
        name: "Dad Gifs (First Group Project)",
        description: "#HTML #CSS #JS #API",
        link:'https://19dbo91.github.io/dad-gifs/',
        repo:'https://github.com/19dbo91/dad-gifs',
        img:"./images/DadGifs.png",
        alt:"Screenshot of Dad Gifs Homepage",
    },{
        name: "Workout Forum (Second Group Project)",
        description: " #HTML #CSS #JS #LOCALSTORAGE",
        link:"https://secret-headland-44009-a7fef38932b2.herokuapp.com/",
        repo:"https://github.com/HaydenFelfe/workout_forum",
        img:"./images/WorkoutForum.png",
        alt:"Screenshot of Workout Forum Homepage",
    },{
        name: "Hike & Seek Supplies (Third Group Project)",
        description: "#React",
        link:"https://github.com/HaydenFelfe/Hike-Seek-Supplies",
        repo:"https://github.com/HaydenFelfe/Hike-Seek-Supplies",
        img:"./images/Hike&SeekSupplies.png",
        alt:"Screenshot of H&S Supplies",
    },
];

const Portfolio =() =>{
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Portfolio</h2>
            <div class={styles.portfolio}>
                <Project
                    name={projects[0].name}
                    description={projects[0].description}
                    link={projects[0].link}
                    repo={projects[0].repo}
                    img={projects[0].img}
                    alt={projects[0].alt}
                />
                <Project
                    name={projects[1].name}
                    description={projects[1].description}
                    link={projects[1].link}
                    repo={projects[1].repo}
                    img={projects[1].img}
                    alt={projects[1].alt}
                />
                <Project
                    name={projects[2].name}
                    description={projects[2].description}
                    link={projects[2].link}
                    repo={projects[2].repo}
                    img={projects[2].img}
                    alt={projects[2].alt}
                />
                <Project
                    name={projects[3].name}
                    description={projects[3].description}
                    link={projects[3].link}
                    repo={projects[3].repo}
                    img={projects[3].img}
                    alt={projects[3].alt}
                />
                <Project
                    name={projects[4].name}
                    description={projects[4].description}
                    link={projects[4].link}
                    repo={projects[4].repo}
                    img={projects[4].img}
                    alt={projects[4].alt}
                />
                <Project
                    name={projects[5].name}
                    description={projects[5].description}
                    link={projects[5].link}
                    repo={projects[5].repo}
                    img={projects[5].img}
                    alt={projects[5].alt}
                />
            </div>
        </div>
    );
};
export default Portfolio;