import React from 'react';
import Faq from './Faq';
import Hero from './Hero';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services/>
            <About/>
            <Faq/>
        </div>
    );
};

export default Home;