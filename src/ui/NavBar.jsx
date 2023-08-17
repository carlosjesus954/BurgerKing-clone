import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { Nav, navExtra, menu, openMenu } = useContext(AuthContext);
  return (
    <header className="Header">
      <div className="Header-global Wrapper">
        <div className="Header-container">
          <img
            src="../assets/logoBK.svg"
            alt="logo burgerking"
            className="Header-logo"
          />
          <div
            className={`Header-container--englobal ${
              menu ? "Header-container--englobalActive" : ""
            }`}
          >
            <nav className="Header-nav">
              <ul className="Header-ul">
                {Nav.map((ele) => (
                  <NavLink key={ele.id} to={ele.to} className="Header-link">
                    {ele.title}
                  </NavLink>
                ))}
                <li className="Header-link Header-link--extra">burger king</li>
                <div className="Header-link--mostrar">
                  {navExtra.map((ele) => (
                    <a href={ele.href} className="Header-link" key={ele.id}>
                      {ele.title}
                    </a>
                  ))}
                </div>
              </ul>
            </nav>
            <button className="Header-btn">iniciar sesión</button>
          </div>
        </div>
        <div className="Header-subcontainer">
          <img
            src="../../public/assets/spain-flag-d61b96896777d1c2.png"
            alt="spain"
            className="Header-img--spain"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="Header-menu"
            viewBox="0 0 16 16"
            onClick={() => openMenu()}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};
