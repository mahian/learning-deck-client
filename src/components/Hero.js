import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='py-5 md:py-[80px]'>
            <div>
                <div className="dark:bg-sky-400">
                    <div className="container flex flex-col items-center px-4 mx-auto text-center lg:pb-56 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Get your best career by practicing with learning deck.</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Outsourcing eLearning development is a wise decision as developing eLearning courses in-house can be complicated and time-consuming. Unsure how to go about it? Wondering what to outsource? Read on to find out. eLearning Design eLearning Outsourcing</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to="courses"><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-gray-50">Get started</button></Link>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded bg-gray-800 text-gray-50">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="assets/online-tut.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Hero;