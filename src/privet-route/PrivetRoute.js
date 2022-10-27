import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const PrivetRoute = ({children}) => {
    const {user} = useContext(authContext);
    const location = useLocation()
    if(!user){
        return (
            <Navigate to="/login" state={{from: location}} replace/>
        )
    }
    return children;
};

export default PrivetRoute;