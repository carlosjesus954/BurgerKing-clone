import React from "react";

export const CartaMenu = () => {
  return (
    <section className="Comida">
      <article className="Comida-global">
        <h2>hola</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor expedita
        fugiat molestias tenetur laborum est officiis id? Cum autem mollitia
        error. Aperiam corporis cupiditate ullam excepturi iusto placeat
        voluptas totam.
        <div className="Comida-slider"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="currentColor"
          className="Comida-btn"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <div className="Comida-container"></div>
      </article>
    </section>
  );
};
