import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import Course from './Course';
import SideBar from './SideBar';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(`https://learning-deck-server.vercel.app/category/${id}`)
            const json = await response.json();
            setLoading(false);
            setCourses(json);
        }
        fetchCourses();
    }, [id]);
    if (loading) {
        return <div className='flex items-center justify-center'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }
    const handleClick = (id) => {
        setId(id);
    }
    return (
        <section className='bg-slate-300'>
            <div className='md:flex md:h-screen'>
                <div className='md:w-96 mr-3'><SideBar handleClick={handleClick} /></div>
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