import React from 'react';

const ProviderSignIn = () => {
    return (
        <div className='flex justify-center'>
            <button className='w-10 h-10 shadow-md p-1 rounded-lg mx-2'><img className='w-full' src="assets/google.png" alt="google" /></button>
            <button className='w-10 h-10 shadow-md p-1 rounded-lg mx-2'><img className='w-full' src="assets/facebook.png" alt="google" /></button>
            <button className='w-10 h-10 shadow-md p-1 rounded-lg mx-2'><img className='w-full' src="assets/github.png" alt="google" /></button>
        </div>
    );
};

export default ProviderSignIn;