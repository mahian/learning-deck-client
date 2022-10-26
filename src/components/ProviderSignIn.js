import React from 'react';
import { useContext } from 'react';
import { authContext } from '../context/UserContext';

const ProviderSignIn = () => {
    const {signInWithGoogle, signInWithGithub, signInWithFacebook} = useContext(authContext);
    const handleGoogleSignIn = ()=> {
        signInWithGoogle()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    const handleGithubSignIn = ()=> {
        signInWithGithub()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    const handleFacebookSignIn = ()=> {
        signInWithFacebook()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div className='flex justify-center'>
            <button onClick={handleGoogleSignIn} className='w-10 h-10 shadow-md p-1 rounded-lg mx-2'><img className='w-full' src="assets/google.png" alt="google" /></button>
            <button onClick={handleFacebookSignIn} className='w-10 h-10 shadow-md p-1 rounded-lg mx-2'><img className='w-full' src="assets/facebook.png" alt="facebook" /></button>
            <button onClick={handleGithubSignIn} className='w-10 h-10 shadow-md p-1 rounded-lg mx-2'><img className='w-full' src="assets/github.png" alt="github" /></button>
        </div>
    );
};

export default ProviderSignIn;