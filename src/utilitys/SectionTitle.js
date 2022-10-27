import React from 'react';

const SectionTitle = ({name}) => {
    return (
        <div className='flex flex-col items-center mb-10'>
            <h2 className='font-bold text-4xl'>{name}</h2>
            <div className='h-[2px] w-32 bg-primary mt-5'></div>
        </div>
    );
};

export default SectionTitle;