import React from "react";
import logo from "src/resource/img/logo.svg";
import armenian from "src/resource/icons/flagArmenia.svg";
import "../header/style/header.css";
import arrow from "src/resource/icons/arrowDown.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { link, text, img } = props;
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="center">
        <p>Մեր մասին</p>
        <p>Կոնտակտներ</p>
        <p>Ծառայություններ</p>
      </div>
      <div className="rightBar">
        <div>
          {img ? <img src={img} alt="home" /> : ""}

          <NavLink to={link}>{text} </NavLink>
        </div>
        <div className="language">
          <img
            src={armenian}
            alt="Armenian flag"
            style={{ width: "18px", height: "14px" }}
          />
          <img src={arrow} alt="arrowDown" />
        </div>
      </div>
    </div>
  );
};

export default Header;
