import React from 'react';
import themeColor from '../styles/themeColor'

const styles = { 
    list: `pl-8 pt-2 grid grid-cols-4 bg-[${themeColor.accent}] border-[${themeColor.main}]`,
    listActiveItem: `text-[${themeColor.secondary}] font-bold text-center content-center bg-[${themeColor.main}] rounded-t-lg hover:transition-all`,
    listItem: `text-[${themeColor.main}] text-center border-2 border-[${themeColor.accent}] rounded-t-lg hover:border-[${themeColor.main}] active:bg-[${themeColor.main}] active:text-[${themeColor.secondary}] hover:transition-all`,
};

const Navigation = ( {pageContent, handlePageChange} ) => {
    return (
        <div>
            <ul class={styles.list}>
                <a href="#about"
                    class={ pageContent ==='About'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('About') } >
                        <li>
                            About
                        </li>
                </a>
                <a href="#portfolio"
                    class={ pageContent ==='Portfolio'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('Portfolio') } >
                        <li>
                            Portfolio
                        </li>
                </a>
                <a href="#contact"
                    class={ pageContent ==='Contact'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('Contact') } >
                        <li>
                            Contact
                        </li>
                </a>
                <a href="#resume"
                    class={ pageContent ==='Resume'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('Resume') } >
                        <li>
                            Resume
                        </li>
                </a>
            </ul>
        </div>
    );
};

export default Navigation;