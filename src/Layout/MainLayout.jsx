import React from 'react';
import Nav from '../Components/Header/Nav';
import Hero from '../Pages/Hero';
import Statistics from '../Pages/Statistics';
import Industry from '../Pages/Industry';

const MainLayout = () => {
    return (
        <div>
            
            <Hero/>
            <Statistics/>
            <Industry/>
        </div>
    );
};

export default MainLayout;