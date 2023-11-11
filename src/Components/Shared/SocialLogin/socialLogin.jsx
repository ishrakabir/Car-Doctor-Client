import { useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSign, user } = useContext(AuthContext);
    const location = useLocation();

  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Extract the 'from' path from the location state, defaulting to "/" if not present
  const from = location.state?.from?.pathname || "/";
  console.log("from", from);
    useEffect(() => {
     console.log(user)
    // Use useEffect to handle the navigation after the component has rendered
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
    
    const handleGoogleSignIn = () => {
        googleSign()
            .then(result => {
            console.log(result.user)
            })
            .catch(error => {
                console.log(error);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                 <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline "> G</button>
           </div>
        </div>
    );
};

export default SocialLogin;