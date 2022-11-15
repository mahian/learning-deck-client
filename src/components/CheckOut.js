import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const CheckOut = () => {
    const { title, duration, image } = useLoaderData();
    const {user} = useContext(authContext);
    return (
        <section className='bg-gray-200 py-[80px]'>
            <div className='container mx-auto md:h-96 flex items-end px-3'>
                <div className='bg-white flex p-5 items-center justify-between rounded-lg m-auto md:max-w-[650px] flex-wrap'>
                    <img className='w-[100px] rounded-lg mr-3' src={image} alt="" />
                    <div>
                        <h2 className='font-bold text-1xl'>{title}</h2>
                        <div>
                            <p>student : 117</p>
                            <p>duration : {duration}D</p>
                            <p>email : {user.email}</p>
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <button onClick={()=> alert('purches successfull')} className='bg-green-500 font-bold text-white px-5 py-1 rounded-lg mr-3'>confirm</button>
                        <Link to='../courses'><button className='bg-red-500 font-bold text-white px-5 py-1 rounded-lg'>cancel</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;