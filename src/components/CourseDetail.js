import React from 'react';

const CourseDetail = () => {
    return (
        <div>
            <div className='relative flex justify-center items-center'>
                <img className='w-full h-96 object-cover' src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN" alt="tut" />
                <div className='bg-black absolute top-0 w-full h-full opacity-70'>
                </div>
                <h2 className='text-6xl font-bold absolute text-white'>React Full course</h2>
            </div>
            <div className='container mx-auto my-[80px]'>
                <div className='md:flex justify-between'>
                    <div className='bg-gray-100 p-5 font-bold m-5 text-green-500 w-full'>duration : 30D</div>
                    <div className='bg-gray-100 p-5 font-bold m-5 text-red-500 w-full'>total student : 117</div>
                    <div className='bg-gray-100 p-5 font-bold m-5 text-blue-400 w-full'>reating : 4.5</div>
                </div>
                <p className='md:w-6/12 mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima exercitationem molestias, natus commodi reprehenderit beatae adipisci ut, eius consequuntur voluptatibus minus id quidem necessitatibus! Temporibus, incidunt nesciunt! Qui recusandae, ex explicabo dolores magnam perspiciatis similique. Dicta, perspiciatis commodi quae excepturi quidem sit obcaecati necessitatibus ad accusantium odit fugit saepe quas veniam nisi? Officia animi reprehenderit, molestiae consequatur cupiditate voluptate quos pariatur rem ratione sed dicta in nihil non consequuntur eos!</p>
            </div>
        </div>
    );
};

export default CourseDetail;