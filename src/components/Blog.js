import React from 'react';
import SectionTitle from '../utilitys/SectionTitle';

const blogs = [
    {
        id: 1,
        title: 'what is cors?',
        content: 'Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources.'
    },
    {
        id: 2,
        title: 'Why are you using firebase? What other options do you have to implement authentication?',
        content: 'Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together, Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.'
    },
    {
        id: 3,
        title: 'How does the private route work?',
        content: 'The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.'
    },
    {
        id: 4,
        title: 'What is Node? How does Node work?',
        content: 'Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser, It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.'
    }
]

const Blog = () => {
    return (
        <section className='py-10 container mx-auto px-3'>
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