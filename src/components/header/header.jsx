import React from "react";
import "./header.scss";
import logo from "../../assets/icons/logo.svg";
import hamburgerMenu from '../../assets/icons/icon-hamburger.svg'

function header() {
    return <div className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <img src={hamburgerMenu} className="header__menu" alt="hamburger-menu" />
  </div>;
}

export default header;
