import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../utilitys/SectionTitle';

const About = () => {
    return (
        <section className='py-[80px]'>
            <div className='container mx-auto px-3'>
                <SectionTitle name='About' />
                <div className='md:flex items-center'>
                    <div className='md:w-1/2 flex justify-center'>
                        <img src="assets/vector_1.png" alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-primary text-2xl'>Welcome to</p>
                        <h2 className='text-5xl font-bold'>Learning deck</h2>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error suscipit minima illo asperiores rerum nam ad quas voluptatem dicta deserunt at voluptas, assumenda, dolor aspernatur, magni consequatur quae quaerat! <br /> consectetur adipisicing elit. Saepe error suscipit minima illo asperiores rerum nam ad quas voluptatem dicta deserunt at voluptas, assumenda, dolor aspernatur, magni consequatur quae quaerat!</p>

                        <button className='btn btn-primary mt-5'><Link to='courses'>Learn More</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;