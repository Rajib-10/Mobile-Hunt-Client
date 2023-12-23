/* eslint-disable react/prop-types */


import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";




const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <h1>Loading......</h1>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRouter;