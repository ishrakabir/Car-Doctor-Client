import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/socialLogin";

const SignUp = () => {
  const { createUser,user } = useContext(AuthContext);
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

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left mr-20">
          <img src="/assets/images/login/login.svg"></img>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline btn-error text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="mt-5">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-red-400">
                  Login
                </Link>
              </div>
            </form>
             <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
