import React from 'react';
import SectionTitle from '../utilitys/SectionTitle';

const blogs = [
    {
        id: 1,
        title: 'what is cors?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 2,
        title: 'Why are you using firebase? What other options do you have to implement authentication?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 3,
        title: 'How does the private route work?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    },
    {
        id: 4,
        title: 'What is Node? How does Node work?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus'
    }
]

const Blog = () => {
    return (
        <section className='py-10 container mx-auto'>
        <SectionTitle name='Blog'/>
            {
                blogs.map(blog => <div key={blog.id} className='bg-slate-100 my-4 p-5 border-t'>
                    <h2 className='text-2xl font-bold mb-4'>{blog.title}</h2>
                    <p className='text-xl'>{blog.content}</p>
                </div>)
            }
        </section>
    );
};

export default Blog;