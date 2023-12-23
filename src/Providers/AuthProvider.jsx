/* eslint-disable react/prop-types */
import {
  
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../config/firebase.config";
  
  
  export const AuthContext = createContext(null);
  
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
  
   
  
    // user create
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // sing in user
  
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // user log out
  
    const userLogOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
   
  
    // observer auth state
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        
        console.log("current user", currentUser);
        setUser(currentUser);
        setLoading(false);
       
      });
      return () => {
        return unSubscribe();
      };
    }, [user?.email]);
  
    const authInfo = {
      createUser,
      signInUser,
      user,
      userLogOut,
      loading,
    };
  
    return (
      <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
    );
  };
  
  export default AuthProvider;