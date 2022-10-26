import React from 'react';

const Hero = () => {
    return (
        <section className='bg-slate-100'>
            <div className='container mx-auto'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="assets/learning.jpg" className="max-w-sm rounded-lg" />
                        <div>
                            <h1 className="text-5xl font-bold">Get your best career by practicing with learning deck.</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;