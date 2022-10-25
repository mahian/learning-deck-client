import React from 'react';
import Course from './Course';

const Courses = () => {
    return (
        <section className='bg-slate-200 py-10'>
        <h2 className='text-center font-bold text-5xl mb-10'>Our Courses</h2>
        <div className='container mx-auto grid md:grid-cols-3 gap-4'>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
        </section>
    );
};

export default Courses;