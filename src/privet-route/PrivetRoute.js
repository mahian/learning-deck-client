import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <p className='text-center'>loading...</p>
    }
    if(!user){
        return (
            <Navigate to="/login" state={{from: location}} replace/>
        )
    }
    return children;
};

export default PrivetRoute;