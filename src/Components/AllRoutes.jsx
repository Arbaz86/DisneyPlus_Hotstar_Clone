import React from "react";
import { Routes, Route } from "react-router-dom";
import { Details } from "./Details";
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
