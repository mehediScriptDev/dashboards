import React from 'react';
import Nav from '../Components/Header/Nav';
import Hero from '../Pages/Hero';
import Statistics from '../Pages/Statistics';
import Industry from '../Pages/Industry';
import Gallery from '../Pages/Gallery';
import BlogResearch from '../Pages/BlogResearch';

const MainLayout = () => {
    return (
        <div>
            
            <Hero/>
            <Statistics/>
            <Industry/>
            <Gallery/>
            <BlogResearch/>
        </div>
    );
};

export default MainLayout;