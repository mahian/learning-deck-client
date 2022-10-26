import React from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';

const Course = ({course}) => {
    console.log(course);
    const {title, image, price, duration} = course;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div><img className='h-60 w-full object-cover' src={image} alt="Shoes" /></div>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className='flex justify-between'>
                    <span className='font-bold text-gray-600'>price : {price}TK</span>
                    <span className='flex whitespace-nowrap border border-primary p-1 rounded-xl text-primary'> <ClockIcon className='w-4 mr-2'/> {duration} h</span>
                </div>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default Course;