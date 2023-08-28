import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const GridImgs = () => {
  const { gridImgs } = useContext(AuthContext);
  return (
    <section className="Grid">
      <article className="Grid-global">
        {gridImgs.map((ele) => {
          const img = ele.img;
          return (
            <a
              href="https://www.instagram.com/burgerking_es/?hl=es"
              className="Grid-links"
              key={ele.id}
            >
              <img src={img} alt="Bk imagenes" className="Grid-imgs" />
            </a>
          );
        })}
      </article>
    </section>
  );
};
