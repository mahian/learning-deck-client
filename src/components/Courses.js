import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../utilitys/SectionTitle';
import Course from './Course';
import SideBar from './SideBar';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [id, setId] = useState(0);
    useEffect(()=>{
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
            <div className='container mx-auto py-10'>
                <SectionTitle name='Our courses'/>
                <div className='flex'>
                    <div className='w-96 mr-3'><SideBar handleClick={handleClick}/></div>
                    <div className='container mx-auto grid md:grid-cols-2 gap-4'>
                        {
                            courses.map(course => <Course key={course.id} course={course}/>)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Courses;