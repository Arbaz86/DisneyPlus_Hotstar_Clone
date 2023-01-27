import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/disneyplus" element={<Login />} />
    </Routes>
  );
};
