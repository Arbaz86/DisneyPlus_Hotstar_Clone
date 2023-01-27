import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { PrivateRoutes } from "./PrivateRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/disneyplus"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
