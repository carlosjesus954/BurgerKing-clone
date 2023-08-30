import React from "react";
import { NavBar } from "../ui/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Footer } from "../pages/Footer";
import { Carta } from "../pages/Carta";
import { CartaMenu } from "../pages/CartaMenu";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carta" element={<Carta />} />
        <Route path="carta/cartaMenu" element={<CartaMenu />} />
      </Routes>
      <Footer />
    </>
  );
};
