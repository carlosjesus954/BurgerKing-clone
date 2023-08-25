import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";

export const Carrusel = () => {
  const { carrusel, carruselBtns } = useContext(AuthContext);
  const [carruselId, setCarruselId] = useState(0);

  const cambiarCarrusel = (id) => {
    setCarruselId(id);
  };
  return (
    <section
      className={`Carrusel ${
        carruselId === 0
          ? "Carrusel-0"
          : carruselId === 1
          ? "Carrusel-1"
          : carruselId === 2
          ? "Carrusel-2"
          : carruselId === 3
          ? "Carrusel-3"
          : ""
      } `}
    >
      <article className="Carrusel-global">
        <div
          className={`Carrusel-container ${
            carruselId === 0
              ? ""
              : carruselId === 1
              ? "Carrusel-container--move1"
              : carruselId === 2
              ? "Carrusel-container--move2"
              : carruselId === 3
              ? "Carrusel-container--move3"
              : ""
          } `}
        >
          <div className="Carrusel-subcontainer">
            {carrusel.map((ele) => {
              return (
                <div className="Carrusel-cards" key={ele.id}>
                  <div className="Carrusel-text">
                    <h3 className="Carrusel-h3">{ele.title}</h3>
                    <span className="Carrusel-span">{ele.parraf}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Carrusel-btns">
          {carruselBtns.map((ele) => {
            return (
              <div
                key={ele.id}
                className={`Carrusel-btn ${
                  carruselId === ele.id ? "Carrusel-btn--active" : ""
                }`}
                onClick={() => cambiarCarrusel(ele.id)}
              >
                .
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
