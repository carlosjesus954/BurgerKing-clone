import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const Carta = () => {
  const { cartaPrincipal, mostrarComida } = useContext(AuthContext);
  const cartaMenu = ({ id, to }) => {
    mostrarComida(id, to);
  };
  return (
    <section className="Carta Wrapper">
      <article className="Carta-global">
        <span className="Carta-span">Hola, ¿qué quieres comer hoy?</span>
        <div className="Carta-container">
          {cartaPrincipal.map((ele) => {
            const id = ele.id;
            const to = ele.to;
            return (
              <NavLink
                to="cartaMenu"
                className="Carta-cards"
                key={ele.id}
                onClick={() => cartaMenu({ id, to })}
              >
                <img src={ele.img} alt={ele.title} className="Carta-imgs" />
                <div className="Carta-subcontainer">
                  <h3 className="Carta-h3">{ele.title}</h3>
                </div>
              </NavLink>
            );
          })}
        </div>
      </article>
    </section>
  );
};
