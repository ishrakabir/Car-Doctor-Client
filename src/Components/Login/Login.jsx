import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

// Login component responsible for handling user login
const Login = () => {
  // Access signIn function from AuthContext
  const { signIn,user } = useContext(AuthContext);

  // Get the current location using useLocation hook
  const location = useLocation();

  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Extract the 'from' path from the location state, defaulting to "/" if not present
  const from = location.state?.from?.pathname || "/";
  console.log("from", from);
 useEffect(() => {
    // Use useEffect to handle the navigation after the component has rendered
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  // Event handler for login form submission
  const handleLogin = (event) => {
    event.preventDefault();

    // Access the form and extract email and password
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Call the signIn function from AuthContext
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(user);

        // Send a POST request to a JWT endpoint with the logged user information
        fetch("http://localhost:5000/jwt", {
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
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // JSX structure for the login form and UI
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left mr-20">
          <img src="/assets/images/login/login.svg"></img>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            {/* Login form */}
            <form onSubmit={handleLogin}>
              {/* Email input field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              {/* Password input field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                {/* Forgot password link */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* Submit button */}
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline btn-error text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              {/* Sign-up link */}
              <div className="mt-5">
                New to Car Doctors ?{" "}
                <Link to={"/signup"} className="text-red-400">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Login component as the default export
export default Login;
