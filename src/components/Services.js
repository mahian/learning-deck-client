import React from 'react';
import { AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Services = () => {
    return (
        <section className='bg-slate-100 py-10'>
            <div className='container mx-auto grid md:grid-cols-3'>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <AcademicCapIcon className='w-20'/>
                    <h2 className='text-2xl font-bold'>best leader in indursty</h2>
                    <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <AcademicCapIcon className='w-20'/>
                    <h2 className='text-2xl font-bold'>best leader in indursty</h2>
                    <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <AcademicCapIcon className='w-20'/>
                    <h2 className='text-2xl font-bold'>best leader in indursty</h2>
                    <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
            </div>
        </section>
    );
};

export default Services;