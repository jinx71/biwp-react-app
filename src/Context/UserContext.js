import React, { createContext, useEffect, useState } from 'react';

import { app } from '../Firebase/Firebase.init';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [serviceLength, setServiceLength] = useState(0)
    const [serverStatus, setServerStatus] = useState(false);
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signout = () => {
        console.log("user")
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, signin, createUser, loading, signout, handleGoogleSignIn, updateUserProfile, serviceLength, setServiceLength, serverStatus, setServerStatus }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;