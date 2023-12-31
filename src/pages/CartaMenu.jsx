import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MenusTipo } from "./components/MenusTipo";
import { useNavigate } from "react-router-dom";
import { Bebidasycafes } from "./components/Bebidasycafes";

export const CartaMenu = () => {
  const { cartaPrincipal, mostrarComida, menuMostrar, drinks, resetDrinks } =
    useContext(AuthContext);
  const cartaMenu = ({ id, to }) => {
    mostrarComida(id, to);
  };

  const navigate = useNavigate();
  const backCarta = () => {
    navigate("/carta");
    resetDrinks();
  };
  return (
    <section className="Comida Wrapper">
      <article className="Comida-global">
        <div className="Comida-slider">
          {cartaPrincipal.map((ele) => {
            const id = ele.id;
            const to = ele.to;
            return (
              <div
                className={`Comida-cards  ${
                  menuMostrar.id === ele.id ? "Comida-cards--active" : ""
                }`}
                key={ele.id}
                onClick={() => cartaMenu({ id, to })}
              >
                <img src={ele.img} alt={ele.title} className="Comida-img" />
                <h3 className="Comida-h3">{ele.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="Comida-container" to={"carta"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="currentColor"
            className="Comida-btn"
            viewBox="0 0 16 16"
            onClick={() => backCarta()}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>

        <div className="Comida-subcontainer">
          {drinks.to === "cafe" || drinks.to === "refrescos" ? (
            <Bebidasycafes />
          ) : (
            <MenusTipo />
          )}
        </div>
      </article>
    </section>
  );
};
