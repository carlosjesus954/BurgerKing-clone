import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Bebidasycafes = () => {
  const { drinks, cafe, refrescos } = useContext(AuthContext);
  return (
    <div className="Menus">
      {drinks.to === "cafe"
        ? cafe.map((ele) => {
            return (
              <div className="Menus-div" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="Menus-img" />
                <div className="Menus-subcontainer">
                  <h4 className="Menus-h4">{ele.title}</h4>
                </div>
              </div>
            );
          })
        : drinks.to === "refrescos"
        ? refrescos.map((ele) => {
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
