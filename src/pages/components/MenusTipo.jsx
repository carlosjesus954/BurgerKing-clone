import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

export const MenusTipo = () => {
  const { menuMostrar, angus, novedades } = useContext(AuthContext);
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
        : null}
    </div>
  );
};
