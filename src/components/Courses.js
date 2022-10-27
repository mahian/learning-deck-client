import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from './Course';
import SideBar from './SideBar';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [id, setId] = useState(0);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(`https://learning-deck-server.vercel.app/category/${id}`)
            const json = await response.json();
            setCourses(json);
        }
        fetchCourses();
    }, [id])
    const handleClick = (id) => {
        setId(id);
    }
    return (
        <section className='bg-slate-300'>
            <div className='flex h-screen'>
                <div className='w-96 mr-3'><SideBar handleClick={handleClick} /></div>
                <div className='overflow-y-scroll no-scrollbar'>
                    <div className='grid md:grid-cols-2 gap-10 p-10'>
                        {
                            courses.map(course => <Course key={course.id} course={course} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;