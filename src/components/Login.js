import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../context/UserContext';
import ProviderSignIn from './ProviderSignIn';

const Login = () => {
    const { loginWithEmail } = useContext(authContext);
    const location = useLocation()
    const from = location.state?.form?.pathname || '/';
    const navigate = useNavigate()
    console.log(navigate);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email, password)
            .then(res => {
                form.reset()
                navigate(from, { replace: true });
                alert('logged in successfully')
            })
            .catch(err => alert(err.message));
    }
    return (
        <section className='py-20 min-h-screen'>
            <div className="container mx-auto">
                <div className="md:w-[600px] mx-auto">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div>
                                <h1 className="text-4xl font-bold mb-1">Login now!</h1>
                            </div>
                            <p className='text-gray-500 mb-3'>not have an account yet? <Link to="../register" className='text-primary hover:underline'>please Register</Link></p>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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

export default Login;