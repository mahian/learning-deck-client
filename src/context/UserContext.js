import React from 'react';
import { getAuth } from "firebase/auth";
import { createContext } from 'react';
import app from '../config/firebase.config';
import { useState } from 'react';


export const authContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, serUser] = useState(null)
    const authInfo = {user}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;