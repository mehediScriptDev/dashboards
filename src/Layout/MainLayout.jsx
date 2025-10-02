import React from 'react';
import Nav from '../Components/Header/Nav';
import Hero from '../Pages/Hero';
import Statistics from '../Pages/Statistics';
import Industry from '../Pages/Industry';
import Gallery from '../Pages/Gallery';

const MainLayout = () => {
    return (
        <div>
            
            <Hero/>
            <Statistics/>
            <Industry/>
            <Gallery/>
        </div>
    );
};

export default MainLayout;