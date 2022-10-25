import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext } from 'react';
import app from '../config/firebase.config';
import { useState } from 'react';


export const authContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    const [user, serUser] = useState(null);

    // authentication functions
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=> {
        signInWithPopup(auth, googleProvider);
    }


    // change auth state
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            serUser(currentUser);
        })
    }, []);
    const authInfo = { user, createUser, signInWithGoogle };
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;