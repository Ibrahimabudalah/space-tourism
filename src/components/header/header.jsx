import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/icons/logo.svg";
import hamburgerMenu from "../../assets/icons/icon-hamburger.svg";
import xMenu from "../../assets/icons/icon-close.svg";
import {pages} from "./utils";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <div onClick={menuToggle} className="header__container">
        {menuOpen ? (
          <img
            src={xMenu}
            alt="menu closed"
            className="header__menu"
            onClick={menuClose}
          />
        ) : (
          <img
            src={hamburgerMenu}
            className="header__menu"
            alt="hamburger-menu"
          />
        )}

        <ul className={`header__list ${!menuOpen ? "header__list--show" : ""}`}>
          {pages.map((item, index) => {
            return <li className={item.cName} key={index}>{item.number + item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
