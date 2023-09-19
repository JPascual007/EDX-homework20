import React from 'react';
import Navigation from './Navigation';
import themeColor from '../styles/themeColor'

const name = "Jonathan Pascual";

const styles = {
    h1:`px-5 pt-5 text-5xl font-bold text-[${themeColor.accent}] bg-[${themeColor.main}]`,
};

const Header =( { pageContent, handlePageChange } ) =>{
    return (
        <div>
            <h1 class={styles.h1}>{name}</h1>
            <Navigation pageContent={pageContent} handlePageChange={handlePageChange}/>
        </div>
    );
};

export default Header;