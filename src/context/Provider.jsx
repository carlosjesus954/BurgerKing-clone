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
    to: "carta",
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
const footerCalidad = [
  {
    id: 0,
    title: "lista de alérgenos",
    href: "https://static.burgerkingencasa.es/bkhomewebsite/es/allergens_es.pdf",
  },
  {
    id: 1,
    title: "lista de nutricionales",
    href: "https://static.burgerkingencasa.es/bkhomewebsite/es/nutrition_es.pdf",
  },
];
const footerIdentificate = [
  {
    id: 0,
    title: "regístrese",
    to: "",
  },
];
const footerSobreNosotros = [
  {
    id: 0,
    title: "restaurante",
    href: "https://www.burgerking.es/hiring",
  },
  {
    id: 1,
    title: "autoking",
    href: "https://www.burgerking.es/auto-king",
  },
  {
    id: 2,
    title: "restaurantes para recoger",
    href: "https://static.burgerkingencasa.es/bkhomewebsite/es/Restaurantes_PickUP.pdf",
  },
];
const footerMybk = [
  {
    id: 0,
    title: "condiciones legales",
    href: "https://static.burgerkingencasa.es/bkhomewebsite/es/myburgerking_legal_es.pdf",
  },
  {
    id: 1,
    title: "restaurantes adheridos",
    href: "https://static.burgerkingencasa.es/bkhomewebsite/es/myburgerking_restaurants_es.pdf",
  },
];

// Carta

const cartaPrincipal = [
  {
    id: 0,
    title: "angus",
    img: "../../public/assets/carta/1681196671003_originals_carnivora_menu_300_pet.png",
    to: "angus",
  },
  {
    id: 1,
    title: "novedades de verano",
    img: "../../public/assets/carta/1693289073522_MENU_SMOKEY_2C_SELLO_NUEVO_PET_ESP.png",
    to: "novedades",
  },
  {
    id: 2,
    title: "2 para 2",
    img: "../../public/assets/carta/1683887185749_2_para_2_moto_hd.png",
    to: "2para2",
  },
  {
    id: 3,
    title: "menú parrilla",
    img: "../../public/assets/carta/1675159487429_Homeria_MENU_PET_WHOPPER_600x411.png",
    to: "menuparrilla",
  },
  {
    id: 4,
    title: "menú pollo",
    img: "../../public/assets/carta/1693295861731_CBK_MENU-PET-1P.png",
    to: "menupollo",
  },
  {
    id: 5,
    title: "king jr.meal",
    img: "../../public/assets/carta/1687335196414_King_Jr-hd-esp-categ.png",
    to: "king",
  },
  {
    id: 6,
    title: "promociones",
    img: "../../public/assets/carta/1661412360853_img-cat-promo-hd.png",
    to: "promociones",
  },
  {
    id: 7,
    title: "king ahorro",
    img: "../../public/assets/carta/1678341824344_Bodegon.png",
    to: "kingAhorro",
  },
  {
    id: 8,
    title: "entrantes y snacks",
    img: "../../public/assets/carta/1675428884606_bodegones-app-600x411_cubos-snacks.png",
    to: "kingAhorro",
  },
  {
    id: 9,
    title: "100% vegetariano",
    img: "../../public/assets/carta/1648716533893_whopper-Vegetal_new.png",
    to: "100vegetariano",
  },
  {
    id: 9,
    title: "100% vegetariano",
    img: "../../public/assets/carta/1648716533893_whopper-Vegetal_new.png",
    to: "100vegetariano",
  },
  {
    id: 10,
    title: "hamburguesas",
    img: "../../public/assets/carta/1693296214128_CBK-SS-2P.png",
    to: "hamburguesas",
  },
  {
    id: 11,
    title: "postres",
    img: "../../public/assets/carta/1687335561808_bodegon-milka_esp.png",
    to: "postres",
  },
  {
    id: 12,
    title: "sin gluten",
    img: "../../public/assets/carta/1682054801763_whoppe-sin-gluten-new.png",
    to: "singluten",
  },
  {
    id: 13,
    title: "ensaladas",
    img: "../../public/assets/carta/1660727676038_ENSALADA_ORIGINAL_SIN_PEPINO.png",
    to: "ensaladas",
  },
  {
    id: 14,
    title: "salsas",
    img: "../../public/assets/carta/1635332074207_sauces.png",
    to: "salsas",
  },

  {
    id: 15,
    title: "bebidas y cafés",
    img: "../../public/assets/carta/1626330906435_img-category-bebidas@2x.png",
    to: "bebidas",
  },
  {
    id: 16,
    title: "dogpper",
    img: "../../public/assets/carta/1650275448609_Dogpper.png",
    to: "dogper",
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
        footerCalidad,
        footerIdentificate,
        footerSobreNosotros,
        footerMybk,
        cartaPrincipal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
