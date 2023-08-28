import React from "react";
import { Slither } from "./components/Slither";
import { Carrusel } from "./components/Carrusel";
import { GridImgs } from "./components/GridImgs";

export const Home = () => {
  return (
    <>
      <section className="Home">
        <article className="Home-global Wrapper">
          <h1 className="Home-h1">¿qué te apetece comer hoy?</h1>
          <div className="Home-container">
            <span className="Home-span">pide ahora</span>
            <img
              src="../../public/assets/delivery_motocycle.svg"
              alt="motocycle bk"
              className="Home-logo"
            />
          </div>
        </article>
      </section>
      <Slither />
      <Carrusel />
      <GridImgs />
    </>
  );
};
