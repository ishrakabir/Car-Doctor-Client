import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase.config";

// Create a context for authentication information
export const AuthContext = createContext();

// Initialize Firebase authentication
const auth = getAuth(app);

// AuthProvider component responsible for managing authentication state
const AuthProvider = ({ children }) => {
  // State to hold user information
  const [user, setUser] = useState(null);

  // State to track loading state during authentication operations
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  
  // Function to create a new user account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in an existing user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Function to log out the current user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleSign = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
  // useEffect to listen for changes in authentication state
  useEffect(() => {
    // Subscribe to onAuthStateChanged event
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update user state when authentication state changes
      setUser(currentUser);
      console.log("currentUser", currentUser);
     
      // Set loading to false once authentication state is determined
      setLoading(false);
      if (currentUser && currentUser.email) {
          const loggedUser = {
          email: currentUser.email,
        };
        fetch("https://car-doctor-server-sepia-two.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            localStorage.setItem('access-token', data.token);
            // Navigate to the 'from' path after successful login
          
          });
      }
      else
      {
        localStorage.removeItem('access-token');
        }
    });
    

    // Unsubscribe when the component unmounts
    return () => {
      return unsubscribe();
    };
  }, []);

  // Authentication information object to be provided through the context
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSign,
    logOut,
  };

  // Provide the authentication information to the children components
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// Export the AuthProvider component as the default export
export default AuthProvider;
