import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ handleClick }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://learning-deck-server.vercel.app/category/')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='flex flex-col p-10 bg-white h-full'>
            {
                categories.map(category => <button onClick={() => handleClick(category.id)} key={category.id} className='btn btn-primary my-2'><Link>{category.name}</Link></button>)
            }
        </div>
    );
};

export default SideBar;