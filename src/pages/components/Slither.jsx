import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Slither = () => {
  const { slither } = useContext(AuthContext);
  const [carrusel, setCarrusel] = useState(false);
  const moverCarrusel = (direction) => {
    if (direction === 1) {
      if (carrusel) {
        setCarrusel(!carrusel);
      } else {
        return;
      }
    }
    if (direction === 2) {
      if (carrusel) {
        return;
      } else {
        setCarrusel(!carrusel);
      }
    }
  };
  return (
    <section className="Home-slither Slither">
      <div className="Slither-btns">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="currentColor"
          className="Slither-btn--arrow"
          viewBox="0 0 16 16"
          onClick={() => moverCarrusel(1)}
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="currentColor"
          className="Slither-btn--arrow"
          viewBox="0 0 16 16"
          onClick={() => moverCarrusel(2)}
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <article
        className={`Slither-global ${
          carrusel ? "Slither-global--moveRight" : ""
        }`}
      >
        {slither.map((ele) => {
          return (
            <div
              className="Slither-cards"
              key={ele.id}
              style={{
                backgroundColor: ele.background,
              }}
            >
              <img src={ele.img} alt={ele.title} className="Slither-img" />
              <div className="Slither-container">
                <h3
                  className="Slither-h3"
                  style={{
                    color: ele.colorTitle,
                  }}
                >
                  {ele.title}
                </h3>
                <NavLink
                  className="Slither-link"
                  style={{
                    backgroundColor: ele.backgroundBtn,
                    color: ele.colorLetter,
                    textTransform: "uppercase",
                  }}
                >
                  {ele.btn}
                </NavLink>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};
