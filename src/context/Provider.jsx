import React from "react";
import { AuthContext } from "./AuthContext";

//Nav

const Nav = [
  {
    id: 1,
    title: "inicio",
    to: "/",
  },
  {
    id: 2,
    title: "carta",
    to: "/",
  },
  {
    id: 3,
    title: "originals",
    to: "/",
  },
  {
    id: 4,
    title: "novedades",
    to: "/",
  },
  {
    id: 5,
    title: "my burger king",
    to: "/",
  },
];
const navExtra = [
  { id: 1, title: "MCLAREN FORMULA 1 TEAM" },
  { id: 2, title: "RESTAURANTE" },
  { id: 3, title: "VEGETARIANO" },
  { id: 4, title: "KING CHICKEN" },
  { id: 5, title: "BK PARA NIÑOS" },
  { id: 6, title: "CATERING" },
  { id: 7, title: "CONTACTOS" },
  { id: 8, title: "PLAN DE SOSTENIBILIDAD" },
  { id: 9, title: "TRABAJA CON NOSOTROS" },
];

// Fin del nav

export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ Nav, navExtra }}>
      {children}
    </AuthContext.Provider>
  );
};
