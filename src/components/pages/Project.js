/*
    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React from 'react';
import themeColor from '../../styles/themeColor'

const iconGH = {
    path: "img/github/iconBlack.png",
    size: "30"
}

const styles = {
    project: `p-8 col-span-4 border-5 bg-[${themeColor.secondary}] border-[${themeColor.secondary}] rounded-lg`,
    projectName:`m-0 p-0 text-[${themeColor.main}] text-2xl font-semibold border-5 border-[${themeColor.secondary}]`,
    projectBlurb:`grid grid-cols-2`,
    iconGH: `opacity-25`,
    //description: `col-span-2 font-bold text-[${themeColor.accent}]`

}


const Project = ({name, description, link, repo, img, alt}) =>{
    return (
        <div class={styles.project}>
            <img src={img} alt={alt}/>
            <div class={styles.projectBlurb}>
                <a
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    class={styles.projectName}
                >
                    <h3>
                        {name}
                    </h3>
                </a>
                <a 
                    href={repo}
                    rel="noreferrer"
                    target="_blank"
                    width={iconGH.size}
                    styles="flex justify-center"
                >
                    <img
                        src={iconGH.path}
                        alt="GitHub link to repository"
                        width={iconGH.size}
                        height={iconGH.size}
                        styles={styles.iconGH}
                    />
                </a>
                <p styles={styles.description}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Project;