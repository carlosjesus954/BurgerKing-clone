import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const MenusTipo = () => {
  const {
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
    cafe,
    refrescos,
  } = useContext(AuthContext);
  console.log(menuMostrar.to);
  return (
    <div className="Menus">
      {menuMostrar.to === "angus"
        ? angus.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "novedades"
        ? novedades.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "menuparrilla"
        ? parrilla.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "menupollo"
        ? pollo.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "king"
        ? kingjr.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "promociones"
        ? promociones.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "kingahorro"
        ? kingahorro.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "snacks"
        ? entrantes.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "100vegetariano"
        ? vegetariano.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "hamburguesas"
        ? hamburguesas.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "postres"
        ? postres.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "singluten"
        ? singluten.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "salsas"
        ? salsas.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "bebidas"
        ? bebidastipo.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : menuMostrar.to === "dogper"
        ? dogper.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
