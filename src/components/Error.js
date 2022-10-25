import React from 'react';

const Error = () => {
    return (
        <div className='container mx-auto flex flex-col items-center h-screen justify-center'>
            <h1 className='text-9xl font-bold'>404</h1>
            <p className='text-xl text-red-500'>Sorry, the page you are looking for does not exist</p>
        </div>
    );
};

export default Error;