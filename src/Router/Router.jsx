import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Cart from "../components/Cart/MyCart";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/details/:id",
            element: <PrivateRouter><Details /></PrivateRouter>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },
  ]);
  

export default router;