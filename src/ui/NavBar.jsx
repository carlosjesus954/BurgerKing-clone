import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { Nav, navExtra } = useContext(AuthContext);
  return (
    <header className="Header">
      <div className="Header-global Wrapper">
        <div className="Header-container">
          <img
            src="../assets/logoBK.svg"
            alt="logo burgerking"
            className="Header-logo"
          />
          <nav className="Header-nav">
            <ul className="Header-ul">
              {Nav.map((ele) => (
                <NavLink key={ele.id} to={ele.to} className="Header-link">
                  {ele.title}
                </NavLink>
              ))}
              <li className="Header-link">burger king</li>
              {}
            </ul>
          </nav>
        </div>
        <div className="Header-subcontainer">
          <img
            src="../../public/assets/spain-flag-d61b96896777d1c2.png"
            alt="spain"
            className="Header-img--spain"
          />
          <button className="Header-btn">iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};
