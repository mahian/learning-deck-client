import { ClockIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCourse.css';

const HomeCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(`https://learning-deck-server.vercel.app/category/0`)
            const json = await response.json();
            setCourses(json);
        }
        fetchCourses();
    }, [])
    const limitCourses = courses.splice(0, 4);
    return (
        <div class="text-gray-900 font-sans py-20 dark:bg-gray-800">
            <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4 md:mx-0">
                    {limitCourses.map(course => <Link to={`courses/course-detail/${course.id}`} class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="relative pb-48 overflow-hidden">
                                <img class="absolute inset-0 h-full w-full object-cover" src={course.image} alt="" />
                            </div>
                            <div class="p-4">
                                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"><ClockIcon className='w-4 mr-2 inline-block' /> {course.duration} D</span>
                                <h2 class="mt-2 mb-2  font-bold">{course.title}</h2>
                                <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <div class="mt-3 flex items-center">
                                    <span class="text-sm font-semibold">price: </span>&nbsp;<span class="font-bold text-xl">{course.price}</span>&nbsp;<span class="text-sm font-semibold">$</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                    )}

                </div>
            </div>
        </div>
    );
};

export default HomeCourse;