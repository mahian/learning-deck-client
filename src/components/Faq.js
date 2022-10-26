import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import SectionTitle from '../utilitys/SectionTitle';

const faqData = [
    {
        id: 1,
        question: 'What is the best way to learn JavaScript?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam unde accusamus laudantium animi enim a ducimus placeat necessitatibus culpa, architecto delectus officia totam tenetur reprehenderit voluptas ratione fugit velit!'
    },
    {
        id: 2,
        question: 'What is the best way to learn JavaScript?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam unde accusamus laudantium animi enim a ducimus placeat necessitatibus culpa, architecto delectus officia totam tenetur reprehenderit voluptas ratione fugit velit!'
    },
    {
        id: 3,
        question: 'What is the best way to learn JavaScript?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam unde accusamus laudantium animi enim a ducimus placeat necessitatibus culpa, architecto delectus officia totam tenetur reprehenderit voluptas ratione fugit velit!'
    }
]

const FaqElement = ({ faq }) => {
    const [open, setOpen] = useState(false);
    console.log(faq);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className='border rounded-lg overflow-hidden my-5'>
            <div onClick={handleClick} className='flex justify-between items-center bg-primary text-white p-5 relative hover:opacity-90 transition cursor-pointer'>
                <h2 className='text-2xl font-bold'>{faq.question}</h2>
                <ChevronDownIcon className={`w-7 transition-all ${!open ? '' : 'rotate-180'}`} />
            </div>
            <div className={`bg-slate-100 transition-all ${!open ? 'max-h-0' : 'max-h-96'} `}>
                <p className='p-5'>{faq.answer}</p>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <div className='container mx-auto relative py-10'>
            <SectionTitle name='faq question'/>
            <div className='grid md:grid-cols-2'>
                <div>
                    {faqData.map(faq => <FaqElement faq={faq} />)}
                </div>
                <div>
                    <img src="assets/learning-2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;