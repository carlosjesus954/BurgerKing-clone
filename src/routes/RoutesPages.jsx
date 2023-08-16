import React from "react";
import { NavBar } from "../ui/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
