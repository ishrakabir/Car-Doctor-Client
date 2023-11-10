import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Access user and loading state from the AuthContext
  const { user, loading } = useContext(AuthContext);

  // Get the current location using useLocation hook
  const location = useLocation();
  console.log("PrivateLocation===>", location);

  // If authentication information is still loading, display a progress bar
  if (loading) {
    return <progress className="progress w-full "></progress>;
  }

  // If user is authenticated, render the children components
  if (user?.email) {
   
    // If the user is authenticated and trying to access any other page, render the children components
    return children;
  }

  // If the user is not authenticated, redirect them to the login page
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
