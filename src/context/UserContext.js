import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../config/firebase.config';
import { useState } from 'react';


export const authContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const UserContext = ({ children }) => {
    const [user, serUser] = useState(null);

    // authentication functions
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=> {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = ()=> {
        return signInWithPopup(auth, githubProvider);
    }

    const signInWithFacebook = ()=> {
        return signInWithPopup(auth, facebookProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }


    // change auth state
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            serUser(currentUser);
        })
    }, []);
    const authInfo = { user, createUser, signInWithGoogle, logOut, loginWithEmail, signInWithGithub, signInWithFacebook };
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;