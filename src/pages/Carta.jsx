import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Carta = () => {
  const { cartaPrincipal } = useContext(AuthContext);
  return (
    <section className="Carta Wrapper">
      <article className="Carta-global">
        <span className="Carta-span">Hola, ¿qué quieres comer hoy?</span>
        <div className="Carta-container">
          {cartaPrincipal.map((ele) => {
            return (
              <div className="Carta-cards">
                <img src={ele.img} alt={ele.title} className="Carta-imgs" />
                <h3 className="Carta-h3">{ele.title}</h3>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
