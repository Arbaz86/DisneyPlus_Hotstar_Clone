import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};
