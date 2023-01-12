import React from 'react';

const About = () => {
    return (
        <section className='py-[80px] dark:bg-gray-800 dark:text-white'>
            <div className='container mx-auto px-3'>
                <div className='md:flex items-center'>
                    <div className='md:w-1/2 flex justify-center'>
                        <img className='w-full m-20' src="assets/vector_1.png" alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-primary text-2xl'>Welcome to</p>
                        <h2 className='text-5xl font-bold'>Learning deck</h2>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error suscipit minima illo asperiores rerum nam ad quas voluptatem dicta deserunt at voluptas, assumenda, dolor aspernatur, magni consequatur quae quaerat! <br /> consectetur adipisicing elit. Saepe error suscipit minima illo asperiores rerum nam ad quas voluptatem dicta deserunt at voluptas, assumenda, dolor aspernatur, magni consequatur quae quaerat!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;