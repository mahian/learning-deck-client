import React from 'react';

const SectionTitle = ({name}) => {
    return (
        <div className='mb-10'>
            <h2 className='text-primary mb-4 block text-base font-semibold'>{name}</h2>
        </div>
    );
};

export default SectionTitle;