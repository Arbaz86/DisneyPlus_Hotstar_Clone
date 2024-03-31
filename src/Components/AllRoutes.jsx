import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";

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
      <Route
        path="/disneyplus/watch/:id"
        element={
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
