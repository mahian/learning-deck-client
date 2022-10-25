import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const PrivetRoute = ({children}) => {
    const {user} = useContext(authContext);
    if(!user){
        return (
            <Navigate to="/login" />
        )
    }
    return children;
};

export default PrivetRoute;