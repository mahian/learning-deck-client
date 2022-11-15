import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/UserContext';
import { MoonIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';


const Nav = () => {
    const { user, logOut } = useContext(authContext);
    const [dark, setDark] = useState(false);
    console.log(user);
    const handleLogOut = (e) => {
        e.preventDefault()
        logOut()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    const handleTheme = () => {
        setDark(!dark);
    }
    return (
        <nav className='shadow-md sticky top-0 bg-white z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='courses'>Courses</Link></li>
                            <li><Link to='blogs'>Blog</Link></li>
                            <li><Link to='faq'>faq</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img className='h-10' src="assets/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='courses'>Courses</Link></li>
                        <li><Link to='blogs'>Blog</Link></li>
                        <li><Link to='faq'>faq</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div onClick={handleTheme} className={`w-10 h-10 p-1 rounded-full cursor-pointer mr-5 hidden md:block ${!dark ? 'bg-black text-white' : 'bg-gray-50'}`}>
                        {!dark ? 
                        <MoonIcon /> :
                        <SunIcon />
                        }
                    </div>
                    {!user ?
                        <div>
                            <Link className='mx-4' to='login'>Login</Link>
                            <Link to='register' className="btn btn-primary">sign up</Link>
                        </div> :
                        <div className='flex items-center'>
                            <p className='font-bold mr-2 hidden md:block'>{user.displayName}</p>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {!user.photoURL ? <UserCircleIcon className='h-10 w-10'/> : <img src={user.photoURL} alt="user"/>}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings</Link></li>
                                    <li><Link to='/' onClick={handleLogOut}>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;