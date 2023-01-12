import React from 'react';
import { AcademicCapIcon, ArrowRightIcon, ArrowTrendingUpIcon, BookOpenIcon } from '@heroicons/react/24/solid'

const Services = () => {
    return (
        <section className='bg-slate-100 py-[80px] dark:bg-gray-700'>
            <div className='container mx-auto grid md:grid-cols-3'>
                <div className='bg-white p-10 m-5 rounded-xl dark:bg-gray-800 dark:text-white'>
                    <AcademicCapIcon className='w-20 text-primary'/>
                    <h2 className='text-2xl font-bold'>best leader in indursty</h2>
                    <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl dark:bg-gray-800 dark:text-white'>
                    <ArrowTrendingUpIcon className='w-20 text-primary'/>
                    <h2 className='text-2xl font-bold'>Wardrobe Analysis</h2>
                    <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl dark:bg-gray-800 dark:text-white'>
                    <BookOpenIcon className='w-20 text-primary'/>
                    <h2 className='text-2xl font-bold'>Undergraduate Education</h2>
                    <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
            </div>
        </section>
    );
};

export default Services;