import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Checkout from "../Components/Checkout/Checkout";
import Bookings from "../Components/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),  
      },
      {
        path: "/services/:id",
       
        element:  <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-sepia-two.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
