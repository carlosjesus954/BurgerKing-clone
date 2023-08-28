import React, { useState } from "react";
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
  {
    id: 1,
    title: "MCLAREN FORMULA 1 TEAM",
    href: "https://www.burgerking.es/mclaren",
  },
  { id: 2, title: "RESTAURANTE", href: "https://www.burgerking.es/hiring" },
  {
    id: 3,
    title: "VEGETARIANO",
    href: "https://www.burgerking.es/vegetariano",
  },
  {
    id: 4,
    title: "KING CHICKEN",
    href: "https://www.burgerking.es/king-chicken",
  },
  {
    id: 5,
    title: "BK PARA NIÑOS",
    href: "https://www.burgerking.es/for-children",
  },
  { id: 6, title: "CATERING", href: "https://www.burgerking.es/catering" },
  { id: 7, title: "CONTACTOS", href: "https://www.burgerking.es/contacts" },
  {
    id: 8,
    title: "PLAN DE SOSTENIBILIDAD",
    href: "https://www.burgerking.es/sustainability-plan",
  },
  {
    id: 9,
    title: "TRABAJA CON NOSOTROS",
    href: "https://www.burgerking.es/work-with-us",
  },
];

// Fin del nav

// slither

const slither = [
  {
    id: 0,
    img: "../../public/assets/FEATURED_ORIGINAL_CARNE_ANGUS_MENU.png",
    title: "Menú Originals - Angus Grill",
    colorTitle: "#F5EBDC",
    btn: "pide ahora",
    backgroundBtn: "#F5EBDC",
    background: "#502314",
    colorLetter: "#502314",
    to: "pedir",
  },
  {
    id: 1,
    img: "../../public/assets/FEATURED_KING_AROS.png",
    title: "Cubo King Aros",
    colorTitle: "#F5EBDC",
    btn: "pide ahora",
    backgroundBtn: "#F5EBDC",
    background: "#D62300",
    colorLetter: "#D62300",
    to: "pedir",
  },
  {
    id: 2,
    img: "../../public/assets/FEATURED_KING_JR.png",
    title: "King Jr",
    colorTitle: "#502314",
    btn: "pide ahora",
    backgroundBtn: "#502314",
    background: "#FFAA00",
    colorLetter: "#FFAA00",
    to: "pedir",
  },
];

//carrusel home

const carrusel = [
  {
    id: 0,
    title: "somos parrilleros desde 1954",
    parraf:
      "Sabemos que nuestras hamburguesas a la parrilla te hacen tilín. Si miras en su interior, descubrirás que su carne es 100% vacuno, sin conservantes ni aditivos, provenientes de la Peninsula Ibérica",
  },
  {
    id: 1,
    title: "¿y también unos frescos!",
    parraf:
      "Tanto como nuestros ingredientes, cortados dia a dia en nuestras cocinas.",
  },
  {
    id: 2,
    title: "trabajamos con los mejores",
    parraf:
      "Trabajamos con los proveedores que nos proporcionan las mejores materias primas para conseguir un producto final de primera calidad. bimbo y dulcesol nos proporncionan los mejores panes. Kerner nos acerca sus mas frescas hortalizas y verduras. En nuestras cocinas sólo utilizamos aceite de girasol.",
  },
  {
    id: 3,
    title: "calidad de excelencia",
    parraf:
      "La misma que nos hace reconocibles en todo el mmundo como los verdaderos Kings! Por nuestras recetas que te encantan, la elección de los mejores ingredientes y hasta por la manera en la que recibimos a quienes nos visitan cada día en nuestros restaurantes.",
  },
];
const carruselBtns = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
const gridImgs = [
  {
    id: 0,
    img: "../../public/assets/0.jpg",
  },
  {
    id: 1,
    img: "../../public/assets/1.jpg",
  },
  {
    id: 2,
    img: "../../public/assets/2.jpg",
  },
  {
    id: 3,
    img: "../../public/assets/3.jpg",
  },
  {
    id: 4,
    img: "../../public/assets/4.jpg",
  },
  {
    id: 5,
    img: "../../public/assets/5.jpg",
  },
  {
    id: 6,
    img: "../../public/assets/6.jpg",
  },
  {
    id: 7,
    img: "../../public/assets/7.jpg",
  },
];
const footer = [
  {
    id: 0,
    title: "preguntas frecuentes",
    enlace: "https://www.burgerking.es/faqs-menu",
    border: true,
  },
  {
    id: 1,
    title: "opiniones y sugerencias",
    enlace: "https://www.burgerking.es/contacts",
    border: true,
  },
  {
    id: 2,
    title: "aviso legal",
    enlace: "https://www.burgerking.es/privacy/legal-warning",
    border: true,
  },
  {
    id: 3,
    title: "condiciones generales",
    enlace: "https://www.burgerking.es/privacy/corp-policies",
    border: true,
  },
  {
    id: 4,
    title: "políticas de privacidad",
    enlace: "https://www.burgerking.es/privacy",
    border: true,
  },
  {
    id: 5,
    title: "configuración cookies",
    enlace: "",
    border: false,
  },
];
const footerProductos = [
  {
    id: 0,
    title: "Angus",
    to: "",
  },
  {
    id: 1,
    title: "Menú Parrilla",
    to: "",
  },
  {
    id: 2,
    title: "Angus",
    to: "",
  },
  {
    id: 3,
    title: "Menú pollo",
    to: "",
  },
  {
    id: 4,
    title: "King Ahorro",
    to: "",
  },
  {
    id: 5,
    title: "Entrantes y snacks",
    to: "",
  },
  {
    id: 6,
    title: "100% Vegetariano",
    to: "",
  },
  {
    id: 7,
    title: "Hamburguesas",
    to: "",
  },
  {
    id: 8,
    title: "Postres",
    to: "",
  },
  {
    id: 9,
    title: "Sin gluten",
    to: "",
  },
  {
    id: 10,
    title: "Bebidas y cafés",
    to: "",
  },
  {
    id: 11,
    title: "DOGPPER",
    to: "",
  },
];
export const Provider = ({ children }) => {
  const [menu, setmenu] = useState(false);
  const [linkExtra, setLinkExtra] = useState(false);
  const openMenu = () => {
    setmenu(!menu);
    console.log(menu);
  };
  const openLink = () => {
    setLinkExtra(!linkExtra);
    console.log(linkExtra);
  };
  return (
    <AuthContext.Provider
      value={{
        Nav,
        navExtra,
        menu,
        openMenu,
        linkExtra,
        openLink,
        slither,
        carrusel,
        carruselBtns,
        gridImgs,
        footer,
        footerProductos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
