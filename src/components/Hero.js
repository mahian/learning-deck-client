import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='py-[80px]'>
            <div className='container mx-auto'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='lg:w-3/6'>
                            <img src="assets/online-tut.jpg" className="rounded-lg" alt='' />
                        </div>
                        <div className='lg:w-3/6'>
                            <h1 className="text-5xl font-bold mt-5">Get your best career by practicing with learning deck.</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary"><Link to='courses'>Get Started</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;