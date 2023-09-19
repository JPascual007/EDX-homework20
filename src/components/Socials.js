import React from 'react';
const size = 50;
const styles={
    social: "",
}
const Socials = ({link, icon, alt}) =>{
    return(
        <a 
            href={link}
            styles={styles.social}
            target="_blank"
            rel="noreferrer"
        >
            <img 
                src={icon}
                alt={alt}
                width={size}
                height={size}
                styles={styles.social}
                />
        </a>
    )
}

export default Socials;