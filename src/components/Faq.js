import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import SectionTitle from '../utilitys/SectionTitle';

const faqData = [
    {
        id: 1,
        question: 'What is FutureSkills Prime?',
        answer: 'A skilling ecosystem focused on emerging technologies, powered by a partnership between the Ministry of Electronics and Information Technology, the Government of India, NASSCOM, and the IT industry. It seeks to propel India to become a global hub of talent in emerging technologies. FutureSkills Prime is one of the lighthouse schemes under the Government’s Trillion Dollar Digital Economy initiative.'
    },
    {
        id: 2,
        question: 'How do I select a course?',
        answer: ' Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.'
    },
    {
        id: 3,
        question: 'I am a high school student, can I join?',
        answer: 'Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.'
    },
    {
        id: 4,
        question: 'Can I take more than one course at a time?',
        answer: 'If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.'
    },
    {
        id: 5,
        question: 'What should I do if I need to start the course late?',
        answer: 'It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.'
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
        <div className='container mx-auto relative py-[80px] px-3'>
            <SectionTitle name='faq question'/>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                <div className='md:w-6/12 my-5'>
                    {faqData.map(faq => <FaqElement faq={faq} />)}
                </div>
                <div className='flex justify-center md:w-6/12'>
                    <img className='md:max-w-sm' src="assets/faq.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;