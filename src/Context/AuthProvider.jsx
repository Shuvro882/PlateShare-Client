import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   
   const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInWithEmailAndPasswordFunc = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)

   };

   const signinWithEmailFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
   };

   const signOutUserFunc = () =>{
    setLoading(true);
    return signOut(auth);
   };

   const updateProfileFunc = (displayName, photoURL) =>{
    setLoading(true);
    return updateProfile(auth.currentUser,{
        displayName,
        photoURL
    })
   }



   const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signinWithEmailFunc,
    signOutUserFunc,
    updateProfileFunc,
    loading,
    setLoading,
   };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
    console.log(currUser);
    setUser(currUser);
    setLoading(false);
   })
     return () => {
        unsubscribe();
     }
   }, [])
    



    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;