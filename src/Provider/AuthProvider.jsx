import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //sign  Up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Sign In With Google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    //update Profile 
    const handleUpdateProfile = (name, photoUrl) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        });
    }
        //Sign out
        const logout = () => {
            // setLoading(true)
            return signOut(auth);
        };
    //user observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoading(false)
        })
        return () => {
            unsubscribe;
        };
    }, []);

    const authInfo = {
        user,
        signUp,
        signIn,
        googleSignIn,
        handleUpdateProfile,
        logout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;