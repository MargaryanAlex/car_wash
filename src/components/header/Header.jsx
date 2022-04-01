import React from "react";
import logo from "src/resource/img/logo.svg";
import armenian from "src/resource/icons/flagArmenia.svg";
import style from "./style/header.module.scss";
import arrow from "src/resource/icons/arrowDown.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { link, text, img } = props;
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to="/">
          <img src={logo} alt={style.logo} />
        </NavLink>
      </div>
      <div className={style.center}>
        <p>Մեր մասին</p>
        <p>Կոնտակտներ</p>
        <p>Ծառայություններ</p>
      </div>
      <div className={style.rightBar}>
        <div>
          {img ? <img src={img} alt="home" /> : ""}

          <NavLink to={link}>{text} </NavLink>
        </div>
        <div className={style.language}>
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
