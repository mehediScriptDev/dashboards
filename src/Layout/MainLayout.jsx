import React from 'react';
import Nav from '../Components/Header/Nav';
import Hero from '../Pages/Hero';
import Statistics from '../Pages/Statistics';

const MainLayout = () => {
    return (
        <div>
            
            <Hero/>
            <Statistics/>
        </div>
    );
};

export default MainLayout;