import { Link } from "react-router-dom";
import logo from '/assets/logo.svg'
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
          localStorage.removeItem('access-token');
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  // Determine whether the user is authenticated or not
  const isAuthenticated = user?.email;
  console.log(isAuthenticated);
  // If the authentication information is still loading, don't render anything
  // if (loading) {
  //   return null;
  // }

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      { !isAuthenticated && loading ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : 
        isAuthenticated && !loading ? (
        <>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-28 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns={logo}
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl h-full ">
            <img src={logo}></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="btn btn-outline btn-error">Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
