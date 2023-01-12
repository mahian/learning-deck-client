import React from 'react';
import Faq from './Faq';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import HomeCourse from './HomeCourse';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services/>
            <HomeCourse/>
            <About/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Home;