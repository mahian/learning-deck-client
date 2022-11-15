import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CheckCircleIcon, DocumentIcon } from '@heroicons/react/24/solid';
import Pdf from 'react-to-pdf'

const CourseDetail = () => {
    const CourseDetail = useLoaderData();
    const { id, title, description, image, duration } = CourseDetail;
    const ref = React.createRef();

    return (
        <div ref={ref}>
            <div className='relative flex justify-center items-center'>
                <img className='w-full h-96 object-cover' src={image} alt="tut" />
                <div className='bg-black absolute top-0 w-full h-full opacity-70'>
                </div>
                <h2 className='text-6xl text-center mx-3 font-bold absolute text-white'>{title}</h2>
            </div>
            <div className='container mx-auto my-[80px] px-3'>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='bg-gray-100 p-5 font-bold text-green-500 w-full'>duration : {duration}D</div>
                    <div className='bg-gray-100 p-5 font-bold text-red-500 w-full'>total student : 117</div>
                    <div className='bg-gray-100 p-5 font-bold text-blue-400 w-full'>reating : 4.5</div>
                </div>
                <p className='md:w-6/12 mt-5'>{description}</p>
                <div className='mt-10'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='btn btn-outline btn-success font-bold mr-5'>get pdf <DocumentIcon className='w-4 ml-2' /></button>}
                    </Pdf>

                    <Link to={`../courses/checkout/${id}`}><button className="btn btn-outline btn-error font-bold">checkout <CheckCircleIcon className='w-4 ml-2' /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;