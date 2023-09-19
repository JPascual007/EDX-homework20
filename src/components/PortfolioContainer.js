import React, { useState } from 'react';
import Header from './Header';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from './Footer';
import themeColor from '../styles/themeColor'

const styles = {
    page: `grid grid-col-6 bg-[${themeColor.main}] `,
    pageContent:"col-start-1",
};

const PortfolioContainer = () => {
    const [pageContent, setPageContent] = useState('');
    const handlePageChange = (page) => setPageContent(page);

    const renderPage = (page) => {
        switch (page){
            case 'Portfolio': return <Portfolio />;
            case 'Resume': return <Resume />;
            case 'Contact': return <Contact />
            case 'About':
            default:
                return <About />
        };
    };

    return (
        <div class={styles.page}>
            <div class={styles.pageContent}>
                <Header 
                    pageContent={pageContent}
                    handlePageChange={handlePageChange}
                />
                <div>
                    {renderPage(pageContent)}
                </div>
                <Footer />
            </div>
        </div>
    );
};


export default PortfolioContainer;