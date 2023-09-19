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
    to: "kingahorro",
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
    title: "salsas",
    img: "../../public/assets/carta/1635332074207_sauces.png",
    to: "salsas",
  },

  {
    id: 13,
    title: "bebidas y cafés",
    img: "../../public/assets/carta/1626330906435_img-category-bebidas@2x.png",
    to: "bebidas",
  },
  {
    id: 14,
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
    id: 11,
    title: "menú the king huevo (1 carnes)",
    img: "../../public/assets/parrilla/1675326116575_Bodegones_APP_600x411_MENU_THE_KING_HUEVO_1C.png",
  },
  {
    id: 12,
    title: "menú doble whopper",
    img: "../../public/assets/parrilla/1661167865482_Menu-Doble-Whopper-vaso-new.png",
  },
  {
    id: 13,
    title: "menú triple whopper",
    img: "../../public/assets/parrilla/1675323135548_Bodegones_APP_600x411_MENU_TRIPLE_WHOPPER.png",
  },

  {
    id: 14,
    title: "menú big king",
    img: "../../public/assets/parrilla/1661165652603_Menu-Big-King-vaso-new.png",
  },
  {
    id: 15,
    title: "menú doble cheeseburger bbq",
    img: "../../public/assets/parrilla/1661166801910_-Menu-DOBLE-CHEESEBURGER-bbq-vaso-new.png",
  },
  {
    id: 16,
    title: "menú doble cheeseburger ",
    img: "../../public/assets/parrilla/1661166634716_Menu-doble-cheese-vaso-new.png",
  },
  {
    id: 17,
    title: "menú doble cheese bacon",
    img: "../../public/assets/parrilla/1661166337752_Menu-doble-cheese-bacon-XXL-vaso-new.png",
  },
  {
    id: 18,
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
const entrantes = [
  {
    id: 0,
    title: "italian sticks",
    img: "../../public/assets/entrantes/1656578538696_Homeria_Bodegones_ITALIAN_STICKS_X8_600x411.png",
  },
  {
    id: 1,
    title: "alitas de pollo",
    img: "../../public/assets/entrantes/1667459837236_Homeria_Alitas_3UDS_600X411.png",
  },

  {
    id: 2,
    title: "chicken nuggets",
    img: "../../public/assets/entrantes/1625038151642_nuggets_x6.png",
  },
  {
    id: 3,
    title: "patata clásicas",
    img: "../../public/assets/entrantes/1660721215568_Patatas_clasicas-new.png",
  },
  {
    id: 4,
    title: "patatas supreme",
    img: "../../public/assets/entrantes/1515751854847_Supreme_Sour.png",
  },
  {
    id: 5,
    title: "chili cheese bites",
    img: "../../public/assets/entrantes/1660726160893_Chili-Cheese-Bites-x9-new.png",
  },
  {
    id: 6,
    title: "king aros de cebolla",
    img: "../../public/assets/entrantes/1660727204063_AROS-DE-CEBOLLA-x10-NEW.png",
  },
  {
    id: 7,
    title: "nuggets vegetales",
    img: "../../public/assets/entrantes/1675841765115_bodegones-app-600x411_4_nuggets-vegetales.png",
  },
  {
    id: 8,
    title: "cubo de nuggets vegetales",
    img: "../../public/assets/entrantes/1676891663028_CUBO_NUGGETS_x24_Vegetal_(2).png",
  },
  {
    id: 9,
    title: "cubo de alitas",
    img: "../../public/assets/entrantes/1675944045877_bodegones-app-600x411_4_cubo-alitas.png",
  },
  {
    id: 10,
    title: "cubo de alitas (x8) + nuggets",
    img: "../../public/assets/entrantes/1675944124335_bodegones-app-600x411_4_cubo-alitas_nuggets.png",
  },
  {
    id: 11,
    title: "cubo de nuggets",
    img: "../../public/assets/entrantes/1660724133128_CUBO-NUGGETS-x24-new.png",
  },
  {
    id: 12,
    title: "cubo de patatas clásicas",
    img: "../../public/assets/entrantes/1660724441667_CUBO_FRIES_CLASICAS_NEW.png",
  },
  {
    id: 13,
    title: "cubo de patatas supreme",
    img: "../../public/assets/entrantes/1660724478613_CUBO_FRIES_SUPREME_NEW.png",
  },

  {
    id: 14,
    title: "cubo king aros",
    img: "../../public/assets/entrantes/1660724821498_CUBO_ALITAS_AROS_NUGGETS-NEW.png",
  },
  {
    id: 15,
    title: "cubo chili cheese bites",
    img: "../../public/assets/entrantes/1660724179482_CUBO_NUGGESTS_ALITAS_CHILLIS_NEW.png",
  },
  {
    id: 16,
    title: "king fries (+ cheddar + bacon + cebolla) ",
    img: "../../public/assets/entrantes/1575541713387_PATATAS-QUESO_BACON_CEBOLLA_nuevas.png",
  },
  {
    id: 17,
    title: "king supreme (+ cheddar + bacon + cebolla)",
    img: "../../public/assets/entrantes/1575968734427_PATATAS-SUPREME-QUESO_BACON_CEBOLLA.png",
  },
  {
    id: 18,
    title: "patatas sin gluten",
    img: "../../public/assets/entrantes/1660722138349_Patatas_clasicas-sin-gluten-new.png",
  },
];
const vegetariano = [
  {
    id: 0,
    title: "big king vegetal",
    img: "../../public/assets/vegetariano/1676445036678_Big-King-Vegetal.png",
  },
  {
    id: 1,
    title: "long vegetal",
    img: "../../public/assets/vegetariano/1648718131136_Long-Vegetal_600x411.png",
  },
  {
    id: 2,
    title: "whopper vegetal",
    img: "../../public/assets/vegetariano/1648712609985_whopper-Vegetal_new.png",
  },
  {
    id: 3,
    title: "nuggets vegetales",
    img: "../../public/assets/vegetariano/1675841765115_bodegones-app-600x411_4_nuggets-vegetales.png",
  },
  {
    id: 4,
    title: "cubo de nuggets vegetales ",
    img: "../../public/assets/vegetariano/1676891663028_CUBO_NUGGETS_x24_Vegetal_(2).png",
  },
  {
    id: 5,
    title: "menú big king vegetal",
    img: "../../public/assets/vegetariano/1676445083327_bodegones-app-600x411_4_big-king-v.png",
  },
  {
    id: 6,
    title: "menú long vegetal",
    img: "../../public/assets/vegetariano/1647260744221_MLong_Vegetal_Vaso-Ve.png",
  },
  {
    id: 7,
    title: "menú whopper vegetal",
    img: "../../public/assets/vegetariano/1648713107671_whopper-Vegetal_menu-vaso-esp-pt.png",
  },
  {
    id: 8,
    title: "menú nuggets vegetales (x9)",
    img: "../../public/assets/vegetariano/1675943914544_bodegones-app-600x411_4_menu-nuggets-vegetales.png",
  },
];
const hamburguesas = [
  {
    id: 0,
    title: "smoky steakhourse chicken",
    img: "../../public/assets/hamburguesas/1692878872992_SMOKEY_CRISPY_SELLO_NUEVO_ESP.png",
  },
  {
    id: 1,
    title: "smoky steakhourse (1 carne)",
    img: "../../public/assets/hamburguesas/1692878983258_SMOKEY_1C_SELLO_NUEVO_ESP.png",
  },

  {
    id: 2,
    title: "smoky steakhourse (2 carnes)",
    img: "../../public/assets/hamburguesas/1692879054625_SMOKEY_2C_SELLO_NUEVO_ESP.png",
  },
  {
    id: 3,
    title: "cbk doble",
    img: "../../public/assets/hamburguesas/1693829714306_homeria_MB_CBK.png",
  },
  {
    id: 4,
    title: "cbk",
    img: "../../public/assets/hamburguesas/1693829825827_homeria_CCB_sin_semillas_copia.png",
  },
  {
    id: 5,
    title: "brutal big bang (2 carnes)",
    img: "../../public/assets/hamburguesas/1690802093491_Brutal_Big_Bang_2C.png",
  },
  {
    id: 6,
    title: "brutal big bang (1 carne)",
    img: "../../public/assets/hamburguesas/1690802134069_Brutal_Big_Bang_1C.png",
  },
  {
    id: 7,
    title: "brutal big bang doble crispy",
    img: "../../public/assets/hamburguesas/1690802175346_Brutal_Big_Bang_2P.png",
  },
  {
    id: 8,
    title: "brutal big bang crispy",
    img: "../../public/assets/hamburguesas/1690802210846_Brutal_Big_Bang_1P.png",
  },
  {
    id: 9,
    title: "duo bacon cheddar (2 carnes)",
    img: "../../public/assets/hamburguesas/1693909322303_homeria_duo-bacon-cheddar-menu_doble-carne_SS.png",
  },
  {
    id: 10,
    title: "duo bacon cheddar (1 carne)",
    img: "../../public/assets/hamburguesas/1693909356532_homeria_duo-bacon-cheddar-menu_carne_SS.png",
  },
  {
    id: 11,
    title: "duo bacon cheddar - doble crispy chicken",
    img: "../../public/assets/hamburguesas/1693909391714_homeria_duo-bacon-cheddar-menu_crispy_SS.png",
  },
  {
    id: 12,
    title: "big king vegetal",
    img: "../../public/assets/hamburguesas/1676445036678_Big-King-Vegetal.png",
  },
  {
    id: 13,
    title: "long vegetal",
    img: "../../public/assets/hamburguesas/1648718131136_Long-Vegetal_600x411.png",
  },

  {
    id: 14,
    title: "whopper vegetal",
    img: "../../public/assets/hamburguesas/1648712609985_whopper-Vegetal_new.png",
  },
  {
    id: 15,
    title: "whopper",
    img: "../../public/assets/hamburguesas/1660728702734_whopper-new.png",
  },
  {
    id: 16,
    title: "doble cheese bacon xxl",
    img: "../../public/assets/hamburguesas/1660736198585_doble-cheese-bacon-new.png",
  },
  {
    id: 17,
    title: "big king xxl",
    img: "../../public/assets/hamburguesas/1675158582375_Homeria_BigKingXXL_600x411.png",
  },
  {
    id: 18,
    title: "doble steakhouse",
    img: "../../public/assets/hamburguesas/1675844203911_bodegones-app-600x411_doble-steackhouse.png",
  },
  {
    id: 19,
    title: "steakhouse",
    img: "../../public/assets/hamburguesas/1660734544367_steakhouse-new.png",
  },
  {
    id: 20,
    title: "the king huevo (2 carnes)",
    img: "../../public/assets/hamburguesas/1660733707332_the-king-huevo-2c.new.png",
  },
  {
    id: 21,
    title: "the king huevo (1 carne)",
    img: "../../public/assets/hamburguesas/1686128930780_THE_KING_HUEVO_1C_600x411.png",
  },
  {
    id: 22,
    title: "doble whopper",
    img: "../../public/assets/hamburguesas/1660735394192_doble-whopper-new.png",
  },

  {
    id: 23,
    title: "triple whopper",
    img: "../../public/assets/hamburguesas/1676898285441_TRIPLE_WHOPPER.png",
  },
  {
    id: 24,
    title: "big king",
    img: "../../public/assets/hamburguesas/1675158551533_Homeria_BigKing_600x411.png",
  },
  {
    id: 25,
    title: "doble cheeseburger bbq",
    img: "../../public/assets/hamburguesas/1660735627087_doble-cheese-burger-bbq-new.png",
  },
  {
    id: 26,
    title: "cheeseburger",
    img: "../../public/assets/hamburguesas/1675158673022_Homeria_CHEESEBURGER_L600x411.png",
  },
  {
    id: 27,
    title: "doble cheese bacon",
    img: "../../public/assets/hamburguesas/1660735627087_doble-cheese-burger-bbq-new.png",
  },

  {
    id: 28,
    title: "doble cheese salad",
    img: "../../public/assets/hamburguesas/1660735839150_doble-cheese-salad-new.png",
  },

  {
    id: 29,
    title: "burger",
    img: "../../public/assets/hamburguesas/1676446050749_Bodegones_APP_600x411_BURGER_KING_JR.png",
  },
  {
    id: 30,
    title: "whopper jr",
    img: "../../public/assets/hamburguesas/1676446120994_Homeria_WHOPPER_JR_600x411.png",
  },
  {
    id: 31,
    title: "long chicken",
    img: "../../public/assets/hamburguesas/1660734817070_Long_chicken_new.png",
  },
  {
    id: 32,
    title: "crispy chicken",
    img: "../../public/assets/hamburguesas/1660736572217_crispy-chicken-new.png",
  },
  {
    id: 33,
    title: "chicken wrap",
    img: "../../public/assets/hamburguesas/1675324034781_bodegones-app-600x411_wrap-pollo.png",
  },
];

const postres = [
  {
    id: 0,
    title: "king fusion",
    img: "../../public/assets/postres/1679986427064_Homeria_Bodegon_5_King_Fusion_600X411.png",
  },
  {
    id: 1,
    title: "shakes",
    img: "../../public/assets/postres/1675841207272_bodegones-app-600x411_4_shakes.png",
  },
  {
    id: 2,
    title: "burger king sandy",
    img: "../../public/assets/postres/1658813678863_categ_Sandy.png",
  },
  {
    id: 3,
    title: "cono helado",
    img: "../../public/assets/postres/1675068709957_bodegones-cono-nutella_dosconos.png",
  },
  {
    id: 4,
    title: "cofre caliente",
    img: "../../public/assets/postres/1675422018763_bodegones-app-600x411-3_2gofres.png",
  },
  {
    id: 5,
    title: "tarta oreo",
    img: "../../public/assets/postres/1582886037417_Tarta_oreo_Nueva.png",
  },
  {
    id: 6,
    title: "danonino pettidino fresa",
    img: "../../public/assets/postres/1669704844969_Homeria_licencia-kj_600x411_danonino_nov2022.png",
  },
  {
    id: 7,
    title: "brownie",
    img: "../../public/assets/postres/1572343846419_Brownie.png",
  },
];
const singluten = [
  {
    id: 0,
    title: "patatas sin gluten",
    img: "../../public/assets/singluten/1660722138349_Patatas_clasicas-sin-gluten-new.png",
  },
  {
    id: 1,
    title: "menú whopper sin gluten",
    img: "../../public/assets/singluten/1661242007287_-Menu-Whopper-vaso-sin-gluten.png",
  },
  {
    id: 2,
    title: "whopper sin gluten",
    img: "../../public/assets/singluten/1660730028290_whoppe-sin-gluten-new.png",
  },
  {
    id: 3,
    title: "cheeseburger sin gluten",
    img: "../../public/assets/singluten/1608535257776_Hamburguesa_con_Queso_sin_gluten_Logo_New.png",
  },
  {
    id: 4,
    title: "burger sin gluten",
    img: "../../public/assets/singluten/1608535244754_Hamburguesa_sin_gluten_Logo_New.png",
  },
];
const salsas = [
  {
    id: 0,
    title: "sour cream",
    img: "../../public/assets/salsas/1672209581588_homeria_salsa-heinz_sour.png",
  },
  {
    id: 1,
    title: "salsa miel y mostaza",
    img: "../../public/assets/salsas/1672209568327_homeria_salsa-heinz_honeymustard.png",
  },
  {
    id: 2,
    title: "salsa barbacoa",
    img: "../../public/assets/salsas/1672209546218_homeria_salsa-heinz_barbacoa.png",
  },
  {
    id: 3,
    title: "salsa queso",
    img: "../../public/assets/salsas/1526548909756_QUESO_DIP.jpg",
  },
  {
    id: 4,
    title: "salsa mayonesa",
    img: "../../public/assets/salsas/1672209575183_homeria_salsa-heinz_mayo.png",
  },
];

const bebidastipo = [
  {
    id: 0,
    title: "café y te",
    img: "../../public/assets/tiposbebida/img-cafe-category@2x.png",
    to: "cafe",
  },
  {
    id: 1,
    title: "bebidas",
    img: "../../public/assets/tiposbebida/img-refrescos-category@2x.png",
    to: "refrescos",
  },
];
const cafe = [
  {
    id: 0,
    title: "café expresso",
    img: "../../public/assets/tiposbebida/cafes/1523432026881_Cafe_Espresso_378x268.jpg",
  },
  {
    id: 1,
    title: "café americano",
    img: "../../public/assets/tiposbebida/cafes/1523432044755_Cafe_Americano_378x268.jpg",
  },
  {
    id: 2,
    title: "café capuccino",
    img: "../../public/assets/tiposbebida/cafes/1523432076245_Capuccino_378x268.jpg",
  },
  {
    id: 3,
    title: "café latte",
    img: "../../public/assets/tiposbebida/cafes/1523432110096_Cafe_Latte_378x268.jpg",
  },
  {
    id: 4,
    title: "café macciato",
    img: "../../public/assets/tiposbebida/cafes/1523432149605_Cafe_Macchiato_378x268.jpg",
  },
  {
    id: 5,
    title: "café descafeinado expresso",
    img: "../../public/assets/tiposbebida/cafes/1575545571923_1523432009879_Cafe_Espresso_378x268.png",
  },
];

const refrescos = [
  {
    id: 0,
    title: "coca-cola",
    img: "../../public/assets/tiposbebida/refrescos/1661171248886_Homeria_600x411_Bebidas-CC-Original.png",
  },
  {
    id: 1,
    title: "agua mineral",
    img: "../../public/assets/tiposbebida/refrescos/1473146317131_agua.png",
  },
  {
    id: 2,
    title: "cerveza",
    img: "../../public/assets/tiposbebida/refrescos/1465453882086_Cerveza.png",
  },
  {
    id: 3,
    title: "coca-cola zero",
    img: "../../public/assets/tiposbebida/refrescos/1661171529271_Bebidas-CC-ZERO-vaso-new.png",
  },
  {
    id: 4,
    title: "cerveza sin alcohol",
    img: "../../public/assets/tiposbebida/refrescos/1562599807914_Cerveza_sin_alcohol.png",
  },
  {
    id: 5,
    title: "coca-cola zero zero",
    img: "../../public/assets/tiposbebida/refrescos/1656311055820_Coca_Cola_Zero_Zero.png",
  },
  {
    id: 6,
    title: "fanta naranja zero",
    img: "../../public/assets/tiposbebida/refrescos/1595931712585_Naranja_Zero.png",
  },
  {
    id: 7,
    title: "fanta limón zero",
    img: "../../public/assets/tiposbebida/refrescos/1595931970340_Limon_Zero.png",
  },
  {
    id: 8,
    title: "nestea sin azúcar",
    img: "../../public/assets/tiposbebida/refrescos/1595932491671_Nestea.png",
  },
  {
    id: 9,
    title: "trina",
    img: "../../public/assets/tiposbebida/refrescos/1565091336509_Trina_LoCal.png",
  },
  {
    id: 10,
    title: "troma zero lata 33 cl",
    img: "../../public/assets/tiposbebida/refrescos/1672902870223_Homeria_lataTrina_600X411.png",
  },
  {
    id: 11,
    title: "monster ultra white 500 ml",
    img: "../../public/assets/tiposbebida/refrescos/1646988144328_Homeria_Monster_esp_new.png",
  },
  {
    id: 12,
    title: "monster energy 500 ml",
    img: "../../public/assets/tiposbebida/refrescos/1606206902211_Moster_Energy_500ml.png",
  },
  {
    id: 13,
    title: "monster mango loco",
    img: "../../public/assets/tiposbebida/refrescos/1646724003667_monster-mango-loco-sin-dest.png",
  },
  {
    id: 14,
    title: "aquatius zero",
    img: "../../public/assets/tiposbebida/refrescos/1595935703771_Aquarius.png",
  },
  {
    id: 15,
    title: "caprisun tropical",
    img: "../../public/assets/tiposbebida/refrescos/1656312366800_TP_FruitCrush_Tropical.png",
  },
];
const dogper = [
  {
    id: 0,
    title: "dogper",
    parr: "Si tu perro es de los que no te deja comer tranquilo, ¡píllale su propio menú!, porque él también se merece gozar de todo el sabor de la parrilla. Añade el hueso Dogpper a tu pedido, y ya de paso disfruta de tu comida en paz (guiño guiño)",
    img: "../../public/assets/carta/1650275448609_Dogpper.png",
  },
];
export const Provider = ({ children }) => {
  const [menu, setmenu] = useState(false);
  const [linkExtra, setLinkExtra] = useState(false);
  const [menuMostrar, setMenuMostrar] = useState({
    id: null,
    to: "",
  }); // menu de carta estado
  const [drinks, setDrinks] = useState({
    id: null,
    to: "",
  });

  const openMenu = () => {
    setmenu(!menu);
    // console.log(menu);
  };
  const openLink = () => {
    setLinkExtra(!linkExtra);
    // console.log(linkExtra);
  };
  const resetDrinks = () => {
    setDrinks({ id: null, to: "" });
  };
  const mostrarbebida = (id, to) => {
    console.log(id, to);

    setDrinks({
      id: id,
      to: to,
    });
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
        entrantes,
        vegetariano,
        hamburguesas,
        postres,
        singluten,
        salsas,
        bebidastipo,
        dogper,
        drinks,
        mostrarbebida,
        cafe,
        refrescos,
        resetDrinks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
