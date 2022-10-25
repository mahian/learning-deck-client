import React from 'react';

const blogs = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    }
]

const Blog = () => {
    return (
        <section className='py-10 container mx-auto'>
        <h2 className='text-center font-bold text-5xl mb-10'>Our Blogs</h2>
            {
                blogs.map(blog => <div key={blog.id} className='bg-slate-100 my-4 p-5 border-t-2 border-primary'>
                    <h2 className='text-2xl font-bold mb-4'>{blog.title}</h2>
                    <p className='text-xl'>{blog.content}</p>
                </div>)
            }
        </section>
    );
};

export default Blog;