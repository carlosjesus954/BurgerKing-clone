import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useEffect } from "react";

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
    title: "menú parrilla",
    img: "../../public/assets/carta/1675159487429_Homeria_MENU_PET_WHOPPER_600x411.png",
    to: "menuparrilla",
  },
  {
    id: 3,
    title: "menú pollo",
    img: "../../public/assets/carta/1693295861731_CBK_MENU-PET-1P.png",
    to: "menupollo",
  },
  {
    id: 4,
    title: "king jr.meal",
    img: "../../public/assets/carta/1687335196414_King_Jr-hd-esp-categ.png",
    to: "king",
  },
  {
    id: 5,
    title: "promociones",
    img: "../../public/assets/carta/1661412360853_img-cat-promo-hd.png",
    to: "promociones",
  },
  {
    id: 6,
    title: "king ahorro",
    img: "../../public/assets/carta/1678341824344_Bodegon.png",
    to: "kingAhorro",
  },
  {
    id: 7,
    title: "entrantes y snacks",
    img: "../../public/assets/carta/1675428884606_bodegones-app-600x411_cubos-snacks.png",
    to: "snacks",
  },
  {
    id: 8,
    title: "100% vegetariano",
    img: "../../public/assets/carta/1648716533893_whopper-Vegetal_new.png",
    to: "100vegetariano",
  },
  {
    id: 9,
    title: "hamburguesas",
    img: "../../public/assets/carta/1693296214128_CBK-SS-2P.png",
    to: "hamburguesas",
  },
  {
    id: 10,
    title: "postres",
    img: "../../public/assets/carta/1687335561808_bodegon-milka_esp.png",
    to: "postres",
  },
  {
    id: 11,
    title: "sin gluten",
    img: "../../public/assets/carta/1682054801763_whoppe-sin-gluten-new.png",
    to: "singluten",
  },
  {
    id: 12,
    title: "ensaladas",
    img: "../../public/assets/carta/1660727676038_ENSALADA_ORIGINAL_SIN_PEPINO.png",
    to: "ensaladas",
  },
  {
    id: 13,
    title: "salsas",
    img: "../../public/assets/carta/1635332074207_sauces.png",
    to: "salsas",
  },

  {
    id: 14,
    title: "bebidas y cafés",
    img: "../../public/assets/carta/1626330906435_img-category-bebidas@2x.png",
    to: "bebidas",
  },
  {
    id: 15,
    title: "dogpper",
    img: "../../public/assets/carta/1650275448609_Dogpper.png",
    to: "dogper",
  },
];

//menus individuales

const angus = [
  {
    id: 0,
    title: "menú angus grill (2 carnes)",
    img: "../../public/assets/angus/1693829974453_angus_menu_4.png",
  },
  {
    id: 1,
    title: "menú angus grill (1 carnes)",
    img: "../../public/assets/angus/1693830020385_angus_menu_1c.png",
  },
  {
    id: 2,
    title: "angus grill (2 carnes)",
    img: "../../public/assets/angus/1693830049665_angus_SS_2c.png",
  },
  {
    id: 3,
    title: "angus grill (1 carnes)",
    img: "../../public/assets/angus/1693830062730_angus_SS_3c.png",
  },
];
const novedades = [
  {
    id: 0,
    title: "baraja de cartas",
    img: "../../public/assets/novedades/1693911108247_Cartas_Baraja_new.png",
  },
  {
    id: 1,
    title: "menú smoky steakhouse (1 carne)",
    img: "../../public/assets/novedades/1692879188212_MENU_SMOKEY_1C_SELLO_NUEVO_VASO_ESP.png",
  },
  {
    id: 2,
    title: "menú smoky steakhouse chicken",
    img: "../../public/assets/novedades/1693911040481_MENU_SMOKEY_CRISPY_SELLO_NUEVO_VASO_ESP.png",
  },
  {
    id: 3,
    title: "italian sticks",
    img: "../../public/assets/novedades/1693911207961_ITALIAN_STICKS_X8.png",
  },
  {
    id: 4,
    title: "king fusion milka choco-galleta",
    img: "../../public/assets/novedades/1687342496983_milka_choco_galleta_esp.png",
  },
  {
    id: 5,
    title: "king fusion milka oreo",
    img: "../../public/assets/novedades/1687342510791_milka_oreo_esp.png",
  },
  {
    id: 6,
    title: "king fusion milka original",
    img: "../../public/assets/novedades/1687342437778_milka_clasico_esp.png",
  },
];
const parrilla = [
  {
    id: 0,
    title: "menú smoky steakhouse (1 carne)",
    img: "../../public/assets/parrilla/1661168250505_Menu-Steakhouse-vaso-new.png",
    to: "menuSteak1",
  },
  {
    id: 1,
    title: "menú brutal big bang (2 carnes)",
    img: "../../public/assets/parrilla/1690802631972_Brutal_Big_Bang_menu_2C.png",
    to: "bgbang2",
  },

  {
    id: 2,
    title: "menú brutal big bang (1 carne)",
    img: "../../public/assets/parrilla/1690802698677_Brutal_Big_Bang_menu_1C.png",
  },
  {
    id: 3,
    title: "menú duo bacon cheddar (2 carnes)",
    img: "../../public/assets/parrilla/1679303531552_homeria_duo-bacon-cheddar-menu_2c.png",
  },
  {
    id: 4,
    title: "menú duo bacon cheddar (1 carnes)",
    img: "../../public/assets/parrilla/1679303651069_homeria_duo-bacon-cheddar-menu_1c.png",
  },
  {
    id: 5,
    title: "menú whooper",
    img: "../../public/assets/parrilla/1661170250431_Menu-Whopper-vaso-new.png",
  },
  {
    id: 6,
    title: "menú doble cheese bacon xxl",
    img: "../../public/assets/parrilla/1661166337752_Menu-doble-cheese-bacon-XXL-vaso-new.png",
  },
  {
    id: 7,
    title: "menú big king xxl",
    img: "../../public/assets/parrilla/1675406322291_Bodegones_APP_600x411_MENU_BIG_KING_XXL.png",
  },
  {
    id: 8,
    title: "menú doble steakhouse",
    img: "../../public/assets/parrilla/1675406231342_Bodegones_APP_600x411_MENU_DOBLE_STEAKHOUSE.png",
  },
  {
    id: 9,
    title: "menú steakhouse",
    img: "../../public/assets/parrilla/1661168250505_Menu-Steakhouse-vaso-new.png",
  },
  {
    id: 10,
    title: "menú the king huevo (2 carnes)",
    img: "../../public/assets/parrilla/1661169836835_Menu-Doble-THE-KING-HUEVO-vaso-new.png",
  },
  {
    id: 12,
    title: "menú the king huevo (1 carnes)",
    img: "../../public/assets/parrilla/1675326116575_Bodegones_APP_600x411_MENU_THE_KING_HUEVO_1C.png",
  },
  {
    id: 13,
    title: "menú doble whopper",
    img: "../../public/assets/parrilla/1661167865482_Menu-Doble-Whopper-vaso-new.png",
  },
  {
    id: 14,
    title: "menú triple whopper",
    img: "../../public/assets/parrilla/1675323135548_Bodegones_APP_600x411_MENU_TRIPLE_WHOPPER.png",
  },

  {
    id: 15,
    title: "menú big king",
    img: "../../public/assets/parrilla/1661165652603_Menu-Big-King-vaso-new.png",
  },
  {
    id: 16,
    title: "menú doble cheeseburger bbq",
    img: "../../public/assets/parrilla/1661166801910_-Menu-DOBLE-CHEESEBURGER-bbq-vaso-new.png",
  },
  {
    id: 17,
    title: "menú doble cheeseburger ",
    img: "../../public/assets/parrilla/1661166634716_Menu-doble-cheese-vaso-new.png",
  },
  {
    id: 18,
    title: "menú doble cheese bacon",
    img: "../../public/assets/parrilla/1661166337752_Menu-doble-cheese-bacon-XXL-vaso-new.png",
  },
  {
    id: 19,
    title: "menú whopper jr",
    img: "../../public/assets/parrilla/1661244256868_Menu-Whopper-Jr-vaso-new.png",
  },
];
const pollo = [
  {
    id: 0,
    title: "menú smoky steakhouse chicken",
    img: "../../public/assets/pollo/1692879377192_MENU_SMOKEY_CRISPY_SELLO_NUEVO_VASO_ESP.png",
  },
  {
    id: 1,
    title: "menú brutal big bang doble crispy",
    img: "../../public/assets/pollo/1690803036670_Brutal_Big_Bang_Menu_2P.png",
  },
  {
    id: 2,
    title: "menú brutal big bang crispy",
    img: "../../public/assets/pollo/1690803654538_Brutal_Big_Bang_menu_1P.png",
  },
  {
    id: 3,
    title: "menú duo bacon cheddar-doble crispy",
    img: "../../public/assets/pollo/1693909167757_homeria_duo-bacon-cheddar-menu_crispy_menu.png",
  },
  {
    id: 4,
    title: "menú doble crispy chicken",
    img: "../../public/assets/pollo/1687766983450_MENU_DOBLE_CRISPY_CHIKEN.png",
  },
  {
    id: 5,
    title: "menú long chicken",
    img: "../../public/assets/pollo/1661244424143_Menu-Long-Chicken-vaso_new.png",
  },
  {
    id: 6,
    title: "menú chicken wrap",
    img: "../../public/assets/pollo/1681971333379_Bodegones_APP_MENU_WRAP_POLLO.png",
  },
  {
    id: 7,
    title: "menú chicken nuggets (x9)",
    img: "../../public/assets/pollo/1675324241138_bodegones-app-600x411_menu-nuggets-x9.png",
  },
];
const kingjr = [
  {
    id: 0,
    title: "king jr",
    img: "../../public/assets/kingjr/1687242617715_King_Jr-hd-esp.png",
  },
  {
    id: 1,
    title: "king jr vegetal",
    img: "../../public/assets/kingjr/1687242651010_King_Jr-vegetal-hd-esp.png",
  },
  {
    id: 2,
    title: "king jr sin gluten",
    img: "../../public/assets/kingjr/1687242680969_King_Jr-sin-gluten-hd-esp.png",
  },
];
const promociones = [
  {
    id: 0,
    title: "king jr",
    img: "../../public/assets/promociones/1692166382384_Cartas_Baraja_new.png",
  },
];
const kingahorro = [
  {
    id: 0,
    title: "king ahorro menú cheeseburger",
    img: "../../public/assets/kingahorro/1682577852307_Homeria_MENU_PET_CHEESEBURGER_600x411.png",
  },
  {
    id: 1,
    title: "king ahorro menú cheeseburger vegetal",
    img: "../../public/assets/kingahorro/1682577898815_Homeria_MENU_PET_CHEESEBURGER_Vegetal_600x411.png",
  },
  {
    id: 2,
    title: "king ahorro menú crispy chicken",
    img: "../../public/assets/kingahorro/1678187149754_menu-crisppy-chicken_pet.png",
  },
  {
    id: 3,
    title: "king ahorro menú chicken burger",
    img: "../../public/assets/kingahorro/1682581402547_PET_Menu_CHIKEN_BURGER.png",
  },
  {
    id: 4,
    title: "king ahorro menú doble cheeseburger bbq",
    img: "../../public/assets/kingahorro/1678187230963_M_doble_cheeseBurger_BBQ.png",
  },
  {
    id: 5,
    title: "king ahorro menú vegetal doble cheeseburger bbq",
    img: "../../public/assets/kingahorro/1678187349474_Homeria_MENU_PET_DOBLE_CHEESEBURGER_BBQ_Vegetal_600x411.png",
  },
  {
    id: 6,
    title: "king ahorro menú big king",
    img: "../../public/assets/kingahorro/1681724935288_MENU_PET_BigKing.png",
  },
  {
    id: 7,
    title: "king ahorro menú big king vegetal",
    img: "../../public/assets/kingahorro/1681724941891_MENU_PET_BIG_KING_Vegetal.png",
  },
  {
    id: 8,
    title: "king ahorro menú big king pollo",
    img: "../../public/assets/kingahorro/1682577211500_Menu_PET_Big_King_Pollo.png",
  },
];
export const Provider = ({ children }) => {
  const [menu, setmenu] = useState(false);
  const [linkExtra, setLinkExtra] = useState(false);
  const [menuMostrar, setMenuMostrar] = useState({
    id: null,
    to: "",
  }); // menu de carta estado
  const openMenu = () => {
    setmenu(!menu);
    // console.log(menu);
  };
  const openLink = () => {
    setLinkExtra(!linkExtra);
    // console.log(linkExtra);
  };

  const mostrarComida = (id, to) => {
    // console.log(id, to);

    setMenuMostrar({
      id: id,
      to: to,
    });
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
        mostrarComida,
        menuMostrar,
        angus,
        novedades,
        parrilla,
        pollo,
        kingjr,
        promociones,
        kingahorro,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
