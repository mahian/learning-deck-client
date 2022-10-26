import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/UserContext';
import ProviderSignIn from './ProviderSignIn';

const Register = () => {
    const { createUser } = useContext(authContext);
    const navigate = useNavigate()
    console.log(navigate);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(res => {
            form.reset()
            navigate('/');
            alert('user created successfully')
        })
        .catch(err => alert(err.message));
    }
    return (
        <section className='py-10'>
            <div className="container mx-auto">
                <div className="md:w-[450px] mx-auto">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">full name</span>
                                </label>
                                <input type="text" name='name' placeholder="full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='name' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label mt-2">
                                    <input type="checkbox"/> <p className='text-gray-500 ml-2'>accept terms and condition</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sigh up</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='h-[1px] w-full bg-gray-300'></div>
                                <p className='mx-2 text-gray-300 whitespace-nowrap'>or sign up with</p>
                                <div className='h-[1px] w-full bg-gray-300'></div>
                            </div>
                            <ProviderSignIn></ProviderSignIn>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;